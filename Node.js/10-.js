const { log } = require('console');
const os = require('os');
const ver = os.userInfo();
console.log(ver.homedir+'\\desktop\\');

/* System uptime in seconds */
console.log(Math.floor(os.uptime()/60),'minutes', Math.floor(os.uptime()%60),'seconds');

const cur_os={
    name: os.type(),
    release: os.release(),
    total_mem: os.totalmem(),
    free_mem: os.freemem(),
    version: os.version()
}
console.log(cur_os);