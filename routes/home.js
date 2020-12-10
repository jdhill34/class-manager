const express = require("express");
const router = express.Router();
const controller = require("../controllers/home");

router.get("/", controller.GET_HOME);
router.post("/", controller.POST_LOGIN);

module.exports = router;
