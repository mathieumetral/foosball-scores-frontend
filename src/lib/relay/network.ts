import {CacheConfig, GraphQLResponse, Network, QueryResponseCache, RequestParameters, Variables} from 'relay-runtime';

// Here, we are using a cache that will also be present on the server side.
// This can be risky because if our query results depend on the logged-in user,
// we could end up with a memory leak. However, in this project, that's not the case
// in this project. The advantage of using server-side caching is that when
// a Relay query (loadSerializableQuery) is called in a server component, the child
// components will have access to the data from that query when the server does its SSR execution.
// This explains the low ttl.
//
// One way to avoid a global cache would be to create a Relay environment and
// an associated cache for every incoming request. This way, every Relay environment
// has its own cache associated with each request.
//
// I'm not doing this here as it's not necessary.
export const responseCache: QueryResponseCache = new QueryResponseCache({
  size: 100,
  ttl: 50, // 50 milliseconds, to resolve preloaded results
});

export function createNetwork() {
  async function fetchResponse(params: RequestParameters, variables: Variables, cacheConfig: CacheConfig) {
    const isQuery = params.operationKind === 'query';
    const cacheKey = params.id ?? params.cacheID;
    const forceFetch = cacheConfig && cacheConfig.force;
    if (responseCache != null && isQuery && !forceFetch) {
      const fromCache = responseCache.get(cacheKey, variables);
      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }

    return networkFetch(params, variables);
  }

  return Network.create(fetchResponse);
}

export async function networkFetch(request: RequestParameters, variables: Variables) {
  const url = 'http://localhost:4000/graphql';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
    cache: 'no-store',
  });

  const json = (await response.json()) as GraphQLResponse;

  // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
  // property of the response. If any exceptions occurred when processing the request,
  // throw an error to indicate to the developer what went wrong.
  if ('errors' in json && Array.isArray(json.errors)) {
    throw new Error(
      `Error fetching GraphQL query '${request.name}' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors
      )}`
    );
  }

  return json;
}
