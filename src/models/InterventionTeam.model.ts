import mongoose, { Schema } from "mongoose";
import { IInterventionTeam } from "../interfaces/IInterventionTeam.js";

export interface IInterventionDocument extends IInterventionTeam, Document {}

const InterventionTeamSchema: Schema = new mongoose.Schema(
	{
		type: {
			type: String,
			enum: ["Pompier", "Policier", "Gendarmerie"],
			required: true,
		},
		name: { type: String, required: true },
		status: {
			type: String,
			enum: ["Déployé", "Libre"],
			default: "Libre",
		},
	},
	{ timestamps: true }
);

const InterventionTeam = mongoose.model<IInterventionDocument>(
	"intervention team",
	InterventionTeamSchema
);

export default InterventionTeam;
