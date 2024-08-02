
const listaArgumentos  = process.argv.slice(2);

console.log('----------------Executando um for -------------------');
for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posição ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`)
}

console.log('--------------Executando um While------------------------');

let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posição ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`)
    controladorWhile++;
}

console.log("----------------Executando Do While ---------------")
let controladorDoWhile = 0;

do {
    console.log(`Posição ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`)
    controladorDoWhile++;
}while(controladorDoWhile < listaArgumentos.length)

console.log('---------------Executando For Of--------------')
let controladorForOf = 0;
for (const argumento of listaArgumentos){
    console.log(`Posição ${controladorForOf} valor lido = ${argumento}`)
    controladorForOf++;
}