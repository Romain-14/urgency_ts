import { IIncident } from "../interfaces/IIncident.js";
import { IncidentRepository } from "../repositories/incident.repository.js";
import { InterventionTeamRepository } from "../repositories/interventionTeam.repository.js";

const incident = new IncidentRepository();
const interventionTeam = new InterventionTeamRepository();

const registerIncident = async (data: IIncident): Promise<IIncident> => {
	const newIncident = await incident.insertIncident(data);

	if (newIncident.assignedTeamId && newIncident.assignedTeamId.length) {
		await interventionTeam.updateTeamsStatus(
			newIncident.assignedTeamId,
			"Déployé"
		);
	}
	return newIncident;
};

const fetchAllIncidents = async (): Promise<IIncident[]> => {
	return await incident.getAllIncidents();
};

export { registerIncident, fetchAllIncidents };
