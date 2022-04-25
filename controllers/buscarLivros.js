//Deverá ser possível buscar livros pela categoria
const livros = require('../database')
const read = require ('readline-sync')

const buscarLivros = () => {
    //quando 1 é chamado la no app, entra aqui nesse codigo
    // e faz essa pergunta no terminal
    const opcaoInicial = read.question('Deseja buscar por categoria? S/N').toUpperCase()

    //quando responde s - entra nesse if
    if (opcaoInicial === 'S') {
        //mostar no codigo todas as categorias existentes 
    const categorias = livros.map(livro => livro.categoria)
    let naoRepetidos = categorias.filter((este, i) => categorias.indexOf(este) === i);
    console.table(naoRepetidos)

    const inputCategoria = read.question('Digite uma categoria conforme a tabela acima:')

    const confirmacao = read.question ('Tem certeza? S/N').toLocaleUpperCase()

    if (confirmacao === 'S' ){
        console.clear()
        const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
        console.table(livrosFiltrados)
         }
    }
}

module.exports = buscarLivros