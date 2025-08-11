const express = require('express');
const app = express();
const port = 3050;

app.use(express.json());

let dataStore = [];
let idCounter = 1;

app.post('/resource', (req, res) => {
    const { name, value } = req.body;
    if (!name || !value) {
        return res.status(400).json({ error: 'Name and value are required' });
    }
    const newItem = { id: idCounter++, name, value };
    dataStore.push(newItem);
    res.status(201).json({ message: 'Resource created', data: newItem });
});

app.get('/resource', (req, res) => {
    res.status(200).json({ data: dataStore });
});

app.delete('/resource/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = dataStore.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Resource not found' });
    }
    const deletedItem = dataStore.splice(index, 1);
    res.status(200).json({ message: 'Resource deleted', data: deletedItem[0] });
});

app.listen(port, () => {
    console.log(Server is running at http://localhost:${port});
});
