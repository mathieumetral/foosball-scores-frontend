/**
 * @generated SignedSource<<71a5adc01d1b8291c2deb76214dd58a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type gamesListItemFragment$data = {
  readonly id: string;
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
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
          (v0/*: any*/),
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
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "GameSide",
      "kind": "LinkedField",
      "name": "leftSide",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GameSide",
      "kind": "LinkedField",
      "name": "rightSide",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Game",
  "abstractKey": null
};
})();

(node as any).hash = "762ec0d63ed560a0edc086e0df95250e";

export default node;
