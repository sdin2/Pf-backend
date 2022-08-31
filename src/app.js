const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
// const { auth } = require("express-openid-connect");
// const Stripe = require("stripe");
require("dotenv").config();
const Stripe = require("stripe");
const axios = require("axios");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");

require("./db");
// const stripe = new Stripe(process.env.SECRET_KEY_STRIPE);
const stripe = new Stripe(process.env.SECRET_KEY_STRIPE);
const server = express();
server.use(cors);
// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SECRET,
//   baseURL: process.env.BASEURL,
//   clientID: process.env.CLIENTID,
//   issuerBaseURL: process.env.ISSUREURL,
// };
const socketServerIo = http.createServer(server);
const io = new Server(socketServerIo, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("messege", (messege) => {
    console.log(messege);
    socket.broadcast.emit("messegeFromBack", messege);
  });
});

server.name = "API";

server.use(express.json());
// server.use(auth(config));
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", routes);
server.post("/api/checkout", async (req, res) => {
  try {
    const { id, amount, dataUser } = req.body;
    console.log("id", id, "ammount", amount, "dataUser", dataUser, "fin");
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      payment_method: id,
      confirm: true,
    });
    let user = await axios.get(
      `https://pf-henry-gamesportal.herokuapp.com/users/${dataUser.id}`
    );
    console.log("userData", user.data);
    axios.put(
      `https://pf-henry-gamesportal.herokuapp.com/users/${dataUser.id}`,
      {
        plan: true,
      }
    );
    res.status(200).json(payment);
  } catch (error) {
    console.log("error", error, "datastripe", error.StripeCardError);
    res.send(error);
  }
});
// Error catching endware.
server.use((err) => {
  // eslint-disable-line no-unused-vars
  console.error(err);
});

module.exports = socketServerIo;
