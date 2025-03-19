import { addInterventionTeam, fetchInterventionTeam } from "../../services/interventionTeam.service.js";

const createInterventionTeam = async (req, res) => {
	try {
		const operator = await addInterventionTeam(req.body);
		res.status(201).json(operator);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
const getInterventionTeams = async (req, res) => {
	try {
		const interventionTeam = await fetchInterventionTeam(req.body);
		res.status(201).json(interventionTeam);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export { createInterventionTeam, getInterventionTeams };
