import { IInterventionTeam } from "../interfaces/IInterventionTeam.js";
import InterventionTeam from "../models/InterventionTeam.model.js";
import { IInterventionTeamRepository } from "../interfaces/IInterventionTeamRepository.js";
import { UpdateWriteOpResult } from "mongoose";

export class InterventionTeamRepository implements IInterventionTeamRepository {
	async insertInterventionTeam(data: IInterventionTeam): Promise<IInterventionTeam> {
		return await InterventionTeam.create(data);
	}

	async getAllInterventionTeams():Promise<IInterventionTeam[]> {
		return await InterventionTeam.find();
	}

	async updateTeamsStatus(teamIds: string[] | number[], status : string):Promise<UpdateWriteOpResult> {
		return await InterventionTeam.updateMany(
			{ _id: { $in: teamIds } },
			{ status }
		);
	}
}
