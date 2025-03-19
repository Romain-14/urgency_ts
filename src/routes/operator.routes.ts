import express from "express";

import {
	createOperator,
	getOperators,
} from "../controllers/api/operator.controller.js";

const router = express.Router();

router.post("/", createOperator);
router.get("/", getOperators);

export default router;
