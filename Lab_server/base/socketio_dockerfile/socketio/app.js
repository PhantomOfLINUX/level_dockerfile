const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const socketRouter = require("./src/routes/socketRouter");
const stageRouter = require("./src/routes/stageRouter");
const healthChecker = require("./src/routes/healthChecker");

app.use(express.json());
app.use(stageRouter);
app.use(healthChecker);

socketRouter(io);

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`서버 실행 Port : ${PORT}`);
});
