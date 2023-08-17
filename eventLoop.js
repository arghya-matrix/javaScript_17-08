const fs= require('fs');

(function lib(){
    function first(){
        console.log("First");
        second();
    }
    
    function second(){
        console.log("Second");
        third();
    }
    
    function third(){
        setTimeout(() => console.log("timeout function"), 0);
        setImmediate(() => console.log("immidiate"));
        process.nextTick(() => console.log("tick"));
        console.log("Third");
        //console.trace();// Prints the call stack
    }
    fs.readFile("./hello",first);
})(); //IIFE