import { IIncident } from "./IIncident.js";

export interface IIncidentRepository {
	insertIncident(data: IIncident): Promise<IIncident>;
	getAllIncidents(): Promise<IIncident[]>;
}
