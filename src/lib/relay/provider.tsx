'use client';

import {ReactNode} from 'react';
import {RelayEnvironmentProvider} from 'react-relay';
import {getCurrentEnvironment} from '@lib/relay/environment';

export function RelayProvider({children}: {children: ReactNode}) {
  const environment = getCurrentEnvironment();

  return <RelayEnvironmentProvider environment={environment}>{children}</RelayEnvironmentProvider>;
}
