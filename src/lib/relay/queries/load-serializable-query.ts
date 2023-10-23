import {ConcreteRequest, GraphQLResponse, OperationType, RequestParameters, VariablesOf} from 'relay-runtime';
import {networkFetch} from '@lib/relay/network';

export interface SerializablePreloadedQuery<TQuery extends OperationType> {
  params: RequestParameters;
  variables: VariablesOf<TQuery>;
  response: GraphQLResponse;
}

export async function loadSerializableQuery<TQuery extends OperationType>(
  query: ConcreteRequest,
  variables: VariablesOf<TQuery> = {}
): Promise<SerializablePreloadedQuery<TQuery>> {
  const response = await networkFetch(query.params, variables);
  return {
    params: query.params,
    variables,
    response,
  };
}
