import { Router } from "express";
import { db } from "..";
import sql from "sql-template-strings";

const employeeRoutes = Router();

employeeRoutes.post("/create", (req, res) => {
  const { name, age, country, position, wage } = req.body;
  db.query(
    sql`INSERT INTO employees (name, age, country, position, wage) 
      VALUES (${name},${age},${country},${position},${wage})`,
    (error, result) => {
      if (error) return res.status(400).json({ error });
      else
        return res
          .status(201)
          .json({ message: "Employee created successfully" });
    }
  );
});

employeeRoutes.get("/employees", (req, res) => {
  db.query(sql`SELECT * FROM employees`, (error, employees) => {
    if (error) return res.status(400).json({ error });
    else return res.status(200).send(employees);
  });
});

export default employeeRoutes;
