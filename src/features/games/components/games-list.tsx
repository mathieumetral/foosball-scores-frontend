'use client';

import {graphql} from 'relay-runtime';
import {useLazyLoadQuery, usePaginationFragment} from 'react-relay';
import {gamesListQuery as gamesListQueryType} from '@data/__generated__/gamesListQuery.graphql';
import {gamesListContentFragment$key} from '@data/__generated__/gamesListContentFragment.graphql';
import {GamesListItem} from '@features/games/components/games-list-item';
import {CodeBlock} from '@lib/ui/components/code-block';

const gamesListQuery = graphql`
  query gamesListQuery {
    ...gamesListContentFragment
  }
`;

const gamesListContentFragment = graphql`
  fragment gamesListContentFragment on Query
  @argumentDefinitions(cursor: {type: "ID"}, count: {type: "Int", defaultValue: 16})
  @refetchable(queryName: "gamesListContentRefetchQuery") {
    games(first: $count, after: $cursor) @connection(key: "gamesListContentFragment_games") {
      edges {
        node {
          id
          ...gamesListItemFragment
        }
      }
    }
  }
`;

export function GamesList() {
  const queryData = useLazyLoadQuery<gamesListQueryType>(gamesListQuery, {});
  const {data} = usePaginationFragment<gamesListQueryType, gamesListContentFragment$key>(
    gamesListContentFragment,
    queryData
  );

  const gameEdges = data.games.edges;

  return (
    <div className="pt-2">
      <div className="mb-6 rounded-lg bg-white p-2 text-sm text-slate-600">
        <div className="text-sm leading-6 text-gray-600">
          This list is loaded using
          <CodeBlock>useLazyLoadQuery</CodeBlock>. This means that the request to the server is made only once the
          component
          <CodeBlock>src/features/games/components/games-list.tsx</CodeBlock>
          is rendered. In this particular case, this is not the most optimal as we wait for React&apos;s render before
          making the request. However, it is used here to showcase different possibilities.
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-5 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {gameEdges.length > 0 ? (
          gameEdges.filter(game => game?.node).map(edge => <GamesListItem key={edge!.node.id} game={edge!.node} />)
        ) : (
          <div className="col-span-full text-center text-gray-500">No data available</div>
        )}
      </div>
    </div>
  );
}
