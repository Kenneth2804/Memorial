require("dotenv").config();
const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { Users } = require("../../db.js");
const jwt = require("jsonwebtoken");
const router = Router();
const authMiddleware = require("../../controllers/authMiddleware.js");


router.get("/", authMiddleware, async (req, res) => {
  const { id } = req.user;
  try {
    const user = await Users.findByPk(id, { attributes: [ "id","name", "email", "profilePicture"] });
    if (!user) {
      return res.status(404).json({ message: "El usuario no existe" });
    }
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

  
module.exports = router;