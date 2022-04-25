//Deverá listar livros que ainda não foram lidos
const livros = require('../database')
const read = require ('readline-sync')

const listarLivrosNaoLidos = () => {

    const opcaoInicial =  read.question('Deseja buscar por livros nao lidos? S/N: ').toUpperCase()

       if (opcaoInicial === 'S') {
           console.clear()

       const livrosLidos =  livros.filter(livro => livro.leu === false)
       console.table(livrosLidos)

       }else {
       console.log('Até a próxima');
     }
   }

module.exports= listarLivrosNaoLidos