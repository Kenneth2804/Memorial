const { Router } = require('express');
const {blacklist} = require('../../controllers/BlackList.js')
const router = Router();

router.post('/', (req, res) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(400).send('No hay token para cerrar sesión');
    }
  
    // Agregar el token a la blacklist
    blacklist.add(token);
    res.send('Sesión cerrada exitosamente');
  });
module.exports = router;