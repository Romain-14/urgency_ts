import { IOperator } from "./IOperator.js";

export interface IOperatorRepository {
	createOperator(data: IOperator): Promise<IOperator>;
	getAllOperators(): Promise<IOperator[]>;
}
