import cors from "cors";
import express from "express";
import http from "http";
import socketio from "socket.io";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const PORT = process.env.PORT || 4040;

const server = http.createServer(app);
const io = socketio(server);


io.sockets.on("connection", (socket) => {

    console.log("connected");

    socket.on("disconnect", () => {
        console.log("disconnected");
    });

});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})