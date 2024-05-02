const Employee = require("../models/Employees");
const createEmployee = async (req, res) => {
  try {
    const { image, name, email, mobile, designation, gender, course } =
      req.body;
    console.log(
      name,
      email,
      mobile,
      designation,
      gender,
      course,
      "name, email, mobile, designation, gender, course"
    );
    const employee = new Employee({
      image,
      name,
      email,
      mobile,
      designation,
      gender,
      course,
    });
    const savedEmployee = await employee.save();
    res.status(200).json(savedEmployee);
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { image, name, email, mobile, designation, gender, course, id } =
      req.body;
    const savedEmployee = await Employee.findOneAndUpdate(
      { _id: id },
      { $set: { image, name, email, mobile, designation, gender, course } },
      { new: true }
    );
    res.status(200).json(savedEmployee);
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Employee.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  createEmployee,
  getAllEmployee,
  deleteEmployee,
  updateEmployee,
};
