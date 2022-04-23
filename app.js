const livros = require('./database')

//readline-sync //lib
const read = require('readline-sync')
const resposta = read.question(`
======================= Menu =======================

1 - CATEGORIA: buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidae de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros não lidos

5 - SAIR

Digite um numero[1-5];
`)
