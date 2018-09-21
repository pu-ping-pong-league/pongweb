import { extractFragmentReplacements } from "prisma-binding";
import { Query } from "./Query";
import { auth } from "./Mutation/auth";
import { AuthPayload } from "./AuthPayload";
import submitmatch from "./Mutation/submitmatch";
import generateRound from "./Mutation/generateRound";
import generateSeason from "./Mutation/generateSeason";
import generateStats from "./Mutation/generateStats";
import updateinfo from "./Mutation/updateinfo";
import updatecurrent from "./Mutation/updatecurrent";
import createcurrent from "./Mutation/createcurrent";
export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...generateRound,
    ...generateSeason,
    ...submitmatch,
    ...generateStats,
    ...updateinfo,
    ...updatecurrent,
    ...createcurrent
  },
  AuthPayload
};

export const fragmentReplacements = extractFragmentReplacements(resolvers);
