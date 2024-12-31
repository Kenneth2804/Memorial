const {Router} = require('express')

const router = Router();

const login = require("../routes/login/Login.js")
const register = require("../routes/login/Register.js")

router.use("/login", login)
router.use("/register", register)

module.exports = router