
alert("Hola! ¿Desea consultar precios?");
let respuesta = prompt("Si/No").toUpperCase();

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
}

const productos = [
    new Producto("CARGO NEGRO", "16000"),
    new Producto("CARGO ROSA", "18000"),
    new Producto("JEAN LOW SIZE", "15000"),
    new Producto("JEAN ROTO", "14000"),
    new Producto("REMERA OVERSIZE", "6000"),
    new Producto("TOP CINTAS", "7000")
];

function buscador(ropa) {
    switch (ropa) {
        case "CARGOS":
            const cargos = productos.filter((el) => el.nombre === "CARGO NEGRO" || el.nombre === "CARGO ROSA");
            alertProducts(cargos);
            break;
        case "REMERAS":
            const remeras = productos.filter((el) => el.nombre === "REMERA OVERSIZE");
            alertProducts(remeras);
            break;
        case "JEANS":
            const jeans = productos.filter((el) => el.nombre === "JEAN LOW SIZE" || el.nombre === "JEAN ROTO");
            alertProducts(jeans);
            break;
        case "TOPS":
            const tops = productos.filter((el) => el.nombre === "TOP CINTAS");
            alertProducts(tops);
            break;
        default:
            alert("Opción no válida");
    }
}

function alertProducts(products) {
    if (products.length > 0) {
        alert("Productos encontrados:\n" + products.map(producto => `${producto.nombre}: $${producto.precio.toFixed(2)}`).join('\n'));
    } else {
        alert("No se encontraron productos.");
    }
}

while (respuesta === "SI") {
    let ropa = prompt("Desea buscar: Cargos, remeras, jeans o tops?").toUpperCase();
    buscador(ropa);
    respuesta = prompt("¿Desea averiguar otro precio? Si/No").toUpperCase();
}

alert("Hasta la próxima!");

document.addEventListener("DOMContentLoaded", function () {
    let formulario = document.getElementsByClassName("formulario")[0];
    
    formulario.addEventListener("submit", validacion);

    function validacion(e) {
        e.preventDefault();
        console.log("Formulario enviado");
        let nombre = formulario.querySelector('input[name="nombre"]').value;
        let numero = formulario.querySelector('input[name="numero"]').value;
        let comentario = formulario.querySelector('textarea[name="comentario"]').value;
        const formData = {
            nombre: nombre,
            numero: numero,
            comentario: comentario
        };
        const enJSON = JSON.stringify(formData);
        localStorage.setItem("formData", enJSON);
    }
});