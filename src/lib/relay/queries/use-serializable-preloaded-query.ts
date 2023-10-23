import {useMemo} from 'react';
import {PreloadedQuery, PreloadFetchPolicy, useRelayEnvironment} from 'react-relay';
import {OperationType} from 'relay-runtime';
import {responseCache} from '@lib/relay/network';
import {SerializablePreloadedQuery} from '@lib/relay/queries/load-serializable-query';

export function useSerializablePreloadedQuery<TQuery extends OperationType>(
  preloadQuery: SerializablePreloadedQuery<TQuery>,
  fetchPolicy: PreloadFetchPolicy = 'store-or-network'
): PreloadedQuery<TQuery> {
  useMemo(() => {
    writePreloadedQueryToCache(preloadQuery);
  }, [preloadQuery]);
  const environment = useRelayEnvironment();

  return {
    environment,
    fetchKey: preloadQuery.params.id ?? preloadQuery.params.cacheID,
    fetchPolicy,
    isDisposed: false,
    name: preloadQuery.params.name,
    kind: 'PreloadedQuery',
    variables: preloadQuery.variables,
    dispose: () => {
      return;
    },
  };
}

function writePreloadedQueryToCache<TQuery extends OperationType>(
  preloadedQueryObject: SerializablePreloadedQuery<TQuery>
) {
  const cacheKey = preloadedQueryObject.params.id ?? preloadedQueryObject.params.cacheID;
  responseCache?.set(cacheKey, preloadedQueryObject.variables, preloadedQueryObject.response);
}
