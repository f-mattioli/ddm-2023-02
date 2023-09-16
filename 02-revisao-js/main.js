// Alerta
function f01() {
    alert('Ok!');
}

// Console
function f02() {
    console.log('Ok!');
}

// Variáveis
function f03() {
    var x = "5";
    console.log(typeof x);

    x = 10;
    console.log(typeof x);
}

// Seleção
function f04() {
    var a = 10;
    var b = '10';

    // Comparação de valores
    if (a == b) {
        console.log("Valores iguais.");
    } else {
        console.log("Valores diferentes.");
    }
    
    // Comparação de valores e tipos
    if (a === b) {
        console.log("Valores e tipos iguais.");
    } else {
        console.log("Valores e tipos diferentes.");
    }
}

// Repetição: while
function f05() {
    var x = 0;
    console.log("Antes: " + (typeof x));

    while (x < 10) {
        console.log(x);
        x = x + 0.1;
    }
    console.log("Depois: " + (typeof x));
}

// Repetição: for
function f06() {
    for (var x = 0; x < 10; x = x + 0.1) {
        console.log(x);
    }
}

// Funções
function soma(a, b) {
    var resultado = a + b;

    return resultado;
}

function f() {
    var x = 2;
    var y = 3;

    console.log(soma(x, y));
}
