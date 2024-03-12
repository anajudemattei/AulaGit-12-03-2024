let numeroA = 30;
let numeroB = 35;

let inicio;
let fim;

if (numeroA < numeroB) {
    inicio = numeroA;
    fim = numeroB;
} else {
    inicio = numeroB;
    fim = numeroA;
}

while (inicio <= fim){
    console.log(inicio)
    inicio++
}