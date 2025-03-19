import mongoose, { Schema } from "mongoose";
import { IOperator } from "../interfaces/IOperator.js";

export interface IOperatorDocument extends IOperator, Document {};

const operatorSchema: Schema = new mongoose.Schema(
	{
		name: { type: String, minLength: 2, maxLength: 255, required: true },
        role : {type: String, enum: ["Employé(e)", "Responsable"], default: "Employé",}
	},
	{ timestamps: true }
);

const Operator = mongoose.model<IOperatorDocument>("operator", operatorSchema);

export default Operator;
