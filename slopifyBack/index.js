const express = require("express");
const app = express();
const port = 3001;
const signupRoute = require("./routes/signupRoute");

app.use("/signup", signupRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));