export interface Device {
    id: number;
    node_id: string;
    node_type: number;
    battery_level: number;
    last_contact: Date;
    neighbours: string[];
}
