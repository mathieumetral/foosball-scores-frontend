/**
 * @generated SignedSource<<ef63dce64636af7a5a21c03d09e12006>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type playersListItemFragment$data = {
  readonly name: string;
  readonly stats: {
    readonly goalsAgainst: number;
    readonly goalsFor: number;
    readonly losses: number;
    readonly wins: number;
  };
  readonly " $fragmentType": "playersListItemFragment";
};
export type playersListItemFragment$key = {
  readonly " $data"?: playersListItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"playersListItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "playersListItemFragment",
  "selections": [
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
    }
  ],
  "type": "Player",
  "abstractKey": null
};

(node as any).hash = "1f519cf048d6b46e9a37a34a2502efb0";

export default node;
