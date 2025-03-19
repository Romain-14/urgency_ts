import express, { Request, Response } from "express";
import incidentRoutes from "./incident.routes.js";
import operatorRoutes from "./operator.routes.js";
import interventionTeamRoutes from "./interventionTeam.routes.js";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.json({ message: "API is running" });
});

router.use("/api/incident", incidentRoutes);
router.use("/api/operator", operatorRoutes);
router.use("/api/intervention-team", interventionTeamRoutes);

export default router;
