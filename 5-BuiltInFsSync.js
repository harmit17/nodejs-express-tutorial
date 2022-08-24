const {readFileSync, writeFileSync, writeSync} = require('fs');

const firstFile = readFileSync('./4-content/5-firstFile.txt', 'utf8');
const secondFile = readFileSync('./4-content/5-secondFile.txt', 'utf8');

console.log('First file: ', firstFile , '\nSecond file: ', secondFile);

writeFileSync(
    './4-content/5-write-sync.txt', 
    `Conversation of two file: \n${firstFile} \n${secondFile}`,
    {flag : 'a'}
);