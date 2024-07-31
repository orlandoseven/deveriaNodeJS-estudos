const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se você e maior de 18 anos e tem habilitação para,para poder entrar no kart');
console.log('Alem da suas,precisamos verificar se voce esta na lista de presenca do horario');

readLine.question('Qual o ano do seu nascimento?', ano =>{
    if(ano > 2006){
        console.log('Voce nao tem 18 anos');
    }else{
        readLine.question("Voce tem habilitação? (Sim/Não)", temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log("Você não tem habilitação para entrar no kart");
            }else{
                readLine.question("Qual e o seu nome?", nome =>{
                    switch(nome){
                        case 'Ronaldo':
                            console.log('Bem vindo ao kart');
                            break;
                        case 'Rafael':
                            console.log('Bem vindo ao kart');
                            break;
                        default:
                            console.log('Nome nao esta na lista')    
                    }
                })
            }
        })
    }
})