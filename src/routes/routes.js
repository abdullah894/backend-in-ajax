const express = require('express');

const router = express.Router();

const database = require('../db/connect');

const controller = require('../controller/controller');

router.get("/",controller.login);
router.get("/signup",controller.signup);
router.post("/register",controller.userregisterion);

module.exports = router;