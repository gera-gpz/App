const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000


app.use(express.json())   //Eta funcion parsear el body de la peticion y si tree JSON la agregar a prp body

app.get('/alumnos', (req, res) => {
    console.log(req.query);
    res.send('Hello World!');
});

app.get('/docentes/:control', (req, res) => {
    console.log(req.params);
    res.send('Hello World!');
});

app.post('/directivos', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});

app.listen(PORT, () => {
console.log('Example app listening on port 3000!');
});
