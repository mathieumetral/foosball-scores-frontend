import {graphql} from 'relay-runtime';
import {PlayersListItem} from './players-list-item';
import {playersListContentFragment$data} from '@data/__generated__/playersListContentFragment.graphql';
import {LoadMoreFn} from 'react-relay';
import {playersListContentQuery as playersListContentQueryType} from '@data/__generated__/playersListContentQuery.graphql';
import {PlayersListHeaderColumns} from '@features/players/components/players-list';

export const playersListContentQuery = graphql`
  query playersListContentQuery {
    ...playersListContentFragment
  }
`;

export const playersListContentFragment = graphql`
  fragment playersListContentFragment on Query
  @argumentDefinitions(cursor: {type: "ID"}, count: {type: "Int", defaultValue: 10})
  @refetchable(queryName: "playersListContentRefetchQuery") {
    players(first: $count, after: $cursor) @connection(key: "playersListContentFragment_players") {
      edges {
        node {
          id
          ...playersListItemFragment
        }
      }
      # We can retrieve the page items and build pagination based on this information.
      # Currently, I use loadNext which simply loads the next page, adding records to the existing ones.
      # This approach doesn't require fetching windowed pagination information.
    }
  }
`;

interface Props {
  data: playersListContentFragment$data;
  loadNext: LoadMoreFn<playersListContentQueryType>;
  hasNext: boolean;
}

export function PlayersListContent({data, loadNext, hasNext}: Props) {
  const playerEdges = data.players.edges;

  const handleLoadMore = () => loadNext(10);

  return (
    <>
      <tbody>
        {playerEdges.length > 0 ? (
          playerEdges
            .filter(player => player?.node)
            .map(playerEdge => <PlayersListItem key={playerEdge!.node.id} player={playerEdge!.node} />)
        ) : (
          <tr>
            <td colSpan={PlayersListHeaderColumns.length} className="py-4 text-center text-gray-500">
              No data available
            </td>
          </tr>
        )}
      </tbody>
      {hasNext && (
        <tfoot>
          <tr>
            <td colSpan={PlayersListHeaderColumns.length} className="py-4 text-center">
              <button onClick={handleLoadMore} className="text-blue-500 hover:underline">
                Load more
              </button>
            </td>
          </tr>
        </tfoot>
      )}
    </>
  );
}
