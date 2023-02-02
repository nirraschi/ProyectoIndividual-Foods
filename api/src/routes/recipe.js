//RUTA SOLAMENTE PARA POST DE RUTAS O SEA CREATE
const { Router } = require("express");
const { diets } = require("../controllers/diets");
const { Recipe, TypeDiet } = require("../db");

const router = Router();

router.post("/", async(req,res) => {
    let{ title,
        summary,
        healthScore,
        analyzedInstructions,
        created,
        typeDiets
    } = req.body

    //try {
    let createRecipe = await Recipe.create({
    title,
    summary,
    healthScore,
    analyzedInstructions,
    created,
    });

    let typeDietDb = await TypeDiet.findAll({ //typediet es el modelo de diet
        where: {name : typeDiets}
    })
    try {
        createRecipe.addTypeDiet(typeDietDb)
        res.status(200).send("Receta Creada")    
 //le agrego la dieta
      } catch (error) {
        console.error(error);
      }
    }
)
    


module.exports = router;