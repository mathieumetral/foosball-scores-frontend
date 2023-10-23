'use client';

import {Component, createElement, FunctionComponent, ReactNode} from 'react';
import {ErrorBoundaryWithRetryContext} from '@lib/errors/boundary/error-boundary-with-retry-context';

export interface ErrorBoundaryFallbackProps {
  retry: () => void;
}

interface ErrorBoundaryProps {
  serverComponent: ReactNode;
  clientComponent: ReactNode;
  fallback: ReactNode | FunctionComponent<ErrorBoundaryFallbackProps>;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  retryCount: number;
}

// Component
export class ErrorBoundaryWithRetry extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {hasError: false, retryCount: 0};
    this.retry = this.retry.bind(this);
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  shouldComponentUpdate(nextProps: Readonly<ErrorBoundaryProps>, nextState: Readonly<ErrorBoundaryState>): boolean {
    return (
      this.props.serverComponent !== nextProps.serverComponent ||
      this.props.clientComponent !== nextProps.clientComponent ||
      this.props.fallback !== nextProps.fallback ||
      this.state.hasError !== nextState.hasError ||
      this.state.retryCount !== nextState.retryCount
    );
  }

  render() {
    if (this.state.hasError) {
      const {fallback} = this.props;

      if (typeof fallback === 'function') {
        return fallback({
          // eslint-disable-next-line @typescript-eslint/unbound-method
          retry: this.retry,
        });
      }

      return fallback;
    }

    let childToRender: ReactNode;
    if (this.state.retryCount > 0) {
      childToRender = this.props.clientComponent;
    } else {
      childToRender = this.props.serverComponent;
    }

    return createElement(
      ErrorBoundaryWithRetryContext.Provider,
      {value: {retryCount: this.state.retryCount}},
      childToRender
    );
  }

  retry() {
    this.setState({hasError: false, retryCount: this.state.retryCount + 1});
  }
}
