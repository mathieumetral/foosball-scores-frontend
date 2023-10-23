/**
 * @generated SignedSource<<f6ef37f09856ecab7df3d0508ef3c7ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateGameInput = {
  leftSide: CreateGameSideInput;
  rightSide: CreateGameSideInput;
};
export type CreateGameSideInput = {
  playerName: string;
  score?: number | null | undefined;
};
export type gameCreateFormMutation$variables = {
  input: CreateGameInput;
};
export type gameCreateFormMutation$data = {
  readonly createGame: {
    readonly " $fragmentSpreads": FragmentRefs<"gamesListItemFragment">;
  };
};
export type gameCreateFormMutation = {
  response: gameCreateFormMutation$data;
  variables: gameCreateFormMutation$variables;
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
},
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Team",
    "kind": "LinkedField",
    "name": "team",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Player",
        "kind": "LinkedField",
        "name": "players",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v2/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "score",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "gameCreateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Game",
        "kind": "LinkedField",
        "name": "createGame",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "gamesListItemFragment"
          }
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
    "name": "gameCreateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Game",
        "kind": "LinkedField",
        "name": "createGame",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "GameSide",
            "kind": "LinkedField",
            "name": "leftSide",
            "plural": false,
            "selections": (v3/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "GameSide",
            "kind": "LinkedField",
            "name": "rightSide",
            "plural": false,
            "selections": (v3/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ba4320fba5f67b37723a6261ae32dacf",
    "id": null,
    "metadata": {},
    "name": "gameCreateFormMutation",
    "operationKind": "mutation",
    "text": "mutation gameCreateFormMutation(\n  $input: CreateGameInput!\n) {\n  createGame(input: $input) {\n    ...gamesListItemFragment\n    id\n  }\n}\n\nfragment gamesListItemFragment on Game {\n  id\n  leftSide {\n    team {\n      players {\n        id\n        name\n      }\n      id\n    }\n    score\n  }\n  rightSide {\n    team {\n      players {\n        id\n        name\n      }\n      id\n    }\n    score\n  }\n}\n"
  }
};
})();

(node as any).hash = "1e127ffc6e2fd17602ed6ddc99d3291c";

export default node;
