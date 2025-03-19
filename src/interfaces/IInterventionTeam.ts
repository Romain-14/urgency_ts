enum teamType {
	FIREFIGHTER = "Pompier",
	POLICEMAN = "Policier",
	CONSTABLE = "Gendarmerie",
}

enum StatusType {
	DEPLOYED = "Déployé",
	AVAILABLE = "Libre",
}

export interface IInterventionTeam {
	type: teamType;
	name: string;
	status: StatusType;
	createdAt?: Date;
}
