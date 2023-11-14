module.exports.config = {
    name: "hkgen",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Rejard",
    usePrefix: "true",
    description: "UPDATE HAKDOGTUNNEL_LITE_V1.0 CONFIG",
    usages: "[hkgenupdate <configdata> ]",
    commandCategory: "...",
    cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule["axios"];
    let data = args.join(" ");
    const data1 = data;
    
    try {
        const res = await axios.get(`https://hk.drajermaniwata.repl.co/hakdog.php?hard=${data1}`);
        api.sendMessage(`🌭HAKDOGTUNNEL_LITE_V1.0\n\n💥CONFIG UPDATED SUCCESSFULLY!\n\n(C)REJARDGWAPO`, event.threadID, event.messageID);
    } catch (error) {
        console.error(error); 
        api.sendMessage("ERROR PLEASE REPORT TO REJARD BENTAZAR,THANKS YOU MUWAHH", event.threadID, event.messageID);
    }
};