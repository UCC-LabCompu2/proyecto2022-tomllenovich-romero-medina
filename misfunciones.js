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

function fun(){
    var colorp;
    var type=document.getElementsByName("pelota");
    if (type[0].checked){
        colorp=0;
    }else if(type[1].checked){
        colorp=1;
    }else if(type[2].checked){
        colorp=2;
    }
    localStorage.setItem("color",colorp);
}
function cargarlocal(){
let colorp;
colorp=localStorage.getItem("color");

}












