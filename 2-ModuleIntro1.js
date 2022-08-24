//Modules
const names = require('./2-ModuleIntro2');
const sayHi = require('./2-ModuleIntro3');
const data = require('./2-ModuleIntroAlternativeSyn');

console.log(data);
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);