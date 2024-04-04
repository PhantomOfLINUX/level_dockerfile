const express = require("express");
const healthChecker = express.Router();

const { exec } = require("child_process");
const util = require("util");
const execAsync = util.promisify(exec);

healthChecker.get("/health", async (req, res) => {
    try {
        const { stdout, stderr } = await execAsync("who | wc -l");

        const usersCount = parseInt(stdout);
        console.log(`users count : ${usersCount}`);

        res.status(200).json({ usersCount: usersCount });
    } catch (error) {
        console.error(`[healthChecker] error: ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = healthChecker;
