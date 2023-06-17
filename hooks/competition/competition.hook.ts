import { useEffect, useState } from "react";
import {
    Competition,
    useCompetitionAddedSubscription,
    useCompetitionRemovedSubscription,
    useGetCompetitionsQuery,
} from "@/src/generated/graphql";

export default function useCompetition() {
    const [competitions, setCompetitions] = useState<Competition[]>();
    const { data, loading } = useGetCompetitionsQuery();
    const competitionAdded = useCompetitionAddedSubscription();
    const competitionRemoved = useCompetitionRemovedSubscription();

    useEffect(() => {
        if (!loading) {
            if (data) {
                setCompetitions(data.competitions as Competition[]);
            }
        }
    }, [loading]);

    useEffect(() => {
        if (competitionAdded.data) {
            const competition = competitionAdded.data.competitionAdded;
            if (competitions) {
                setCompetitions([...(competitions as Competition[]), competition as Competition]);
            } else setCompetitions([competition] as Competition[]);
        }
    }, [competitionAdded.data]);

    useEffect(() => {
        if (competitionRemoved.data) {
            const competition = competitionRemoved.data.competitionRemoved;
            if (competitions) {
                setCompetitions([...(competitions as Competition[])].filter((m) => m.id != competition.id));
            }
        }
    }, [competitionRemoved.data]);

    const getCompetition = (id: number) => {
        if (competitions) {
            return competitions.find((m) => m.id == id);
        }
        return undefined;
    };

    return { competitions, loading, getCompetition };
}
