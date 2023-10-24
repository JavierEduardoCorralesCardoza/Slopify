const express = require("express");
const app = express();
const port = 3001;
const ruta1 = require("./routes/primer_api");


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
