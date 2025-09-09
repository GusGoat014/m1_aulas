const prompt = require('prompt-sync')();

const filmes = [
    { id: 1, titulo: "Matrix", ano: 1999, nota: 8.7, genero: "Ficção Científica" },
    { id: 2, titulo: "O Poderoso Chefão", ano: 1972, nota: 9.2, genero: "Drama" },
    { id: 3, titulo: "A Origem", ano: 2010, nota: 8.8, genero: "Ficção Científica" },
    { id: 4, titulo: "O Senhor dos Anéis: O Retorno do Rei", ano: 2003, nota: 9.0, genero: "Fantasia" },
    { id: 5, titulo: "Pulp Fiction", ano: 1994, nota: 8.9, genero: "Crime" },
];

const nome_catalogo = "CineTech"

let TotalFilmes = filmes.length

//console.log(nome_catalogo, TotalFilmes)

function classificarNota(filmes) {

    console.log(filmes)

    for (let i = 0; i < filmes.length; i++) {
        if (filmes[i].nota >= 9) {
            console.log("exelente")
        }
        else if (filmes[i].nota >= 8 && filmes[i].nota <= 8.9) {
            console.log("muito bom")
        } else {
            console.log("bom")
        }
    }


}

//classificarNota(filmes)

let criarResumoFilme = (filmes) => {
    filmes.forEach(element => {
        console.log(`${element.id} | ${element.titulo} | ${element.ano} | ${element.nota} | ${element.genero}\n\n`)
    });
}

//criarResumoFilme(filmes)

const filmesClassicos = filmes.filter(filme => filme.ano < 2000)


// console.log(filmesClassicos)

const titulosFilmes = filmes.map(filme => filme.titulo)

//console.log(titulosFilmes)

let ficcaoCientificaExcelentes = filmes.filter(filmes => filmes.genero == "Ficção Científica" && filmes.nota >= 8.5)

//console.log(ficcaoCientificaExcelentes)

let titulosDrama = filmes.filter(filmes => filmes.genero == "Drama").map(filmes => filmes.titulo)

//console.log(titulosDrama)

function existeFilmeDoGenero(genero, genero2) {
    let verificar = filmes.filter(filmes => filmes.genero == genero).map(filmes => filmes.genero == genero)
    let verificar2 = filmes.filter(filmes => filmes.genero == genero2).map(filmes => filmes.genero == genero2)
    if(verificar[0]==true || verificar2[0]==true){
        console.log(verificar, verificar2)
        return true
    }
    else{
        return false
    }
}

//existeFilmeDoGenero("Drama", "ação")

function buscarEnderecoPorCEP(){
    fetch('https://viacep.com.br/ws/88133-597/json')

    .then(response => response.json())
    .then(data => console.log(data))
}
// buscarEnderecoPorCEP()

function encontrarFilmePorId(){
    let achar = filmes.find(filmes => filmes.id == 3)

    console.log(achar);


}

//encontrarFilmePorId(filmes)

function contarFilmesPorGenero(filmes){
    const contador = {}

    filmes.forEach(filme => {
        contador[filme.genero] = (contador[filme.genero] || 0) + 1 

    });
    console.log(contador)
    return contador;
}
contarFilmesPorGenero(filmes)