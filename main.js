const spawnSync = require('child_process').spawnSync;
const path = require("path");

const proc = spawnSync('bash', [path.join(__dirname, 'entrypoint.sh')], {stdio: 'inherit'});
process.exit(proc.status);
