//readline-sync //lib
const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')

const resposta = read.question(`
======================= Menu =======================

1 - CATEGORIA: buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidae de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros não lidos

5 - SAIR

Digite um numero[1-5];
`)

//Quando a pessoa escolher a opção 1, eu quero que o js chame
//a funcao que vai estar no controllers/buscarLivros.js

switch (resposta) {
    case '1':
        buscarLivros()
        break
    case '2':
        //chame funcao listarLivrosOrdenados
        break
    case '3':
        //chame funcao livrosRecomendados
        break
    case '4':
        //
        break
    case '5':
    default:
        console.log('fim do algoritmo')
    break
}