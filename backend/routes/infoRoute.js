const express = require("express");
const router = express.Router();

const infoController = require("../controller/infoController.js");

router.get("/", infoController.sneakerInfo);

module.exports = router;
