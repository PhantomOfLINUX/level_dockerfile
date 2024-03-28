const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const pty = require("node-pty");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const terminal = pty.spawn("bash", [], {
    name: "xterm-color",
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env,
});

terminal.on("data", (data) => {
    console.log(`Output: ${data}`);
});

io.on("connection", (socket) => {
    console.log("connection.");

    terminal.on("data", (data) => {
        socket.emit("input", data);
        console.log("data: ", data);
    });

    socket.on("output", (message) => {
        console.log("request", message);
        terminal.write(message);
    });

    socket.on("disconnect", () => {
        console.log("disconnection.");
    });
});

server.listen(8080, () => {
    console.log("listen 8080");
});
