/**
 * @generated SignedSource<<1c5e51e6742d26c52eb5823e510311ec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type gameUpdateFormQuery$variables = {
  id: string;
};
export type gameUpdateFormQuery$data = {
  readonly game: {
    readonly datePlayed: any;
    readonly leftSide: {
      readonly score: number;
      readonly team: {
        readonly players: ReadonlyArray<{
          readonly name: string;
        }>;
      };
    };
    readonly rightSide: {
      readonly score: number;
      readonly team: {
        readonly players: ReadonlyArray<{
          readonly name: string;
        }>;
      };
    };
  } | null | undefined;
};
export type gameUpdateFormQuery = {
  response: gameUpdateFormQuery$data;
  variables: gameUpdateFormQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "datePlayed",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "score",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  (v3/*: any*/),
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
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  (v3/*: any*/),
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
          (v4/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      (v6/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "gameUpdateFormQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Game",
        "kind": "LinkedField",
        "name": "game",
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
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "GameSide",
            "kind": "LinkedField",
            "name": "rightSide",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "gameUpdateFormQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Game",
        "kind": "LinkedField",
        "name": "game",
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
            "selections": (v7/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "GameSide",
            "kind": "LinkedField",
            "name": "rightSide",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2b528f2b5003888c57430f94bbd06b01",
    "id": null,
    "metadata": {},
    "name": "gameUpdateFormQuery",
    "operationKind": "query",
    "text": "query gameUpdateFormQuery(\n  $id: ID!\n) {\n  game(id: $id) {\n    datePlayed\n    leftSide {\n      score\n      team {\n        players {\n          name\n          id\n        }\n        id\n      }\n    }\n    rightSide {\n      score\n      team {\n        players {\n          name\n          id\n        }\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f6d813e5aca889ba4a9f12db9f1d61b2";

export default node;
