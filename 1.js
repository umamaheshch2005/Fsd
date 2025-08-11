const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log([${req.method}] ${req.url});
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(User ID is: ${userId});
});

app.get('/search', (req, res) => {
    const { term, category } = req.query;
    res.send(Search Term: ${term || 'N/A'}, Category: ${category || 'N/A'});
});

app.get('/blog/:year/:month', (req, res) => {
    const { year, month } = req.params;
    res.send(Viewing blog posts from ${month}/${year});
});

app.get('/go-to-user', (req, res) => {
    const userId = 123;
    const userUrl = /user/${userId};
    res.redirect(userUrl);
});

app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

const PORT = 3050;
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});
