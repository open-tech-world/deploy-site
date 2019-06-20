#!/usr/bin/env node

const runCommand = require('./lib/runCommand');
const deploySite = require('./lib');

const args = process.argv.slice(2);
const cmd = (args[0] || '').trim();

if (cmd.charAt(0) === '-') {
  runCommand(cmd);
} else {
  deploySite(args[0], args[1], args[2]);
}
