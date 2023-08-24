
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('Public'));
app.get('/', (req, res) => {
    res.send('Sorry, there was an error.');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

//
/*const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules

const output = execSync('ls', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);*/
//window.open('localhost:3000');
//<a href="https://www.codexworld.com" target="_blank">Visit CodexWorld</a>
//window.open('https://www.codexworld.com', '_blank');
/*if (typeof window !== 'undefined') {
    console.log('You are on the browser,You are good to go')
    } else {
    console.log('You are on the server,Cannot execute')
   }*/
//app.server.close;