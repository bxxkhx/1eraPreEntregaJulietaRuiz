alert("Hola!Desea consultar precios?")
let respuesta = prompt("Si/No").toUpperCase()
function buscador(ropa){
    switch(ropa) {
        case "CARGOS":
            alert("Los rangos de precio van entre los $15.000 y $20.000")
           break;
        case "REMERAS":
            alert("Los rangos de precios van entre los $5.000 y $7.000")
            break;
        case "JEANS":
            alert("Los rangos de precio van entre los $13.000 y $18.000")
            break;
        case  "TOPS":
            alert("Los rangos de precio van entre los $5.000 y $8.000")
            break;
    }
}    
while (respuesta == "SI") {
    let ropa = prompt("Desea buscar:Cargos,remeras.jeans o tops?").toUpperCase()
    buscador(ropa)
    respuesta = prompt("desea averiguar otro precio? Si/No").toUpperCase()     
}
alert("Hasta la proxima!")

