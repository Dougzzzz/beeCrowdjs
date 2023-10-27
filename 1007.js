var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const a = Number(lines[0])
const b = Number(lines[1])
const c = Number(lines[2])
const d = Number(lines[3])

dif = (a * b) - (c * d)
console.log(`DIFERENCA = ${dif}`)