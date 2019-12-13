const express = require("express");
var { userLoginController, userTokenController  } = require("../controllers")
const userRoutes = express.Router();


/**
 * User Login
 */
userRoutes.post("/userlogin", userLoginController);

userRoutes.post("/token", userTokenController);

module.exports = {
    userRoutes
};
