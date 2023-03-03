const fs = require('fs');

const file = fs.readFileSync('../practice/read.txt', 'utf-8');

console.log(file);


const textOut = `This is testing file: ${file}.\nCreated on ${Date.now()} `;

fs.writeFileSync('../practice/output.txt', textOut);

console.log('file written')

const file1 = `this is second testing file : ${file}.\n Created on ${Date.now()}`

fs.writeFileSync('../practice/output1.txt', file1 )