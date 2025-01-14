const {Router} = require('express')

const router = Router();

const login = require("../routes/login/Login.js")
const Logout = require("../routes/login/Logout.js")
const register = require("../routes/login/Register.js")
const home = require("../routes/home/home.js")

router.use("/login", login)
router.use("/Logout", Logout)
router.use("/register", register)
router.use("/home", home)

module.exports = router