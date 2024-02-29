const WebSocket = require("ws");
const pty = require("node-pty");

// 웹 소켓 서버
const wss = new WebSocket.Server({ port: 9001 });

wss.on("connection", (ws) => {
    console.log("connection.");

    const terminal = pty.spawn("bash", [], {
        name: "xterm-color",
        cols: 80,
        rows: 30,
        cwd: process.env.HOME,
        env: process.env,
    });

    /// 가상 터미널 -> 클라이언트
    terminal.on("data", (data) => { //data 이벤트에 리스너 등록
        ws.send(data);
        console.log("data: ", data);
    });

    // 클라이언트 -> 가상 터미널
    ws.on("message", (message) => { //message 이벤트에 리스너 등록
        terminal.write(message);
        console.log("message: ", message);
    });

    // 종료
    ws.on("close", () => { //close 이벤트에 리스너 등록
        terminal.kill();
        console.log("disconnection.");
    });
});
