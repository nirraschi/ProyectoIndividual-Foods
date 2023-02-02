const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const recipes = require('./recipes');
const typeDiets = require('./types');
const recipe = require('./recipe');
const { route } = require('./recipes');

const router = Router();

router.use('/recipes', recipes)
router.use('/recipe', recipe)
router.use('/types', typeDiets)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
