import express, { Application, Request, Response } from "express";

import router from "./routes/index.routes.js";
import { connectDB } from "./config/db.js";

class App {
	public app: Application;

	constructor() {
		this.app = express();
        
		this.setupMiddlewares();
		this.setupRoutes();
		this.connectDatabase();
	}

	private setupMiddlewares(): void {
		this.app.use(express.json());
	}

	private setupRoutes(): void {
		this.app.use(router);
	}

	private connectDatabase(): void {
		connectDB();
	}

	public listen(port: number): void {
		this.app.listen(port, () =>
			console.log(`Running at http://localhost:${port}`)
		);
	}
}

export default new App();
