/* La `función asíncrona traerAsyncRick()` es una función que realiza una solicitud asíncrona a la API de Rick and Morty para recuperar datos sobre personajes específicos. Utiliza la palabra clave `await` para esperar la respuesta de la API y luego convierte la respuesta al formato JSON usando `response.json()`. Si hay un error durante la solicitud, muestra una alerta y registra el error en la consola. Finalmente, devuelve los datos recuperados. */
async function traerAsyncRick() {
    /* La línea `let data = {}` está inicializando un objeto vacío llamado `data`. Este objeto se utilizará para almacenar los datos recuperados de la API más adelante en el código. */
    let data = {}

   /* El bloque `try` se utiliza para ejecutar un bloque de código que potencialmente puede generar un error. En este caso, se utiliza para realizar una solicitud asincrónica a la API de Rick and Morty utilizando la función "fetch". La función `fetch` devuelve una promesa que se resuelve en la respuesta de la solicitud API. */
    try {
        /* La línea `const respuesta = await fetch("https://rickandmortyapi.com/api/character/1,183,5,6,16,23,5,10,25,100,2,40")` está realizando una solicitud asincrónica a la API de Rick and Morty para recuperar datos sobre personajes específicos. Utiliza la función `fetch` para enviar la solicitud a la URL especificada. La palabra clave `await` se utiliza para esperar la respuesta de la API. Una vez recibida la respuesta, se asigna a la variable `respuesta`. */
        const response = await fetch("https://rickandmortyapi.com/api/character/1,183,5,6,16,23,5,10,25,100,2,40")
        /* `data = await respuesta.json()` está asignando los datos JSON analizados de la respuesta de la API a la variable `data`. */
        data = await response.json()

    /* El bloque `catch` se utiliza para manejar cualquier error que pueda ocurrir durante la solicitud asincrónica a la API. Si ocurre un error, se ejecutará el código dentro del bloque `catch`. */
    } catch (error) {
        window.alert("Hubo un error")
        console.log(error)
    }

    /* La declaración `devolver datos` devuelve el objeto `datos` de la función `traerAsyncRick()`. Esto significa que cuando se llame a la función, devolverá los datos recuperados de la API. Los datos devueltos pueden luego usarse o manipularse en otras partes del código. */
    return data
}

/* La línea `const myDiv = document.getElementById("PersonajeUno")` es seleccionar un elemento HTML con el id "PersonajeUno" y asignarlo a la variable `myDiv`. Esto le permite manipular o acceder al elemento seleccionado en su código JavaScript. */
const myDiv = document.getElementById("PersonajeUno")



for (let i = 0; i < 20; i++) {
    /* La línea `const datos = traerAsyncRick().then(response => {` está llamando a la función `traerAsyncRick()` y usando el método `then()` para manejar la respuesta de la llamada API asincrónica. */
    const datos = traerAsyncRick().then(response => {
        const articulo = document.createElement('article')
        articulo.className += "articulo"

        /* El código `const TituloFicha = document.createElement(&#39;h2&#39;)` está creando un nuevo elemento HTML `<h2> ` y asignándolo a la variable `TituloFicha`. */
        const TituloFicha = document.createElement('h2')
        /* `TituloFicha.innerHTML=`${response[i].name}`` está configurando el contenido HTML interno del elemento `TituloFicha` al valor de `response[i].name`. */
        TituloFicha.innerHTML=`${response[i].name}`

        const imagenficha = document.createElement('img')
        imagenficha.src=`${response[i].image}`

        const textoficha = document.createElement('p')
        textoficha.className += "info"
        textoficha.innerHTML=`Especie: ${response[i].species} <br> Estado: ${response[i].status} <br> Tipo: ${response[i].type} <br> Genero: ${response[i].gender} <br>`

        /* La línea `const padre = document.querySelector('#personajes')` es seleccionar un elemento HTML con el id "personajes" y asignarlo a la variable `padre`. Esto le permite manipular o acceder al elemento seleccionado en su código JavaScript. */
        const padre = document.querySelector('#personajes')

        padre.appendChild(articulo)
        articulo.appendChild(TituloFicha)
        articulo.appendChild(imagenficha)
        articulo.appendChild(textoficha)
        
    })
}

