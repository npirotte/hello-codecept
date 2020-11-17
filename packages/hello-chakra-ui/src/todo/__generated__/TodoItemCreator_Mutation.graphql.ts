/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateTodoInput = {
    title: string;
};
export type TodoItemCreator_MutationVariables = {
    input: CreateTodoInput;
};
export type TodoItemCreator_MutationResponse = {
    readonly createTodo: {
        readonly id: string;
        readonly title: string | null;
    };
};
export type TodoItemCreator_Mutation = {
    readonly response: TodoItemCreator_MutationResponse;
    readonly variables: TodoItemCreator_MutationVariables;
};



/*
mutation TodoItemCreator_Mutation(
  $input: CreateTodoInput!
) {
  createTodo(input: $input) {
    id
    title
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "createTodo",
    "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoItemCreator_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoItemCreator_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bbc15683bdecbb274eab214193e48d81",
    "id": null,
    "metadata": {},
    "name": "TodoItemCreator_Mutation",
    "operationKind": "mutation",
    "text": "mutation TodoItemCreator_Mutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    id\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c51c19aa88cf9efe7cd8d74ef5b6d7c9';
export default node;
