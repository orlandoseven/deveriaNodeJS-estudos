const listaDeProdutosDisponiveis = [
    "Pao",
    "Arroz",
    "Café",
    "Laranja",
    "Macarrão",
    "Sabonete",
    "Leite",
];

const listaDeArgumentos = process.argv.slice(2);

const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
    return listaDeArgumentos.find(argumento => argumento === produto)
})

listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log( `Este produto esta disponivel ${produto}`))

const listaProdutosIndisponiveis = listaDeArgumentos.filter(argumento => {
    return !listaDeProdutosDisponiveis.find(produto => produto === argumento)
})
listaProdutosIndisponiveis.forEach(argumento => console.log(`Este produto esta indisponivel ${argumento}`));
listaDeProdutosDisponiveis.sort();
listaDeProdutosDisponiveis.forEach(produto => console.log(`Lista de Produtos disponiveis:${produto}`));