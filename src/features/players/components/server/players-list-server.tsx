import {loadSerializableQuery} from '@lib/relay/queries/load-serializable-query';
import playersListContentQueryNode, {
  playersListContentQuery as playersListContentQueryType,
} from '@data/__generated__/playersListContentQuery.graphql';
import {PlayersListContentFromServer} from '@features/players/components/server/players-list-content-from-server';

export async function PlayersListServer() {
  await new Promise(r => setTimeout(r, 500));
  const preloadedQuery = await loadSerializableQuery<playersListContentQueryType>(playersListContentQueryNode);

  return <PlayersListContentFromServer preloadedQuery={preloadedQuery} />;
}
