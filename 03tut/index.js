const { format } = require('date-fns')
const { v4: abcd } = require('uuid');

console.log(format(new Date(), 'yyyy-MM-dd\t hh:mm:ss'))
console.log(abcd())