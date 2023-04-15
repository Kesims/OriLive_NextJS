export interface NetworkCommandFormData {
    competitionId: string;
    type: string;
    data: number;
}

export const networkCommandTypes = [
    {
        value: "node_mode",
        label: "NODE MODE",
    },
];
