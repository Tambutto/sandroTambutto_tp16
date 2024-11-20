
const {readFileSync} = require('fs');


function importarBicicletas (){
    const data = readFileSync('./bicicletas.json', 'utf-8');
    return JSON.parse(data);
    
}

// console.log(importarBicicletas)

module.exports = {importarBicicletas};