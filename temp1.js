var x = 2;
function outer(){
    var y = 3;
    function inner(){
        var z = 4;
        var value = x + y + z;
        return value;
    }
    return inner();
}

console.log(`x: ${x}`)
console.log(outer());
// console.log(`y: ${y}`)
// console.log(`z: ${z}`)

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();