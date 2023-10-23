'use client';

import {createContext, useContext} from 'react';
import {ErrorBoundaryState} from '@lib/errors/boundary/error-boundary-with-retry';

export const ErrorBoundaryWithRetryContext = createContext<Pick<ErrorBoundaryState, 'retryCount'> | null>(null);

export function useErrorBoundaryWithRetry() {
  return useContext(ErrorBoundaryWithRetryContext);
}
