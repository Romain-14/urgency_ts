import { IOperator } from "../interfaces/IOperator.js";
import { OperatorRepository } from "../repositories/operator.repository.js";

const repository = new OperatorRepository();

const addOperator = async (data: IOperator) :Promise<IOperator> => {
	return await repository.createOperator(data);
};

const fetchAllOperators = async ():Promise<IOperator[]> => {
	return await repository.getAllOperators();
};

export { addOperator, fetchAllOperators };
