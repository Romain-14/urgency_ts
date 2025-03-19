import Operator from "../models/Operator.model.js";
import { IOperator } from "../interfaces/IOperator.js";
import { IOperatorRepository } from "../interfaces/IOperatorRepository.js";

export class OperatorRepository implements IOperatorRepository{
    async createOperator(data: IOperator): Promise<IOperator> {
        return await Operator.create(data);
    }

    async getAllOperators(): Promise<IOperator[]> {
        return await Operator.find()
    }
}
