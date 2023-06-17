import React, { createContext } from "react";
import { Competition } from "@/src/generated/graphql";

export interface CompetitionContextInterface {
    competition: Competition | undefined;
    setCompetition: React.Dispatch<React.SetStateAction<Competition | undefined>>;
}
export const CompetitionContext = createContext({} as CompetitionContextInterface);
