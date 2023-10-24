/**
 * @generated SignedSource<<1200d208b419838bad9d9a2745da2e8d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateGameInput = {
  datePlayed?: any | null | undefined;
  id: string;
  leftSide?: UpdateGameSideInput | null | undefined;
  rightSide?: UpdateGameSideInput | null | undefined;
};
export type UpdateGameSideInput = {
  playerName?: string | null | undefined;
  score?: number | null | undefined;
};
export type gameUpdateFormMutation$variables = {
  input: UpdateGameInput;
};
export type gameUpdateFormMutation$data = {
  readonly updateGame: {
    readonly " $fragmentSpreads": FragmentRefs<"gamesListItemFragment">;
  } | null | undefined;
};
export type gameUpdateFormMutation = {
  response: gameUpdateFormMutation$data;
  variables: gameUpdateFormMutation$variables;
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
    "name": "gameUpdateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Game",
        "kind": "LinkedField",
        "name": "updateGame",
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
    "name": "gameUpdateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Game",
        "kind": "LinkedField",
        "name": "updateGame",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "datePlayed",
            "storageKey": null
          },
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
    "cacheID": "77457c74240ace8fb7d7497bf3aaa44a",
    "id": null,
    "metadata": {},
    "name": "gameUpdateFormMutation",
    "operationKind": "mutation",
    "text": "mutation gameUpdateFormMutation(\n  $input: UpdateGameInput!\n) {\n  updateGame(input: $input) {\n    ...gamesListItemFragment\n    id\n  }\n}\n\nfragment gamesListItemFragment on Game {\n  id\n  datePlayed\n  leftSide {\n    team {\n      players {\n        id\n        name\n      }\n      id\n    }\n    score\n  }\n  rightSide {\n    team {\n      players {\n        id\n        name\n      }\n      id\n    }\n    score\n  }\n}\n"
  }
};
})();

(node as any).hash = "652605827f21c46ee45f08e86f1cd762";

export default node;
