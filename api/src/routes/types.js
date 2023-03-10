//SOLAMENTE PARA GET DE DIETAS
const { Router } = require('express');
const router = Router();
const {TypeDiet} = require('../db');
const {diets} = require('../controllers/diets');
const { default: axios } = require('axios');

router.get('/', async (req,res) => {

    diets.forEach(e => {
        TypeDiet.findOrCreate({
            where: {name:e.name}
        })
    })

    const allTheTypes = await TypeDiet.findAll();
    res.send(allTheTypes.map(e => e.name))
})

module.exports= router;