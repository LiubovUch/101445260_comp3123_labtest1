const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "logs");

const createLogs = () => {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log(`Created directory: ${logsDir}`);
    }
    for (let i = 0; i < 10; i++) {
        const fileName = path.join(logsDir, `log${i}.txt`);
        fs.writeFileSync(fileName, `This is log file number ${i}`);
        console.log(`Created file: ${fileName}`);
    }
};


const removeLogs = () => {
    if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
 
        files.forEach(file => {
            fs.unlinkSync(path.join(logsDir, file));
            console.log(`Deleting file: ${file}`);
        });
        fs.rmdirSync(logsDir);
        console.log(`Deleted directory: ${logsDir}`);
    } else {
        console.log("Logs directory does not exist.");
    }
};

createLogs();
removeLogs();
