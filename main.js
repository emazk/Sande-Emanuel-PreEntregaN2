const perfumes = [
    { marca: `Paco Rabanne`, fragancia: `Invictus Victory Elixir` },
    { marca: `Paco Rabanne`, fragancia: `Phantom` },

    { marca: `Dior`, fragancia: `Sauvage Elixir` },
    { marca: `Dior`, fragancia: `Sauvage` },

    { marca: `Kenzo`, fragancia: `Home Intense` },
    { marca: `Kenzo`, fragancia: `EDT` },

    { marca: `Jean Paul Gaultier`, fragancia: `Scandal Absolu` },
    { marca: `Jean Paul Gaultier`, fragancia: `Le Male` }
]

function buscadorDePerfumes() {
    let buscador = Number(prompt("Como desea buscar el perfume? \n1. Buscar por marca \n2. Buscar por fragancia"))

    if (buscador === 1) {
        let marcaABuscar = prompt("Ingrese la marca del perfume a buscar: ")
        let resultados = perfumes.filter(perfume => perfume.marca === marcaABuscar)

        if (resultados.length === 0) {
            alert(`La marca de perfume que busca no esta disponible`)
        } else {
            let fraganciasBuscadas=[]
            for(let i=0;i<fraganciasBuscadas.length; i++){
                fraganciasBuscadas.push() //VOY POR ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AYUDA GPTTTTTTTTTT
            }
            alert(`La marca buscada tiene las siguientes fragancias: ${fragancia} `)
        }


    } else if (buscador === 2) {
        let fraganciaABuscar = prompt("Ingrese la fragancia a buscar: ")
        let index2 = perfumes.indexOf(fraganciaABuscar)

        if (index2 == -1) {
            alert(`La fragancia de perfume que busca no esta disponible`)
        } else {
            alert(`La fragancia buscada es de ${perfumes[index2].marca}`)
        }

    } else {
        alert(`Opcion incorrecta`)
    }
}

buscadorDePerfumes()