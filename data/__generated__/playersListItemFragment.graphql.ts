/**
 * @generated SignedSource<<72f5f8b08d2c5780386af8d2c108f342>>
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
    readonly ratio: number;
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
    }
  ],
  "type": "Player",
  "abstractKey": null
};

(node as any).hash = "66d1f9ead881dbee6aa4fe3adf2ead7a";

export default node;
