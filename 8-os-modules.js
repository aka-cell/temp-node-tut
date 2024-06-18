// built-in modules
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// Pc uptime
const upTime = os.uptime();
console.log(`The System Uptime is ${upTime} seconds`);

// other modules
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);