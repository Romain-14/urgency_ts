import "dotenv/config";
import app from "./app.js";

const PORT: number = Number(process.env.PORT) || Number(process.env.LOCAL_PORT) || 9000;

app.listen(PORT);
