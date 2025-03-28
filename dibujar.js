const tablero = document.getElementById('zonadibujo');


function dibujarTablero(filas, columnas) {
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement('div');
            celda.style.border = '1px solid black';
            celda.style.width = '10px';
            celda.style.height = '10px';
            celda.className = 'celda';
            // celda.style.margin = '2px';
            tablero.appendChild(celda);


        }
    }



    // tablero.style.boxSizing = 'content-box';
    tablero.style.border = '3px solid black';
    tablero.style.padding = '2px';
    tablero.style.display = 'grid';
    // tablero.style.gridTemplateColumns = 'repeat(30,0px)';
    // tablero.style.gridTemplateRows = 'repeat(30,0px)';
    // tablero.style.gap = '14px';
    tablero.style.gridTemplateColumns = `repeat(${columnas},14px)`;
    tablero.style.gridTemplateRows = `repeat(${filas},14px)`;
}

function seleccionarColor() {
    console.log('entra en seleccionarColor')
    const colores = document.querySelectorAll('[class*="color"]');
    console.table(colores)
    colores.forEach(casillaColor => {
        casillaColor.addEventListener('click', function () {
            if (!casillaColor.classList.contains('seleccionado')) {
                casillaColor.classList.add('seleccionado');

            }
            const color = getComputedStyle(casillaColor).backgroundColor;
            console.log('color selecciionado:', color);
            console.log('clic en ', this.textContent)
            const estadoDelPincel = document.querySelector('#pincel');
            estadoDelPincel.style.backgroundColor = color;


        })
    })
    // console.log(casillaColor.classList.value)
}

// function pintar() {
//     const celda = document.querySelector('.celda');
//     const estadoDelPincel = document.querySelector('#pincel')
//     const color = document.getComputedStyle(estadoDelPincel).backgroundColor;
//     celda.style.backgroundColor = color;
    

// }


function main() {
    // const tablero = document.getElementById('zonadibujo');
    
    dibujarTablero(30,30)
    seleccionarColor();

    let pincelActivado = false;
    const cuadrícula = document.querySelectorAll('.celda')


    cuadrícula.forEach(celda => {
        celda.addEventListener('click', function () {
            const estadoDelPincel = document.querySelector('#pincel');
            const color = getComputedStyle(estadoDelPincel).backgroundColor;
            pincelActivado = !pincelActivado;
            pincelActivado?
             estadoDelPincel.innerHTML='PINCEL ACTIVADO'
             : estadoDelPincel.innerHTML='PINCEL DESACTIVADO'
                     
            celda.style.backgroundColor = color;
        })
      
    })


     cuadrícula.forEach(celda => {
                celda.addEventListener('mouseover', () => {

                    const estadoDelPincel = document.querySelector('#pincel')
                    const color = getComputedStyle(estadoDelPincel).backgroundColor;
                    if (pincelActivado) {celda.style.backgroundColor = color};
                    
                })
            })

      
}




main();
