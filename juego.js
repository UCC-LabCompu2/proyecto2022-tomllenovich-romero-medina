var canva = document.getElementById("canvajuego");
var contx = canva.getContext("2d");
var x = canva.width / 2;
var y = canva.height - 30;
var dx = 2;
var DY = -2;
var puntuacion=0;
var filas = 3;
var columnas = 13;
var espacio = 10;
var espacioarriba= 30;
var ESPACIOIZQ = 10;
var flechaderecha = false;
var flechaizq = false;
var bloque = {
    height: 15,
    width: 80,
};
/**
 * Dibuja la bola (ponemos color y tamaño)
 * @method dibujar
 */
var bola = {
    radio :20,
    dibujar: function () {
        contx.beginPath();
        contx.arc(x, y, this.radio, 0, 2 * Math.PI);
        contx.fillStyle="red";
        contx.fill();
        contx.closePath();
    }
};
/**
 * Dibuja la barra (ponemos color y tamaño)
 * @method dibujar
 */
var barra = {
    width: 90,
    height: 8,
    pX: (canva.width - 90) / 2,
    dibujar: function () {
        contx.beginPath();
        contx.fillStyle = "#000000";
        contx.fillRect(this.pX, 390, this.width, this.height);
        contx.fill();
        contx.closePath();
    }
};

var objetivos = [];
for (var i = 0; i < columnas; i++) {
    objetivos[i] = [];
    for (var j = 0; j < filas; j++) {
        objetivos[i][j] = {x: 0, y: 0, status:1};
    }
}

/**
 * Movemos la barra
 *document.addEvenListener - pulsado de teclas
 *keyDownHandler - Al pulsar cualquier tecla la funcion se ejecutará
 *keyUpHandler - cuando se libere el boton pulsado
 **/
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
/**
 *Ejecuta la funcion al pulsar una tecla
 *@method keyDownHandler
 *@param event-
 */
function keyDownHandler(event)
{
    if (event.keyCode === 39 || event.keyCode === 68)
    {
        flechaderecha = true;
    } else
        if (event.keyCode === 37 || event.keyCode === 65)
            {
                flechaizq = true;
            }
}
/**
 * Indica la tecla ya no esta pulsada
 * @method keyUpHandler
 * @param event
 */
function keyUpHandler(event) {
    if (event.keyCode === 39 || event.keyCode === 68) {
        flechaderecha = false;
    } else if (event.keyCode === 37 || event.keyCode === 65) {
        flechaizq = false;
    }
}
/**
 * pintamos nuestros objetivos
 * @method dibujarobj
 */
function dibujarobj() {
    for (i = 0; i < columnas; i++) {
        for (j = 0; j < filas; j++) {
            if (objetivos[i][j].status === 1){
                contx.fillStyle="black";
                var bloqueX = (i * (bloque.width + espacio)) + ESPACIOIZQ;
                var bloqueY = (j * (bloque.height + espacio)) + espacioarriba;
                objetivos[i][j].x = bloqueX;
                objetivos[i][j].y = bloqueY;
                contx.beginPath();
                contx.fillRect(bloqueX, bloqueY, bloque.width, bloque.height);

                contx.fill();
                contx.closePath();
            }

        }
    }
}
/**
 * detectamos la colicion con los bloques
 * @method romper();
 */

function romper()
{
    for (var i = 0; i < columnas; i++) {
        for (var j = 0; j < filas; j++) {
            var b = objetivos[i][j];
            if (x>b.x && x< b.x+bloque.width && y>b.y && y<b.y+bloque.height){
                DY=-DY;
                b.status =0;
                puntuacion++;
                if (puntuacion == filas*columnas){
                    alert("ganaste pa muy bien sos genio mal.")
                    document.location.reload()
                }
            }
        }
    }
}
/**
 * Se encarga de llamar a las demas funciones (para dibujar bola, barra, cuadro de bloques)
 * @method dibujar
 */
function dibujar() {
    contx.clearRect( 0,0,1200,500);
    barra.dibujar();
    bola.dibujar();
    dibujarobj();
    romper();
    var a=1;
    if (x + dx < bola.radio || x + dx > canva.width - bola.radio) {
        dx = -dx;
    }
    if (y + DY < bola.radio) {
        DY = -DY;
    }else    if (y + DY > canva.height - bola.radio) {
        if (x > barra.pX && x < barra.width + barra.pX) {
            DY = -DY;
        } else if(a===1){
            alert("fracasaste jajajaja");
            document.location.reload();
            a++;
        }
    }
    if (flechaderecha && barra.pX < canva.width - barra.width) {
        barra.pX += 3;
    } else if (flechaizq && barra.pX > 0) {
        barra.pX -= 3;
    }
    x = x + dx;
    y = y + DY;
}
setInterval(dibujar, 7);