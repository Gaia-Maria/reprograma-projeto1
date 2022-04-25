//Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas
const livros= require('../database')
const read =require('readline-sync')

const listarLivrosOrdenados = () => {

const opcaoInicial = read.question('Deseja ordenar livros por pagina? S/N: ').toUpperCase()
const confirmacao = read.question('Tem certeza? S/N ').toUpperCase()
    
if (opcaoInicial === 'S') {
    console.clear()
    
    const listarLivros = livros.map(livro => livro.paginas)

    const livrosEmOrdenados = listarLivros.sort()
    console.table(livrosEmOrdenados)
      
} else {
      console.log('Até a próxima');
}
}

module.exports = listarLivrosOrdenados 