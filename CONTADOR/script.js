let contador = document.getElementById ('mostrar')
let increment = 0;
let addbutton = document.getElementById ("add")

let contador = 0;

function suma () {
    letvalornumero1=numero1.value;
    letvalornumero2=numero2.value;
    console.log (valornumero1 + valornumero2)
    innerhtml= ' '
}




function resta () {
    letvalornumero1=parseInt(numero1.value);
    letvalornumero2=parseInt(numero2.value);
    console.log (valornumero1 - valornumero2)
    innerHeight.html= ' '
}

function division () {
      letvalornumero1=parseInt(numero1.value);
      letvalornumero2=parseInt(numero2.value);
      console.log (valornumero1 - valornumero2)
         innerHeight.html= ' '
 }

//<section class="contenedor">
//<nav>
    //<h2>Contador</h2>
    //<button  id= "valor">0</button>
    
    //<button id="aumentar" class="botonuno">Aumentar </button>
    //<button id="reset"   class="botondos">Reset </button>
   // <button id="disminuir"    class="botontres">Disminuir </button>

/*</nav>
let contador = 0;
const valor = document.getElementById("valor");
const aumentarButton = document.getElementById("aumentar");
const disminuirButton = document.getElementById("disminuir");
const resetButton = document.getElementById("reset");

aumentarButton.onclick= function() {
    contador++;
    valor.innerHTML= contador;

}
disminuirButton.onclick= function(){
    contador--;
    valor.innerHTML= contador;

}
resetButton.onclick= function(){
    contador=0;
    valor.innerHTML= contador; 
}


/*const contadorElement = document.getElementById("contador");
const incrementarButton = document.getElementById("incrementar");
const resetearButton = document.getElementById("reiniciar");
const disminuirButton = document.getElementById("disminuir");

let contador = 0;

function disminuirContador() {
    contador--;
    contadorElement.textContent = contador;
}

function incrementarContador() {
    contador++;
    contadorElement.textContent = contador;
}

function resetearContador() {
    contador = 0;
    contadorElement.textContent = contador;
}



incrementarButton.addEventListener("click", incrementarContador);
resetearButton.addEventListener("click", resetearContador);
disminuirButton.addEventListener("click", disminuirContador)