/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TodoList_SubscriptionVariables = {};
export type TodoList_SubscriptionResponse = {
    readonly todoAdded: ReadonlyArray<{
        readonly id: string;
        readonly title: string | null;
    }>;
};
export type TodoList_Subscription = {
    readonly response: TodoList_SubscriptionResponse;
    readonly variables: TodoList_SubscriptionVariables;
};



/*
subscription TodoList_Subscription {
  todoAdded {
    id
    title
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todoAdded",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoList_Subscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoList_Subscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f158bbf919a953a1b93d8704d357eaa3",
    "id": null,
    "metadata": {},
    "name": "TodoList_Subscription",
    "operationKind": "subscription",
    "text": "subscription TodoList_Subscription {\n  todoAdded {\n    id\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = '047df580bbd53e436216c0ecc99652ab';
export default node;
