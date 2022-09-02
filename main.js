// variable
const listaDeTareas = document.querySelector("#listaDeTareas")

// Array
let arrayNotas = []

// Class para los objetos
class Notas {
    constructor(id, fecha, mensaje, usuario, confirmado) {
        this.id = id;
        this.fecha = fecha;
        this.mensaje = mensaje;
        this.usuario = usuario;
        this.confirmado = confirmado;
    }
    confimarNota(){
        if(this.confirmado == false){
        this.confirmado = true;
        alert(`Nota ${this.id} confirmada exitosamente!`);
        }else{
            alert(`Nota ${this.id} ya esta confirmada!`);
        }
    }
}

function encaminador() {
    let trueOfalse = true
    while (trueOfalse) {
        let opcion = prompt("Que deseas hacer? \n 1. Crear nota \n 2. Mostrar notas \n 3. Confirmar notas  \n 4. Salir")
        switch (opcion) {
            case "1":
                crearNota()
                trueOfalse = false
                break
            case "2":
                mostrarNotas()
                trueOfalse = false
                break
            case "3":
                confirmarNotas()
                trueOfalse = false
            case "4":
                trueOfalse = false
                break
            default:
                alert("Opcion no valida")
                break
        }
        if (opcion == "") {
            alert("No has elegido ninguna opcion")
            trueOfalse = true
        }
    }

}

encaminador()

function mostrarNotas() {
    if (arrayNotas.length == 0) {
        alert("No hay notas")
        encaminador()
    } else {
        arrayNotas.forEach(elm => {
            listaDeTareas.innerHTML += `<li id="${elm.confirmado}"> id:${elm.id} \n Fecha: ${elm.fecha}  \n Mensaje: ${elm.mensaje} \n Usuario: ${elm.usuario} \n Esta confirmado? : ${elm.confirmado}</li>`
        })
        let nodes = listaDeTareas.children 
        for(let i = 0; i < nodes.length; i++){
            if(nodes[i].id == "true"){
                nodes[i].style.color = "green"
            }else{
                nodes[i].style.color = "red"
            }
        }
    }
}

// Funcion para crear un objeto Notas
function crearNota() {
    let trueOfalse = true
    while (trueOfalse) {
        let fecha = prompt("Indica la fecha de la nota")
        let mensaje = prompt("Indica el mensaje de la nota")
        let usuario = prompt("Indica tu nombre o el usuario que esta creando la nota")

        if ((fecha != "") && (mensaje != "") && (usuario != "")) {
            arrayNotas.push(new Notas(arrayNotas.length + 1, fecha, mensaje, usuario, false))
            let validacion = prompt("Queres enviar otra? (si/no)")
            if (validacion == "no") {
                trueOfalse = false
                console.log("entra")
                encaminador()
            } else {
                trueOfalse = true
            }
        } else {
            trueOfalse = true
        }
    }
}

function confirmarNotas() {
    let trueOfalse = true
    alert("Para ver la notas pendientes hay que ver la consola")
    if (arrayNotas.length != 0) {
        arrayNotas.forEach(elm => {
         console.log(`Nota: ${elm.id} Fecha: ${elm.fecha}  Mensaje: ${elm.mensaje} Usuario: ${elm.usuario} Esta confirmado?: ${elm.confirmado} \n \n`) 
        })
        while(trueOfalse){
            let confirmacion = prompt("¿Queres confirmar alguna nota? (si/no)")
            if(confirmacion == "no"){
                trueOfalse = false
                encaminador()
            }else{  
                buscarNotas()
                trueOfalse = false
            }
        }
        
       
    }else{
        alert("No hay notas pendientes")
        encaminador()
    }
}

function buscarNotas(){
    let trueOfalse = true
    while(trueOfalse){
        let id = prompt("Indica el id de la nota que quieres confirmar sino ingresa salir")
        if(Number(id)){
             let busqueda = arrayNotas.filter(elm => elm.id == id)
             if(busqueda.length > 0){
                busqueda[0].confimarNota()
                trueOfalse = false
                encaminador()
             }else{
                alert("No hay notas con ese id")
             }
        }else if(id == "salir"){
            trueOfalse = false
            encaminador()
        }else{
            trueOfalse = true
        }
        }
    }
