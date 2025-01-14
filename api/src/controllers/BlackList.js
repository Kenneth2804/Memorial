const blacklist = new Set();

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send('No hay token');
  }

  if (blacklist.has(token)) {
    return res.status(403).send('Token inválido');
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).send('Token inválido');
    }

    try {
      const user = await User.findByPk(decoded.id);
      if (!user) {
        return res.status(404).send('Usuario no encontrado');
      }
      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error en el servidor');
    }
  });
}

module.exports = { authenticateToken, blacklist };
