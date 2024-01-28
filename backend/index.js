const express = require("express");
const app = express();
const port = 3000;

const infoRoute = require("./routes/infoRoute");

app.use("/api/v1/info", infoRoute);

app.listen(port, () => {
  console.log(`Server 127.0.0.1:${port}`);
});
