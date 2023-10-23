'use client';

import {playersListContentFragment$key} from '@data/__generated__/playersListContentFragment.graphql';
import {PlayersListContent, playersListContentFragment} from '@features/players/components/players-list-content';
import {usePaginationFragment} from 'react-relay';
import {
  playersListContentQuery as playersListContentQueryType,
  playersListContentQuery$data,
} from '@data/__generated__/playersListContentQuery.graphql';

interface Props {
  queryData: playersListContentQuery$data;
}

export function PlayersListContentFromClient({queryData}: Props) {
  const {data, loadNext, hasNext} = usePaginationFragment<playersListContentQueryType, playersListContentFragment$key>(
    playersListContentFragment,
    queryData
  );

  return <PlayersListContent data={data} loadNext={loadNext} hasNext={hasNext} />;
}
