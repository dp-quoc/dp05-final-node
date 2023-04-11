const express = require("express");
const router = express.Router();

const { protect } = require("../middlewares/admin/auth");

const handleError = require("../helpers/handleError.helper");

// User
router.use("/user", require("./admin/user.route"));
router.use(handleError);

router.get("/", (req, res) => {
  res.send("Admin");
});

module.exports = router;
