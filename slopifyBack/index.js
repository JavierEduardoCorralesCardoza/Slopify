const express = require("express");
const app = express();
const port = 3001;
const signupRoute = require("./routes/signupRoute");
const signinRoute = require("./routes/signinRoute.js")


app.use("/home", signupRoute);
app.use("/home", signinRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));