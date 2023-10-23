import {Environment, RecordSource, Store} from 'relay-runtime';
import {createNetwork} from '@lib/relay/network';
import {isServer} from '@lib/relay/utils';

const environment = createEnvironment();

export function getCurrentEnvironment() {
  if (isServer) {
    return createEnvironment();
  }

  return environment;
}

function createEnvironment() {
  return new Environment({
    network: createNetwork(),
    store: new Store(RecordSource.create()),
    isServer,
  });
}
