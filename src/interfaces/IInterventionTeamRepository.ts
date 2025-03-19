import { UpdateWriteOpResult } from "mongoose";
import { IInterventionTeam } from "./IInterventionTeam.js";

export interface IInterventionTeamRepository {
	insertInterventionTeam(data: IInterventionTeam): Promise<IInterventionTeam>;
	getAllInterventionTeams(): Promise<IInterventionTeam[]>;
	updateTeamsStatus(teamIds: string[] | number[], status : string): Promise<UpdateWriteOpResult>;
}
