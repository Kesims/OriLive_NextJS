import { Competition, useGetOneCompetitionQuery } from "@/src/generated/graphql";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CompetitionContext } from "@/hooks/competitionId/competitionContext";
import { urlConf } from "@/src/urlConf";

export default function useCompetitionId(competitionId: string) {
    const router = useRouter();
    const context = useContext(CompetitionContext);

    const competitionIdInteger = parseInt(competitionId);

    const { data, loading } = useGetOneCompetitionQuery({
        variables: {
            id: competitionIdInteger,
        },
    });

    useEffect(() => {
        if (!loading) {
            if (!data) {
                console.log("No competition found with id " + competitionIdInteger);
                router.push(urlConf.dashboard.overview);
            } else {
                console.log(data.competition);
                context.setCompetition(data.competition as Competition);
            }
        }
    }, [loading]);
}
