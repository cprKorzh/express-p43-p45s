const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const indexedRouter = require('./routes');

app.use('/', indexedRouter);

const start = async () => {
    try {
        app.listen(port, () => console.log(`Server started on port ${port}`))
    } catch (err) {
        console.log(err);
    }
}

start();
