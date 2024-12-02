const express = require('express');
const cors = require('cors');
const Pets = require('./models/petModel');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:5173"
}));

// Routes/Endpoints
app.get('/pets', (req, res) => {
    Pets.getAll()
        .then((result) => {
            return res.status(200).json(result.rows);
        });
});

app.post('/new/pet', (req, res) => {
    const {name, breed, species, user_id} = req.body;
    Pets.createOne([name, species, breed, user_id])
        .then((result) => {
            console.log(result);
            return res.status(201).json(result.rows[0]);
        });
});

app.delete('/remove/pet/:id', (req, res) => {
    const {id} = req.params;
    Pets.deleteOne([id])
        .then((result) => {
            return res.status(204).end();
        });
});

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});