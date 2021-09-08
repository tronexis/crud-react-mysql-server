import express from "express";
import { createConnection } from "mysql2";
import { config } from "dotenv";
import employeeRoutes from "./routes/employee";
import cors from "cors";

config();

const app = express();

const user = process.env.DB_USER || "udjmetxswhgojqea";
const password = process.env.DB_PASSWORD || "KuuHBjvOwsJdOkiIu1S3";
const host =
  process.env.HOST || "bjlcwrkvhgrmtsyqmx5h-mysql.services.clever-cloud.com";
const port = 4000;
const database = process.env.DB_NAME || "bjlcwrkvhgrmtsyqmx5h";
export const db = createConnection({
  user,
  password,
  host,
  database,
});

app.listen(port, () => console.log("Server is running on port " + port));

app.use(express.json());

app.use(cors());

app.use("/", employeeRoutes);

app.use("/", (req, res) => {
  res.status(200).send("Hello World");
});
