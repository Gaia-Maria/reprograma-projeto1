//Deverá listar livros que já foram lidos e que são recomendados
const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados = () => {

    const opcaoInicial =  read.question('Deseja buscar por livros recomendados? S/N: ').toUpperCase()

       if (opcaoInicial === 'S') {
        console.clear()

       const livrosRecomendados =  livros.filter(livro => livro.recomenda === true)
       console.table(livrosRecomendados)

       }else {
       console.log('Até a próxima');
     }
   }

module.exports= listarRecomendados