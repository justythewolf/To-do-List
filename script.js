let input = document.querySelector('.input'); 
let btnAgregar = document.querySelector(".boton-agregado");
let container = document.querySelector(".container");

class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }
    crearDiv(tarea) {
        let inputItem = document.createElement("input"); 
        inputItem.disabled = true;
        inputItem.classList.add("item-input");
        inputItem.value = tarea;
        let div = document.createElement("div");
        div.classList.add("item");
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = "🔒";
        botonEditar.classList.add("boton-editar");
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = "🗑";
        botonRemover.classList.add("boton-remover");
        div.appendChild(inputItem);
        div.appendChild(botonEditar);
        div.appendChild(botonRemover);
        container.appendChild(div);

        botonEditar.addEventListener("click", function () {
            if (inputItem.disabled == true) {
                inputItem.disabled = false;
                botonEditar.innerHTML = "🔓";
            } else if (inputItem.disabled != true) {
                inputItem.disabled = true;
                botonEditar.innerHTML = "🔒";
            }
        });
        botonRemover.addEventListener("click", function () {
            div.remove()
        });
    }
    
};
function chequearInput() {
        if (input.value != "") {
            let nuevaTarea = new Item(input.value);
            input.value = "";
            
        } else if (input.value == "") {
            alert("error, agregue una tarea");
        }
}

btnAgregar.addEventListener("click", function () {
    chequearInput();
});
input.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        chequearInput();
    }
});
