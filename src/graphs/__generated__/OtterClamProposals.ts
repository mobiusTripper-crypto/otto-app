/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OtterClamProposals
// ====================================================

export interface OtterClamProposals_proposals {
  __typename: "Proposal";
  id: string;
  title: string;
  body: string | null;
  choices: (string | null)[];
  start: number;
  end: number;
  snapshot: string | null;
  state: string | null;
  scores: (number | null)[] | null;
  votes: number | null;
}

export interface OtterClamProposals {
  proposals: (OtterClamProposals_proposals | null)[] | null;
}
