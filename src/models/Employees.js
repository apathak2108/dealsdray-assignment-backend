const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    enum: ["HR", "Manager", "Sales"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  course: {
    type: String,
    enum: ["MCA", "BCA", "BBA"],
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
