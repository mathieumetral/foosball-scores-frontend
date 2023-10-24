/**
 * @generated SignedSource<<23bc07e9c01d1d3d443339a41fd379dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type gamesListQuery$variables = Record<PropertyKey, never>;
export type gamesListQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"gamesListContentFragment">;
};
export type gamesListQuery = {
  response: gamesListQuery$data;
  variables: gamesListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 16
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
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
          (v1/*: any*/),
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
      (v1/*: any*/)
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "gamesListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "gamesListContentFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "gamesListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "QueryGamesConnection",
        "kind": "LinkedField",
        "name": "games",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QueryGamesConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Game",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
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
                    "selections": (v2/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "GameSide",
                    "kind": "LinkedField",
                    "name": "rightSide",
                    "plural": false,
                    "selections": (v2/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "games(first:16)"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "gamesListContentFragment_games",
        "kind": "LinkedHandle",
        "name": "games"
      }
    ]
  },
  "params": {
    "cacheID": "68b88895c68729d747f31d0adef5c3eb",
    "id": null,
    "metadata": {},
    "name": "gamesListQuery",
    "operationKind": "query",
    "text": "query gamesListQuery {\n  ...gamesListContentFragment\n}\n\nfragment gamesListContentFragment on Query {\n  games(first: 16) {\n    edges {\n      node {\n        id\n        ...gamesListItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment gamesListItemFragment on Game {\n  id\n  datePlayed\n  leftSide {\n    team {\n      players {\n        id\n        name\n      }\n      id\n    }\n    score\n  }\n  rightSide {\n    team {\n      players {\n        id\n        name\n      }\n      id\n    }\n    score\n  }\n}\n"
  }
};
})();

(node as any).hash = "18170dfe40b048b8f81ba468c2fcf619";

export default node;
