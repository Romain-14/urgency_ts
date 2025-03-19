import express from "express";

import {
    createInterventionTeam,
    getInterventionTeams,
} from "../controllers/api/interventionTeam.controller.js";

const router = express.Router();

router.post("/", createInterventionTeam);
router.get("/", getInterventionTeams);

export default router;
