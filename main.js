
"use strict";

let arregloitem =[] ;
let contador2 = 0;
let contador3 = 0;



function agregar() {
    
    let valor_item = document.getElementById("item").value;
    arregloitem.push(valor_item);

    mostrarenlista(); 
    }

 
function mostrararreglo() {
    document.getElementById("verItems").innerHTML = arregloitem;
}

function mostrarenlista(){

    // limpia la lista
    document.getElementById("elemento").innerHTML = ""; 
    
    console.log(arregloitem);
    for( let i=0; i<arregloitem.length;i++){
        let element= arregloitem[i];
        console.log(element);

        document.getElementById("elemento").innerHTML += "<li>" + element + "</li>";

        /*
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        document.getElementById("elemento").appendChild(li)
        */
    }
}

function muestra_oculta(){
    document.querySelector("p").classList.toggle("cambia");
}

let btn1 = document.getElementById("b1");
 btn1.addEventListener("click", agregar);
let btn2= document.getElementById("b2");
btn2.addEventListener("click",muestra_oculta)




