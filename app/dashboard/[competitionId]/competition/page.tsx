import useCompetitionId from "@/hooks/competitionId/competitionId.hook";

export default function CompetitionSettings({ params }: { params: { competitionId: string } }) {
    useCompetitionId(params.competitionId);
    return <div>Competition settings</div>;
}
