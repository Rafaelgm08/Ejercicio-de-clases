const contadorNumero = document.getElementById('contador-numero');
const incrementarBtn = document.getElementById('aumentar');
const decrementarBtn = document.getElementById('decrementar');
const resetearBtn = document.getElementById('resetear');

let contador = 0;

incrementarBtn.addEventListener('click', () => {
    contador++;
    actualizarContador();
});

decrementarBtn.addEventListener('click', () => {
    contador--;
    actualizarContador();
});

resetearBtn.addEventListener('click', () => {
    contador = 0;
    actualizarContador();
});

function actualizarContador() {
    contadorNumero.textContent = contador;
}