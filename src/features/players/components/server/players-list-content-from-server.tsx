'use client';

import {usePaginationFragment, usePreloadedQuery} from 'react-relay';
import {SerializablePreloadedQuery} from '@lib/relay/queries/load-serializable-query';
import {useSerializablePreloadedQuery} from '@lib/relay/queries/use-serializable-preloaded-query';
import {playersListContentQuery as playersListContentQueryType} from '@data/__generated__/playersListContentQuery.graphql';
import {
  PlayersListContent,
  playersListContentFragment,
  playersListContentQuery,
} from '@features/players/components/players-list-content';
import {playersListContentFragment$key} from '@data/__generated__/playersListContentFragment.graphql';

interface Props {
  preloadedQuery: SerializablePreloadedQuery<playersListContentQueryType>;
}

export function PlayersListContentFromServer({preloadedQuery}: Props) {
  const queryRef = useSerializablePreloadedQuery(preloadedQuery);
  const queryData = usePreloadedQuery(playersListContentQuery, queryRef);
  const {data, loadNext, hasNext} = usePaginationFragment<playersListContentQueryType, playersListContentFragment$key>(
    playersListContentFragment,
    queryData
  );

  return <PlayersListContent data={data} loadNext={loadNext} hasNext={hasNext} />;
}
