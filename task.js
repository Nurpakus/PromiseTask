
function promiseCreator(a,b) { 
    
    return new Promise ((resolve, reject) => {  
    setTimeout (() => 
    {resolve (b)}, a);} 
  
  )};


const prom = promiseCreator(50, 'Ok!');
prom.then(console.log);