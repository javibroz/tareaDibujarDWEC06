


function dibujarTablero(filas, columnas) {
    const tablero = document.getElementById('zonadibujo'); //creación del tablero en el div #zonadibujo
    document.querySelectorAll('p')[1].innerHTML = 'Haga CLICK en cualquier celda para activar/desactivar el Pincel.' //instruccion en la segunda etiqueta '<p></p>' del documento.

    for (let i = 0; i < filas * columnas; i++) {
        const celda = document.createElement('div');  // se crea una celda con un div
        celda.style.borderTop = '1px solid black';     // estilos
        celda.style.borderLeft = '1px solid black';    // estilos
        celda.style.borderRight = '1px solid grey';   // estilos
        celda.style.borderBottom = '1px solid grey';   // estilos
        celda.style.width = '10px';                 // estilos
        celda.style.height = '10px';                 // estilos
        celda.style.margin = '1px';                    // estilos
        celda.className = 'celda';    // asignación de la clase 'celda'
        tablero.appendChild(celda);  //se añade cada celda al tablero
        tablero.className = 'tablerodibujo'; // asignación de la clase para aplicar estilo del enunciado
    }


    tablero.style.display = 'inline-grid';
    tablero.style.gridTemplateColumns = `repeat(${columnas},14px)`;   //formato de columnas (número y espacio ocupado)
    tablero.style.gridTemplateRows = `repeat(${filas},14px)`;         //formato de filas    (número y espacio ocupado)
}

//*************************************************************************************************************** */


function seleccionarColor() {

    const colores = document.querySelectorAll('[class*="color"]');   //todos los elementos cuya clase comience por 'color' (color1, color2, color3, etc.)
    const estadoDelPincel = document.querySelector('#pincel');   //     elemento div donde se muestra el estado del pincel (activado/desactivado). Se le añade el color actual del pincel también
   // 


    colores.forEach(casillaColor => {
        casillaColor.addEventListener('mouseover', function () { this.style.cursor = 'pointer' })  // cambia el puntero a la forma de mano (no se pide)
        casillaColor.addEventListener('click', function () {                                       // programacion del evento click
            estadoDelPincel.innerHTML = 'PINCEL DESACTIVADO';                                      // Cambio del mensaje por defecto a 'PINCEL DESACTIVADO'
            colores.forEach(casilla => casilla.classList.remove('seleccionado'));                  // antes de asignar la clase 'seleccionado' se borra la clase 'seleccionado' de todas
            casillaColor.classList.add('seleccionado');                                       // se añade la clase 'seleccionado'.
            const claseColor = casillaColor.classList[0];                             //se obtiene y se guarda la clase referente al color (la primera de la lista de clases)
            estadoDelPincel.className = claseColor;                                  // se asigna la clase referente al color al estado del pincel


        });
    });

}

//**************************************************************************************************************** */


function pintar() {
    let pincelActivado = false;  //estado del pincel (activado/desactivado)
    const cuadrícula = document.querySelectorAll('.celda') // cuadrícula = conjunto de celdas


    cuadrícula.forEach(celda => {
        celda.addEventListener('click', function () {               //programación del evento click de cada celda
            const estadoDelPincel = document.querySelector('#pincel');  // elemento div donde se muestra el estado del pincel (activado/desactivado). Se le añade el color actual del pincel también
            const color = getComputedStyle(estadoDelPincel).backgroundColor; // obtención del color

            pincelActivado = !pincelActivado; //activación/desactivación del pincel con cada click
            pincelActivado ?                  // si pincelActivado == true,
                estadoDelPincel.innerHTML = 'PINCEL ACTIVADO'      // mensaje del estado del pincel
                : estadoDelPincel.innerHTML = 'PINCEL DESACTIVADO'     //si pincelActivado == false  ---> mensaje contrario

            celda.style.backgroundColor = color; //pinta la celda donde se hace click
        })

    })


    cuadrícula.forEach(celda => {
        celda.addEventListener('mouseover', () => { //programación del evento mouseover para que se pinten las celdas afectadas

            const estadoDelPincel = document.querySelector('#pincel')
            const color = getComputedStyle(estadoDelPincel).backgroundColor; //se obtiene la propiedad (color de fondo) aplicada en este momento 
            if (pincelActivado) celda.style.backgroundColor = color; //se pinta del color si el pincel está activado.


        })
    })

}
//***************************************************************************************************************** */
function main() {               //función principal
    const filas = 30;           // número de filas
    const columnas = 30;        // número de columnas

    dibujarTablero(filas, columnas);   // creación del tablero de dibujo
    seleccionarColor();
    pintar();

}

//********************************************************************************************************* */


main();
