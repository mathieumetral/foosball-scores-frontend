/**
 * @generated SignedSource<<d7fd6ddefdf62ed2baab9a7d51ab2a66>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type playersListContentFragment$data = {
  readonly players: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"playersListItemFragment">;
      };
    } | null | undefined>;
  };
  readonly " $fragmentType": "playersListContentFragment";
};
export type playersListContentFragment$key = {
  readonly " $data"?: playersListContentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"playersListContentFragment">;
};

import playersListContentRefetchQuery_graphql from './playersListContentRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "players"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": playersListContentRefetchQuery_graphql
    }
  },
  "name": "playersListContentFragment",
  "selections": [
    {
      "alias": "players",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": "RATIO_GOAL_DIFF_MOST"
        }
      ],
      "concreteType": "QueryPlayersConnection",
      "kind": "LinkedField",
      "name": "__playersListContentFragment_players_connection",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "playersListItemFragment"
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
      "storageKey": "__playersListContentFragment_players_connection(orderBy:\"RATIO_GOAL_DIFF_MOST\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "e27181d203e894a25a7920c823b3a296";

export default node;
