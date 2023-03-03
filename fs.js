const fs = require('fs');


//Blocking, Synchronous way
// const file = fs.readFileSync('../practice/read.txt', 'utf-8');

// console.log(file);


// const textOut = `This is testing file: ${file}.\nCreated on ${Date.now()} `;

// fs.writeFileSync('../practice/output.txt', textOut);

// console.log('file written')

// const file1 = `this is second testing file : ${file}.\n Created on ${Date.now()}`

// fs.writeFileSync('../practice/output1.txt', file1 )


//Non-Blocking, Asynchronous way

fs.readFile('../practice/output.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('Will read the file!!!!')