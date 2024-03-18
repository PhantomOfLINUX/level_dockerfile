const express = require("express");
const stageRouter = express.Router();

stageRouter.post("/:action", async (req, res) => {
    const { stageId } = req.body;
    const { action } = req.params; // grade, compose

    try {
        // 컨트롤러 이름 동적 생성
        const controllerName = `stage${stageId
            .toString()
            .padStart(2, "0")}Controller`;
        const controller = require(`../controllers/${controllerName}`);

        // 컨트롤러의 메서드 실행
        if (controller && typeof controller[action] === "function") {
            console.log(`[stageRouter] ${controllerName} : ${action} 호출`);
            await controller[action](req, res);
        } else {
            res.status(404).json({ error: "등록되지 않은 메서드" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = stageRouter;
