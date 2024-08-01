const express = require("express");
const connection = require("./config/dbConfig");
const dotenv = require("dotenv");
const cors = require("cors");

const portfolioRoute = require("./routers/portfolioRouter");

dotenv.config();

const app = express();
app.use(express.json());
// app.use(cors());

app.use(
  cors({
    origin: "https://portfolio-me-r8xa.vercel.app/",
    credentials: true,
  })
);
app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;

const path = require("path");

// if (process.env.NODE_ENV === 'production') {

//     app.use(express.static(path.join(__dirname , "client/build")));
//     app.get("*" , (req , res) =>{
//         res.sendFile(path.join(__dirname , "client/build/index.html"));
//     });
// }

// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.get("/", (req, res) => {
  res.send("Welcome to my portfolio");
});

app.listen(port, console.log(`Server Running on Port ${port}`));

connection();
