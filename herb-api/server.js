const express = require('express')
const app = express()

// const PORT = 8000
//to try to get on cyclic
const PORT = process.env.port || 5000;


const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'  
    },
    'chance the rapper': {
        'age': 30,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName] ) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
})


to get up on cyclic
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Listening at ${PORT}`);
  } catch (e) {
    console.log(e.message);
  }
});


// app.listen(process.env.PORT || PORT, () => {
//     console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
// })