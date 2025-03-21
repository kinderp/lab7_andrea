const express = require("express");
const app = express();
const port = 3333;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + "client.html");
});

app.get('/users', (req, res) => {
    const id = req.query.id
    const token = req.query.token
    console.log(`id=${id} token=${token}`);
    res.status(200).send("OK");
});

app.get('/users/:id/:token', (req, res) => {
    const id = req.params.id;
    const token = req.params.token;
    console.log(`id=${id} token=${token}`);
    res.status(200).send("OK");
});

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.post('/users', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const token = req.body.token;
    console.log(`id=${id} token=${token}`);
    res.status(200).send("OK");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});