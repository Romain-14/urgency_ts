import { Request, Response } from "express";
import { addInterventionTeam, fetchInterventionTeam } from "../../services/interventionTeam.service.js";
import { IInterventionTeam } from "../../interfaces/IInterventionTeam.js";

const createInterventionTeam = async (req: Request<{}, {}, IInterventionTeam>, res: Response) : Promise<void> => {
	try {
		const operator = await addInterventionTeam(req.body);
		res.status(201).json(operator);
	} catch (error) {
		res.status(400).json({ error: (error as Error).message });
	}
};
const getInterventionTeams = async (req: Request, res: Response) : Promise<void>  => {
	try {
		const interventionTeam = await fetchInterventionTeam();
		res.status(201).json(interventionTeam);
	} catch (error) {
		res.status(400).json({ error: (error as Error).message });
	}
};

export { createInterventionTeam, getInterventionTeams };
