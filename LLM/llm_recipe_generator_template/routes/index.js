const express = require('express')
const router = express.Router()
const generateRecipe = require('../services/generate_recipe')

router.get('/', function(req, res, next){
    res.render('enter_ingredients')
})

router.post('/generate_recipe', function(req, res, next){
    let formData = req.body
    let userIngredients = formData.ingredents
     console.log ('User entered:', userIngredients)

     generateRecipe(userIngredients).then(recipeJSON =>{
        return res.render ('recipe_result',{userIngredients: userIngredients ,recipeJSON:recipeJSON})

    }).catch(err=>{
        return next(err)
    })
      
     
})

module.exports = router


