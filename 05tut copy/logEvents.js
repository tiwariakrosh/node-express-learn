const { format } = require('date-fns')
const { v4: abcd } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\t hh:mm:ss')}`
    const logItem = `${dateTime}\t${abcd()}\t${message}\t${logName}\n`
    console.log(logItem)

    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, "logs"))
        }
        // test
        await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem)
    } catch (err) {
        console.log(err)
    }
}

module.exports = logEvents;