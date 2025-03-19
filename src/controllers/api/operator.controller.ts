import { Request, Response } from "express";

import { IOperator } from "../../interfaces/IOperator.js";
import {
	addOperator,
	fetchAllOperators,
} from "../../services/operator.service.js";

const createOperator = async (req: Request<{}, {}, IOperator>, res: Response): Promise<void> => {
	try {
		const operator: IOperator = await addOperator(req.body);
		res.status(201).json(operator);
	} catch (error) {
		res.status(400).json({ error: (error as Error).message });
	}
};

const getOperators = async (req: Request, res: Response) => {
	try {
		const operators = await fetchAllOperators();
		res.status(200).json(operators);
	} catch (error) {
		res.status(400).json({ error: (error as Error).message });
	}
};

export { createOperator, getOperators };
