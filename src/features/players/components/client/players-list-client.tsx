'use client';

import {useLazyLoadQuery} from 'react-relay';
import {playersListContentQuery} from '@features/players/components/players-list-content';
import {useErrorBoundaryWithRetry} from '@lib/errors/boundary/error-boundary-with-retry-context';
import {PlayersListContentFromClient} from '@features/players/components/client/players-list-content-from-client';
import {playersListContentQuery as playersListContentQueryType} from '@data/__generated__/playersListContentQuery.graphql';

export function PlayersListClient() {
  const error = useErrorBoundaryWithRetry();

  const data = useLazyLoadQuery<playersListContentQueryType>(
    playersListContentQuery,
    {},
    {
      fetchKey: error?.retryCount,
    }
  );

  return <PlayersListContentFromClient queryData={data} />;
}
