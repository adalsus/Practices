//Esta funcion es proceso y manda el argumento result
function add(a, b, callback) { var result = a + b; callback(result); }

//Acá el argumento result entra como parámetro
add(2, 3, function (c) { console.log('2 + 3 = ' + c) });
add(1, 1, function (c) { console.log('Is 1 + 1 = 3? ' + (c === 3)); });

let vamos = 'Vamos con todo!!!'
console.log('vamos:', vamos)
