const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'files', 'lorem.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWriter.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWriter.txt'), '\n\n Nice to meet you ...')
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWriter.txt'), path.join(__dirname, 'files', 'newPromiseWriter.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'newPromiseWriter.txt'), 'utf8');
        console.log(newData)


    } catch (err) {
        console.log(err)
    }
}

fileOps()

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })


// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you gyus!!', (err) => {
//     if(err) throw err;
//     console.log('Write completed');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nTesting test ...', (err) => {
//     if(err) throw err;
//     console.log('append completed');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'Newreply.txt'), (err) => {
//     if(err) throw err;
//     console.log('rename completed');
//      })
//    })


// })


// exit on uncaught errors
// process.on('uncaughtException', err => {
//     console.log('There was uncaught error:', err);
//     process.exit(1);
// })