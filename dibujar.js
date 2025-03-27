const tablero = document.getElementById('zonadibujo');


function dibujarTablero(filas, columnas) {
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement('div');
            celda.style.border = '1px solid black';
            celda.style.width = '10px';
            celda.style.height = '10px';
            // celda.style.margin = '2px';
            tablero.appendChild(celda);


        }
    }



    tablero.style.boxSizing = 'content-box';
    tablero.style.border = '1px solid black';
    tablero.style.padding = '2px';
    tablero.style.display = 'grid';
    // tablero.style.gridTemplateColumns = 'repeat(30,0px)';
    // tablero.style.gridTemplateRows = 'repeat(30,0px)';
    // tablero.style.gap = '14px';
    tablero.style.gridTemplateColumns = 'repeat(30,14px)';
    tablero.style.gridTemplateRows = 'repeat(30,14px)';
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


            if (!estadoDelPincel) {
                console.error("Elemento #estadoDelPincel no encontrado en el DOM");
                return;

            }


        })
    })
    // console.log(casillaColor.classList.value)
}



dibujarTablero(30, 30);
seleccionarColor();
