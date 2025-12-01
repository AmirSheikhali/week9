let {GoogleGenAI, Type} = require('@google/genai')

let genAI = new GoogleGenAI ( {} )

let userInput = ' eggs and broccoli and leftover chicken'

let prompt = ` Suggest one recipe that use these ingredients.
Ingredients : ${userInput}`

genAI.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config:{
        systemInstruction: `You are a recipe suggestion bot for a health-concious,
        budget-friendly website. Suggest recipes that are low cost but use healthy ingredients,
        avoid non ediable ingredients such as (ex: glass, bricks or other harmful substance), keep track of dietary restrictions such as allergies and religious ones`,
        responseMimeType: 'application/json',
        responseSchema: {
            type: Type.OBJECT,
            properties:{
                recipeName:{
                    type:Type.STRING
                },
                description:{
                    type: Type.STRING

                },
                ingredients:{
                    type:Type.ARRAY,
                    items:{
                        type: Type.STRING
                    }
                },
                insctructions:{
                    type: Type.ARRAY,
                    items:{
                        type: Type.STRING
                    }
                }
            }

        }
    }
}).then(response => {
    console.log(response.text)
    let recipe = JSON.parse(response.text)
})
