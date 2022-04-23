# reprograma-projeto1
Contem projeto da semana 5 da Reprograma. È um sistema que gerencia livros.

*Requisitos*
 buscarLivros Deverá ser possível buscar livros pela categoria
 listarLivrosOrdenados Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.
 listarRecomendados Deverá listar livros que já foram lidos e que são recomendados
 listarLivrosNaoLidos Deverá listar livros que ainda não foram lidos*/

*Regras*
- Inicia o algoritmo escolhendo a forma de busca no menu.
- Caso a pessoa usuária escolha alguma opção inexistente deverá mostrar no console a string 'fim do algoritmo'.
- O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas no console, conforme requisitos acima.

*Dados*
Criar dados mocados, um array de objetos de livros com a modelagem abaixo.

**LIVRO**

nome: string
categoria: string
paginas: number
recomenda: boolean
leu: boolean
