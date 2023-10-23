/**
 * @generated SignedSource<<fa60c4045eef659c5aae4e30cba470d1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type gamesListItemFragment$data = {
  readonly leftSide: {
    readonly score: number;
    readonly team: {
      readonly players: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      }>;
    };
  };
  readonly rightSide: {
    readonly score: number;
    readonly team: {
      readonly players: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      }>;
    };
  };
  readonly " $fragmentType": "gamesListItemFragment";
};
export type gamesListItemFragment$key = {
  readonly " $data"?: gamesListItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"gamesListItemFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
          }
        ],
        "storageKey": null
      }
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "gamesListItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GameSide",
      "kind": "LinkedField",
      "name": "leftSide",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GameSide",
      "kind": "LinkedField",
      "name": "rightSide",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Game",
  "abstractKey": null
};
})();

(node as any).hash = "8dba63824a1559b7b97287c4fac25c4e";

export default node;
