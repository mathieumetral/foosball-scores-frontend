/**
 * @generated SignedSource<<d0df500b98c8e49d6faf7579e63852f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type playersListContentQuery$variables = Record<PropertyKey, never>;
export type playersListContentQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"playersListContentFragment">;
};
export type playersListContentQuery = {
  response: playersListContentQuery$data;
  variables: playersListContentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "RATIO_GOAL_DIFF_MOST"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "playersListContentQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "playersListContentFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "playersListContentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "QueryPlayersConnection",
        "kind": "LinkedField",
        "name": "players",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QueryPlayersConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Player",
                "kind": "LinkedField",
                "name": "node",
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
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PlayerStats",
                    "kind": "LinkedField",
                    "name": "stats",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "wins",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "losses",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "ratio",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "goalsFor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "goalsAgainst",
                        "storageKey": null
                      }
                    ],
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
        "storageKey": "players(first:10,orderBy:\"RATIO_GOAL_DIFF_MOST\")"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": [
          "orderBy"
        ],
        "handle": "connection",
        "key": "playersListContentFragment_players",
        "kind": "LinkedHandle",
        "name": "players"
      }
    ]
  },
  "params": {
    "cacheID": "9e74e43aacfac0fe75b4ef929b0b2ce0",
    "id": null,
    "metadata": {},
    "name": "playersListContentQuery",
    "operationKind": "query",
    "text": "query playersListContentQuery {\n  ...playersListContentFragment\n}\n\nfragment playersListContentFragment on Query {\n  players(first: 10, orderBy: RATIO_GOAL_DIFF_MOST) {\n    edges {\n      node {\n        id\n        ...playersListItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment playersListItemFragment on Player {\n  name\n  stats {\n    wins\n    losses\n    ratio\n    goalsFor\n    goalsAgainst\n  }\n}\n"
  }
};
})();

(node as any).hash = "129f3e2d73329d1b6078c3b086e160e2";

export default node;
