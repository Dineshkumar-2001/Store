const express = require("express");
const router = express.Router();

const details = require("../Details/details.js")


router.post("/sign_in", details.signIn)

module.exports = router;