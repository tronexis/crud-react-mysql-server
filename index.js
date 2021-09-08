import express from "express";
import { createConnection } from "mysql2";
import { config } from "dotenv";
import employeeRoutes from './routes/employee';
import cors from 'cors'

config();

const app = express();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.HOST;
const port = process.env.PORT;
const database = process.env.DB_NAME;
export const db = createConnection({
  user,
  password,
  host,
  database,
});

app.listen(port, () => console.log("Server is running on port " + port));

app.use(express.json());

app.use(cors());

app.use('/', employeeRoutes);

app.use("/", (req, res) => {
  res.status(200).send("Hello World");
});
