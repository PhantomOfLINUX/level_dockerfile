const WebSocket = require("ws");
const minimist = require("minimist");
const pty = require("node-pty");

// 웹 소켓 서버
const args = minimist(process.argv.slice(2));	//첫 번째 두 인자(node 및 스크립트 파일 경로)를 제외하고 파싱
const port = args.port || 9001;			//명령줄 인자에서 port 값을 읽고, 설정되어 있지 않다면 기본값으로 9001을 사용
const wss = new WebSocket.Server({ port });

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
