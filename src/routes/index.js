const express = require("express");
const { handleLogin } = require("../controllers/authController");
const {
  createEmployee,
  getAllEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../controllers/employeeController");
const STRINGS = require("../constants/strings");

const app = express();

app.post("/api/login", handleLogin);

app.post("/api/employees", createEmployee);

app.delete(`${STRINGS.DELETE_ROUTE}`, deleteEmployee);

app.get(`${STRINGS.EMPLOYEES_ROUTE}`, getAllEmployee);

app.post(`${STRINGS.UPDATE_ROUTE}`, updateEmployee);

module.exports = app;
