console.log('Hello World');

// How NoodeJs differ from vinnala JS
//1. Node run on a server while vanilla JS run on a browser
//2. NodeJs can access file system while vanilla JS cannot
//3. NodeJs uses CommonJS module system while vanilla JS uses ES6 modules
//4. NodeJs has built-in modules like fs, http, path while vanilla JS does not have built-in modules
//5. NodeJs can handle backend tasks while vanilla JS is mainly used for frontend tasks
// 6. NodeJs can interact with databases while vanilla JS cannot directly interact with databases
//7. NodeJs supports asynchronous programming with callbacks, promises, and async/await while vanilla JS also supports these but is more commonly used in NodeJs for I/O operations
//8. NodeJs has a package manager called npm while vanilla JS does not have a built-in package manager
//9. NodeJs can be used to build server-side applications while vanilla JS is primarily used for client-side scripting
//10. NodeJs has a different event loop mechanism compared to the browser's event loop used in vanilla JS
//11. NodeJs can be used to create command-line tools while vanilla JS is not typically used for this purpose
//12. NodeJs can handle multiple requests simultaneously using its non-blocking I/O model while vanilla JS is single-threaded in the browser environment

const os = require('os');
const path = require('path')
const {add, divide, multiply, subract} = require('./math')

console.log(add(2,4))
console.log(divide(4,2))
console.log(multiply(2,4))
console.log(subract(5,4))

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// console.log(os.uptime())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

// const myPath = path.parse(__filename)
// console.log(myPath.name)
