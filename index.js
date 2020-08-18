const express = require("express");
const app = express();
const port = 80;

app.use(express.static("styles"));

app.listen(port, () => console.log(`Listening on port ${port}`));
