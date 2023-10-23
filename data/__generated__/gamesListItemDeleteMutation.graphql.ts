/**
 * @generated SignedSource<<2374108da940d503b3329a7244d1cfc3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteGameInput = {
  id: string;
};
export type gamesListItemDeleteMutation$variables = {
  input: DeleteGameInput;
};
export type gamesListItemDeleteMutation$data = {
  readonly deleteGame: {
    readonly id: string;
  } | null | undefined;
};
export type gamesListItemDeleteMutation = {
  response: gamesListItemDeleteMutation$data;
  variables: gamesListItemDeleteMutation$variables;
};

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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "gamesListItemDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Game",
        "kind": "LinkedField",
        "name": "deleteGame",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "gamesListItemDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Game",
        "kind": "LinkedField",
        "name": "deleteGame",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteRecord",
            "key": "",
            "kind": "ScalarHandle",
            "name": "id"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ee7fd8b5b971c421ca9062cacf63cc77",
    "id": null,
    "metadata": {},
    "name": "gamesListItemDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation gamesListItemDeleteMutation(\n  $input: DeleteGameInput!\n) {\n  deleteGame(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "06b337cbb7bee049cb59933cfb576285";

export default node;
