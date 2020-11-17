/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TodoList_QueryVariables = {};
export type TodoList_QueryResponse = {
    readonly todos: ReadonlyArray<{
        readonly id: string;
        readonly title: string | null;
    }>;
};
export type TodoList_Query = {
    readonly response: TodoList_QueryResponse;
    readonly variables: TodoList_QueryVariables;
};



/*
query TodoList_Query {
  todos {
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
    "name": "todos",
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
    "name": "TodoList_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoList_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "09a07c147186b66fd20bfaced2d3eddb",
    "id": null,
    "metadata": {},
    "name": "TodoList_Query",
    "operationKind": "query",
    "text": "query TodoList_Query {\n  todos {\n    id\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = '04c3206f72f4ddb1f2fc875557e37e57';
export default node;
