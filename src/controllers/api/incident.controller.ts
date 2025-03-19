import {Request, Response} from "express";
import { registerIncident, fetchAllIncidents } from "../../services/incident.service.js";
import { IIncident } from "../../interfaces/IIncident.js";

const createIncident = async (req: Request<{}, {}, IIncident>, res: Response): Promise<void> => {
	try {
		const incident : IIncident  = await registerIncident(req.body);        
		res.status(201).json(incident);
	} catch (error) {
		res.status(400).json({ error: (error as Error).message });
	}
};

const getIncidents = async (req: Request, res: Response) => {
	try {
		const incidents = await fetchAllIncidents();
		res.status(201).json(incidents);
	} catch (error) {
		res.status(400).json({ error: (error as Error).message });
	}
};



export { createIncident, getIncidents };
