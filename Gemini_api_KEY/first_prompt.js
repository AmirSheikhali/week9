let{ GoogleGenAI } = require('@google/genai')

let genAI = new GoogleGenAI ( {} ) 

genAI.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `What promotional items should we give out at our confernece booth?
    we are  a statup company selling logging and monitoring products.
    We'll be attending VuConf Us this year.
    Last year we gave out pens and tote bags.
    the pens were not popular. the tote bags were popular but expensive.`
    
}).then(response => console.log(response.text))

