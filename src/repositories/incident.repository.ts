import { IIncident } from "../interfaces/IIncident.js";
import { IIncidentRepository } from "../interfaces/IIncidentRepository.js";
import Incident from "../models/Incident.model.js";

export class IncidentRepository implements IIncidentRepository {
	async insertIncident(data: IIncident): Promise<IIncident> {
		return await Incident.create(data);
	}
	async getAllIncidents(): Promise<IIncident[]> {
		return await Incident.find();
	}
}
