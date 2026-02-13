import exprees from "express";
import { createServer } from "node:http";
import cors from "cors"
import { Server } from "socket.io";
import mongoose from "mongoose";

const app = exprees();

//Socket io related Services
import {connectTOServer} from "./controllers/socketManager.js"
const server = createServer(app);
const io =  connectTOServer(server);

//sstting Enviroment variable for entire projet
app.set("port", process.nextTick.PORT || 8000);

//Importent stuff
app.use(cors())
app.use(exprees.json({limit:"40kb"}))
app.use(exprees.urlencoded({limit:"40kb",extended:true}))

import userRoutes from "./routes/user.routes.js"
app.use("/",userRoutes)


const start = async () => {
  const ConnectDB = mongoose.connect("mongodb://localhost:27017/Zoom")
  console.log((await ConnectDB).connection.host)
  //   ConnectDB.then((connection)=>{console.log(`Db Host:${connection}`)})
  server.listen(app.get("port"), (req, res) => {
    console.log("App is Listening");
  });

};
start();
