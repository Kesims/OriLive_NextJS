export const urlConf = {
    homepage: "/",
    login: "/login",
    register: "/register",
    dashboard: {
        overview: "/dashboard/{id}",
        punches: "/dashboard/{id}/punches",
        nodes: "/dashboard/{id}/nodes",
        networkCommands: "/dashboard/{id}/networkCommands",
        oresults: "/dashboard/{id}/oresults",
        competition: "/dashboard/{id}/competition",
        competitions: "/dashboard/{id}/competitions",
        createCompetition: "/dashboard/createCompetition",
    },
};

export function withID(urlConf: string, competitionId?: number) {
    return competitionId ? urlConf.replace("{id}", String(competitionId)) : urlConf.replace("/{id}", "");
}
