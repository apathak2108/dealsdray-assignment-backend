const User = require("../models/User");

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const employee = await User.find({ email });
    if (employee.length !== 0) {
      return res.status(200).json({
        status: true,
        user: employee[0],
      });
    } else {
      return res.status(404).json({ status: false });
    }
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  handleLogin,
};
