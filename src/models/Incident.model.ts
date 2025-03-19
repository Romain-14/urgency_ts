import mongoose, { Schema } from "mongoose";
import { IIncident } from "../interfaces/IIncident.js";

export interface IIncidentDocument extends IIncident, Document {};

const incidentSchema: Schema = new mongoose.Schema(
	{
		callerName: {
			type: String,
			minLength: 2,
			maxLength: 255,
			required: true,
		},
		callerPhone: { type: String, required: true },
		place: { address: { type: String, required: true } }, // check geolocation
		description: { type: String, required: true },
        type: { type: String, enum: ["feu", "accident", "vol", "agression", "autre"], required: true },
		status: {
			type: String,
			enum: ["en attente", "en cours", "résolu"],
			default: "en attente",
		},
		assignedTeamId:[ {
			type: mongoose.Schema.Types.ObjectId,
			ref: "InterventionTeam",
			required: false,
		}],
		operatorId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Operator",
			required: true,
		},
	},
	{ timestamps: true } // date de signalement
);

const Incident = mongoose.model<IIncidentDocument>("incident", incidentSchema);

export default Incident;
