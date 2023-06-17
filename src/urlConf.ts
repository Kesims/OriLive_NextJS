export const urlConf = {
    homepage: "/",
    dashboard: {
        overview: "/dashboard",
        punches: "/dashboard/{id}/punches",
        nodes: "/dashboard/{id}/nodes",
        networkCommands: "/dashboard/{id}/networkCommands",
        oresults: "/dashboard/{id}/oresults",
        competition: "/dashboard/{id}/competition",
        createCompetition: "/dashboard/createCompetition",
    },
};

export function withID(urlConf: string, competitionId?: number) {
    return competitionId ? urlConf.replace("{id}", String(competitionId)) : urlConf;
}
