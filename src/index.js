const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const db = require("../models");

app.use(cors());
app.use(express.json());

// model synchronization

// db.sequelize.sync({ alter: true }).then(() => {
//   console.log("re-sync db");
// });

// router
const memberRouter = require("./routers/orang");
const asetRouter = require("./routers/aset");
const dataAsetRouter = require("./routers/data_aset");

app.use("/member", memberRouter);
app.use("/aset", asetRouter);
app.use("/data-aset", dataAsetRouter);

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
