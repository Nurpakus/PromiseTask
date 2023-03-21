function promiseCreator(a,b) { 
    
    return new Promise ((resolve, reject) => {  
    setTimeout (() => 
    {resolve (b)}, a);} 
  
  )};


const prom = promiseCreator(50, 'Ok!');
prom.then(console.log);



let smthn = document.getElementById('h1');
let btn = document.getElementById('clicker');
let counter = 0;
btn.addEventListener ('click', function () {
   counter++;
   h1.textContent = 'Количество падений ВК:' + counter;
})

const calc = new Calc ();
function Calc (sum, substraction, multi,division) {
  this.read = function () {
    this.a = +prompt ('a?',0);
    this.b = +prompt ('b?',0);
  }
  this.sum = function() {
    return this.a + this.b
  }
  this.substraction = function () {
    return this.a - this.b
  }
  this.multi = function () {
    return this.a * this.b
  }
  this.division = function () {
    return this.a / this.b
  }

}

document.getElementById('variables').addEventListener('click', function () {  alert (calc.read ());
});
document.getElementById('distraction').addEventListener('click', function () {  alert (calc.division ())
});
document.getElementById('sum').addEventListener('click', function () {  alert (calc.sum ())
});
document.getElementById('mult').addEventListener('click', function () {  alert (calc.multi ())
});
document.getElementById('even').addEventListener('click', function () {  alert (calc.substraction ())
});
