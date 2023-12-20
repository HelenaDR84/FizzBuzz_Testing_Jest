function fizzBuzz(num) {
    let result = '';
    result += num % 3 === 0 ? 'fizz' : '';
    result += num % 5 === 0 ? 'buzz' : '';
    return result || num;
    };
    
    module.exports = fizzBuzz;

    //Refactorizando la función podría ser con operador ternario, que es una forma corta de escribir un "if... else". En este caso como la función no es muy larga se puede utilizar así porque se entiende.

    // No escribo la condición fizzbuzz de números divisibles por 3 y por 5 (como el 15), porque ya está implícita en la forma de la construcción de "result", por lo tanto nos daría fizzbuzz.