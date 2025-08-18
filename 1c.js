const express = require('express');
const app = express();
const port = 3030;

app.use((req, res, next) => {
    console.log(Middleware 1: Incoming ${req.method} request to ${req.url});
    next();
});

app.use((req, res, next) => {
    res.setHeader('X-Processed-By-Middleware', 'true');
    console.log('Middleware 2: Added custom header');
    next();
});

app.get('/', (req, res) => {
    console.log('Route Handler: Sending response');
    res.send('Hello from the main route!');
});

app.listen(port, () => {
    console.log(Server listening at http://localhost:${port});
});
