const express = require('express');
const app = express();
const port = 8111;

app.use(express.static('styles'))

app.listen(port, () => console.log(`Listening on port ${port}`))
