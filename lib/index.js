const cmdInfo = require('./display/cmdInfo');

module.exports = () => {
  const cmd = (process.argv.slice(2)[0] || '').trim();
  if (cmd.charAt(0) === '-') {
    cmdInfo(cmd);
  }
};
