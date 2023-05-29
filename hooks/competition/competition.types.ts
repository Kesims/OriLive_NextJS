export interface AddCompetitionData {
    name: string;
    location?: string;
    startTime: Date;
    endTime?: Date;
    description?: string;
    type: string;
    organizer?: string;
}
