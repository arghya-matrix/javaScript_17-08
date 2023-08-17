// // Global node module
//  var hello =function (){
//      return ("It is a global module");
// }

//  console.log(global.hello());

console.log(__dirname);
console.log(__filename);
var str= "Hello World";
console.log(global.str);

console.log(module);
//(function (exports, require, module, __dirname, __filename){
let url = 'https://nodejs.dev/en/learn/';
function log(message) {
    console.log("message");
}
//}) Converts into an IIFE in v8 engine to execute the code
module.exports.log= log;