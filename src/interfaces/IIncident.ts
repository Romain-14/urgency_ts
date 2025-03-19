enum IncidentType {
    FIRE = "feu",
    ACCIDENT = "accident",
    STEAL = "vol",
    ASSAULT = "agression",
    OTHER = "autre"
}

enum StatusType {
    PENDING = "en attente",
    IN_PROGRESS = "en cours",
    RESOLVED = "résolu",
}

export interface IIncident {
    callerName: string;
    callerPhone: string;
    place: {address: string};
    description: string;
    type: IncidentType;
    status : StatusType;
    assignedTeamId : string[] | number[]
    operatorId : string | number;
    createdAt?: Date;
    updatedAt?: Date;
}