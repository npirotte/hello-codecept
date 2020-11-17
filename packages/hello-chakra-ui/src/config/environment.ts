import { Environment, RecordSource, Store, Observable,  } from 'relay-runtime';
import {
  RelayNetworkLayer,
  urlMiddleware,
  cacheMiddleware,
} from 'react-relay-network-modern';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const subscriptionClient = new SubscriptionClient('ws://localhost:3000/graphql', {
    reconnect: true,
});

const subscribe = (request, variables) => {
  const subscribeObservable = subscriptionClient.request({
      query: request.text,
      operationName: request.name,
      variables,
  });
  // Important: Convert subscriptions-transport-ws observable type to Relay's
  return Observable.from(subscribeObservable as any);
};

const network = new RelayNetworkLayer(
  [
    cacheMiddleware({
      size: 100, // max 100 requests
      ttl: 900000, // 15 minutes
    }),
    urlMiddleware({
      url: (req) => Promise.resolve('/graphql'),
    })
  ],
  {
    subscribeFn: subscribe as any
  }
); // as second arg you may pass advanced options for RRNL

const source = new RecordSource();
const store = new Store(source);
export const environment = new Environment({ network, store });