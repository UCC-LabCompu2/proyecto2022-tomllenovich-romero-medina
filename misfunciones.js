/**
 * Verifica que el nombre no sea ni espacios vacios,ni contenga numeros,y que hayan ingresado algo
 * tambien verifica que se haya seleccionado una pelota y si esto es correcto nos lleva al juego
 * @method iniciojuego()
 */
function iniciojuego(){
    var s="no";
    let text = document.getElementById("Nombre").value;
        if(/\d/.test(text) ||text===null || text==="" ){
        alert('el nombre que ingreso es invalido solo debe contener letras.')
        }
        else{
            for (var i=0;i<document.form1.pelota.length;i++){
                if(document.querySelector('input[name="pelota"]:checked')){
                    window.open("index_juego.html");
                    s="si"
                }else{if(s==="no")
                    alert("elija una pelota")
                    s=mu;
                }
            }
        }
    }
/**
 * Verifica que el nombre no sea ni espacios vacios,ni contenga numeros,y que hayan ingresado algo
 * tambien verifica que se haya seleccionado una pelota y si esto es correcto nos lleva al juego
 * @method iniciojuego()
 */
function animar(){
    setInterval("dibujar()",20);
    setInterval("dibupis()",100);
}
var posx=30;
/**
 * Verifica que el nombre no sea ni espacios vacios,ni contenga numeros,y que hayan ingresado algo
 * tambien verifica que se haya seleccionado una pelota y si esto es correcto nos lleva al juego
 * @method iniciojuego()
 */
function dibujar(){
    let contexto = document.getElementById("canvajuego").getContext("2d");
    contexto.clearRect(0,0,1250,1500);
    contexto.beginPath();
    contexto.fillStyle="red";
    contexto.arc(posx,100,30,0,2*Math.PI)
    contexto.fill();
    contexto.closePath();
    if(posx+30<1250){
        posx=posx+10;
    }else{
        posx=0;
    }
}
var posy=430;
/**
 * Verifica que el nombre no sea ni espacios vacios,ni contenga numeros,y que hayan ingresado algo
 * tambien verifica que se haya seleccionado una pelota y si esto es correcto nos lleva al juego
 * @method iniciojuego()
 */
    function dibupis(){
        var canvas=document.getElementById("canvajuego").getContext("2d");
        var img = new Image();

        canvas.clearRect(0,0,1250,1500);

        img.src="fotosproyecto/pisof.png";
        img.onload = function (){
            canvas.drawImage(img,0,posy,1200,40);

        }
        if(posy<0){
            posy=300;
        }else{
            posy-=10;
        }

    }





