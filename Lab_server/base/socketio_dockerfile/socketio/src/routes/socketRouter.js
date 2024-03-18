const Terminal = require("../models/Terminal");

// ANSI 이스케이프 시퀀스를 제거하는 함수
function removeAnsiEscapeCodes(str) {
    return str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g, '');
}

module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("클라이언트 연결");

        const terminal = new Terminal();

        terminal.onData((data) => {
            const cleanedData = removeAnsiEscapeCodes(data); // 이스케이프 시퀀스 데이터 정리
            socket.emit("output", cleanedData);         // data에서 cleanedData로 변경
        });

        socket.on("input", (message) => {
            terminal.write(message);
        });

        socket.on("resize", (size) => {
            terminal.resize(size.cols, size.rows);
        });

        socket.on("disconnect", () => {
            console.log("클라이언트 종료");
            terminal.destroy();
        });
    });
};
