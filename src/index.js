const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

// router
const memberRouter = require("./routers/orang");

app.use("/member", memberRouter);

app.get(`/`, (req, res) => {
  res.send("Hello guys :D");
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(`ERROR ${error.message}`);
  } else {
    console.log(`APP RUNNING at ${PORT}`);
  }
});
