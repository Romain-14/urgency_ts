import { IInterventionTeam } from "../interfaces/IInterventionTeam.js";
import { InterventionTeamRepository } from "../repositories/interventionTeam.repository.js";


const interventionTeam = new InterventionTeamRepository();

const addInterventionTeam = async (data: IInterventionTeam):Promise<IInterventionTeam> => {
	return await interventionTeam.insertInterventionTeam(data);
};

const fetchInterventionTeam = async ():Promise<IInterventionTeam[]> => {
	return await interventionTeam.getAllInterventionTeams();
};

export { addInterventionTeam, fetchInterventionTeam };
