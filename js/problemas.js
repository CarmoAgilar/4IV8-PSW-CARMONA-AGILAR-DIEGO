function validarentrada(palabra){
    var longitud = palabra.length;
    for(var i=0;i<longitud;i++){
        if((i==0&&palabra.charCodeAt(i)==32)||(i==longitud-1&&palabra.charCodeAt(i)==32)||(palabra.charCodeAt(i)==32&&palabra.charCodeAt(i-1)==32)){
            if(i==0){
                alert("No debe de haber espacios al inicio de la entrada");
            }
            else{
                if(i==longitud-1){
                    alert("No debe de haber espacios al final de la cadena");
                }
                else{
                    alert("No debe de haber más de un espacio entre palabras");
                }
            }
            return false;
        }
    }
    return true;
}
function problema3(){
    var p3_input = document.querySelector('#p3-input').value;
    var longitud;
    var maximo = 0;
    var aux;
    var cubeta = [27];
    var p3_array;
    var respuesta;
    var aux2=0;
    var aux_array;
    var bandera;
    if(validarentrada(p3_input)){
        p3_array = p3_input.split(',');
        p3_array.forEach(function (palabra){
            for(var j=0;j<26;j++){
                cubeta[j] = false;
            }
            aux = 0;
            longitud = palabra.length;
            for(var j=0;j<longitud;j++){
                if(!cubeta[palabra.charCodeAt(j)-65]){
                    aux++;
                    cubeta[palabra.charCodeAt(j)-65] = true;
                }
            }
            if(aux>maximo){
                respuesta = palabra;
                maximo = aux;
                aux2 = 1;
            }
            else{
                bandera = true;
                aux_array = respuesta.split(',');
                //Esto nos va a ayudar a que no se repitan palabras que pueden ser la posible respuesta
                aux_array.forEach(function(palabra_aux){
                    if(palabra_aux==palabra){
                        bandera = false;
                    }
                })
                if(bandera == true){
                    if(aux==maximo){
                        aux2++;
                        if(aux2==2){
                            respuesta+=" y ";
                            respuesta+=palabra;
                        }
                        else{
                            respuesta = palabra + " , " + respuesta;
                        }
                    }
                }
            }
        });
        document.querySelector('#p3-output').textContent = 'La respuesta es: ' + respuesta;
    }
    else{
        document.querySelector('#p3-input').value = "";
        document.querySelector('#p3-output').textContent = 'Esperando respuesta ...';
    }

}