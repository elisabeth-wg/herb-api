const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    'lemon balm': {
        'notes' : 'Always check with your doctor, this is not medical advice. Thyroid inhibitor, those with thyroid concerns should use extra care and use under the guidance of health-care professional',
        'uses': 'anxiety, depression, nervious disorders, viral infections, bacterial infections, digestion, heart disease, heart ache, brain, memory, attracts bees',
        'zone': '4-9',
        'scientificName': 'Melissa officinalis' 
    },
    'chamomile':{
        'notes' : 'Always check with your doctor, this is not medical advice. Can cause allergies.',
        'uses': 'sleep, soap, cosmetics, beer, groundcover, colic, indigestion, muscle spasms, tension, inflammation, infection, fever, arthritis, aches, pains, headaches, stress, nervousness',
        'zone': '3-9',
        'scientificName': 'Matricaria recutita and Chamaemelum nobile' 
    },
    'peppermint':{
        'notes' : 'Always check with your doctor, this is not medical advice.',
        'uses': 'brain, memory, energizes, digestion, nausea, gas, muscle relaxer, stomach cramps or spasms, refreshing after upset stomach, toothpaste, mouthwash, chewing gum, disinfectant spray, headaches, bee strings, burns, toothaches, adds good taste ',
        'zone': '3-11',
        'scientificName': 'Mentha piperata' 
    },
    'rosemary':{
        'notes' : 'Always check with your doctor, this is not medical advice.',
        'uses': 'brain, concentration, memory, headaches, depression, circulatory system, circulation, low blood pressure, mild analgesic, inflammation, arthritis, joint damage, digestion, ,cooking',
        'zone': '3-10',
        'scientificName': 'Rosmarinus officinalis' 
    },
    'unknown':{
        'notes' : 'Always check with your doctor, this is not medical advice.',
        'uses': 'unknown',
        'zone': 'unknown',
        'scientificName': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase()

    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

// app.listen(process.env.PORT || PORT, () => {
//     console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
// })