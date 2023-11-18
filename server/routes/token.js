/** @format */

const express = require("express");
const router = express.Router();

const { createToken } = require("../contoller/token");

router.get("/", createToken)

module.exports=router