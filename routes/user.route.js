const express = require("express");

const router = express.Router();

const { protect } = require("../middlewares/user/auth");

const handleError = require("../helpers/handleError.helper");

// Auth
router.use("/auth", require("./user/auth.route"));
router.use(handleError);

module.exports = router;
