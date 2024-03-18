const express = require('express');
const app = express();

app.use(express.json()); // JSON 요청 본문을 파싱하기 위한 미들웨어

// POST 요청을 처리하는 라우트
app.post('/submit', (req, res) => {
    const { stageNumber, problemNumber } = req.body; // 요청 본문에서 스테이지 번호와 문제 번호를 추출

    // 채점 응답
    const gradingResponse = {
        stageNumber,
        problemNumber,
        result: 'Success', // 예시 응답, 실제 구현에 따라 변경 필요
    };

    // 환경 구성 응답
    const setupResponse = {
        stageNumber,
        environment: 'Ready', // 예시 응답, 실제 구현에 따라 변경 필요
    };

    // 조건에 따라 채점 응답 또는 환경 구성 응답을 보냅니다.
    // 여기서는 모든 요청에 대해 채점 응답을 보내는 예시입니다.
    // 실제 구현에서는 요청의 내용이나 상태에 따라 응답을 구분해야 할 수 있습니다.
    res.json(gradingResponse);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

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
