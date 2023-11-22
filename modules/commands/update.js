const { exec } = require("child_process");

module.exports.config = {
    name: "update",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "rjrd",
    description: "Updates the bot code from Git repository.",
    usePrefix: true,
    commandCategory: "aitools",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    const gitCommand = "git pull origin main"; // Replace "main" with your branch name if different

    exec(gitCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error updating code: ${stderr}`);
            api.sendMessage("› Error updating code.", event.threadID);
        } else {
            console.log(`Code updated: ${stdout}`);
            api.sendMessage("› Code updated successfully. Restart the bot for changes to take effect.", event.threadID);
        }
    });
};