
const fs = require('fs');

const fileName = 'notes.txt';

fs.writeFileSync(fileName, 'Hello! This is my first note.\n');
console.log('1. File created!');

const data = fs.readFileSync(fileName, 'utf8');
console.log('2. File content:', data);

fs.appendFileSync(fileName, 'Here is a second line added later.\n');
console.log('3. File updated!');

fs.unlinkSync(fileName);
console.log('4. File deleted!');
