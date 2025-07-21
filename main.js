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
            let fragancias = resultados.map(p => p.fragancia).join(",\n")
            alert(`La marca ${marcaABuscar} tiene las fragancias:\n${fragancias}`)
        }
    } else if (buscador === 2) {
        let fraganciaABuscar = prompt("Ingrese la fragancia a buscar: ")
        let fragFilter = perfumes.filter(perfume => perfume.fragancia === fraganciaABuscar)

        if (fragFilter.length === 0) {
            alert(`La fragancia de perfume que busca no esta disponible`)
        } else {
            let marcas = fragFilter.map(p => p.marca).join(", ")
            alert(`La fragancia ${fraganciaABuscar} es de la marca: ${marcas} y esta disponible!`)
        }

    } else {
        alert(`Opcion incorrecta`)
    }
}

function agregarPerfume() {
    let nuevaMarca = prompt("Ingrese la marca del perfume a agregar: ")
    let nuevaFragancia = prompt("Ingrese la fragancia a agregar: ")
    perfumes.push({ marca: nuevaMarca, fragancia: nuevaFragancia })
}

function quitarUltimoPerfume() {
    let borraPerfumeUltimo = confirm("Desea eliminar el ultimo perfume?")
    if (borraPerfumeUltimo) {
        perfumes.pop()
    } else {
        return
    }
}

function verPerfumes() {
    let lista = "Los perfumes disponibles son:\n\n"
    for (let i = 0; i < perfumes.length; i++) {
        lista += `Marca: ${perfumes[i].marca}\nFragancia: ${perfumes[i].fragancia}\n`
    }
    alert(lista)
}

function menu() {
    let flag = true

    while (flag) {
        let option = Number(prompt("Ingrese la opcion deseada: \n1. Ver Perfumes \n2. Buscar Perfume \n3. Agregar Perfume \n4. Quitar el ultimo perfume \n5. Salir del menu"))

        switch (option) {
            case 1:
                verPerfumes()
                break
            case 2:
                buscadorDePerfumes()
                break
            case 3:
                agregarPerfume()
                break
            case 4:
                quitarUltimoPerfume()
                break
            case 5:
                let confirmacion = confirm("Seguro desea salir del menu?")
                if (confirmacion) {
                    flag = false
                } else {
                    break
                }
                break
            default:
                alert("Opcion incorrecta")
                break
        }
    }
}

menu()


