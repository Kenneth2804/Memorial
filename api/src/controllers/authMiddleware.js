const jwt = require("jsonwebtoken");
require("dotenv").config();
const { Users } = require("../db.js");
const { blacklist } = require("../controllers/BlackList.js");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("No hay token"); 
  }

  if (blacklist.has(token)) {
    return res.status(403).send("Token inválido o sesión cerrada");
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).send("Token inválido");
    }

    try {
      const user = await Users.findByPk(decoded.id);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  });
}

module.exports = authenticateToken;
