//readline-sync //lib
const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarRecomendados = require('./controllers/listarRecomendados')

const resposta = read.question(`
======================= Menu =======================

1 - CATEGORIA: buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos

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
        listarLivrosOrdenados()
        break
    case '3':
        listarRecomendados()
        break
    case '4':
        listarLivrosNaoLidos()
        break
    case '5':
    default:
        console.log('fim do algoritmo')
    break
}