
function desencriptar() {
    //var textAdesencriptar = new Array()
    textAdesencriptar = [...textoAencriptar.value]
    var a = ['a','i']
    var e = ['e','n','t','e','r']
    var letrai = ['i','m','e','s']
    var o = ['o','b','e','r']
    var u = ['u','f','a','t']
    var t = []
    for(var i=0; i<textAdesencriptar.length; i++){
        //console.log(textAdesencriptar[i])
        
        switch (textAdesencriptar[i]){
            case 'a'://ai
                if(textAdesencriptar[i] == a[0] && textAdesencriptar[i+1] == a[1]){//como esto se repite se puede enviar el array de la letra
                    textAdesencriptar.splice(i+1, 1)                                //trabajar con el length del array letra??
                    //console.log('si entre a este case')
                }
                break;
                
            case 'e'://enter
                if(textAdesencriptar[i] == e[0] && textAdesencriptar[i+1] == e[1] && textAdesencriptar[i+2] == e[2] &&
                    textAdesencriptar[i+3] == e[3] && textAdesencriptar[i+4] == e[4]){
                        textAdesencriptar.splice(i+1, 4)
                }
                break;

            case 'i'://imes
                if(textAdesencriptar[i] == letrai[0] && textAdesencriptar[i+1] == letrai[1] && textAdesencriptar[i+2] == letrai[2] &&
                    textAdesencriptar[i+3] == letrai[3]){
                        textAdesencriptar.splice(i+1, 3)
                }
                break;

            case 'o'://ober
                if(textAdesencriptar[i] == o[0] && textAdesencriptar[i+1] == o[1] && textAdesencriptar[i+2] == o[2] &&
                    textAdesencriptar[i+3] == o[3]){
                    textAdesencriptar.splice(i+1, 3)
                }
                break;

            case 'u'://ufat
                if(textAdesencriptar[i] == u[0] && textAdesencriptar[i+1] == u[1] && textAdesencriptar[i+2] == u[2] &&
                    textAdesencriptar[i+3] == u[3]){
                        textAdesencriptar.splice(i+1, 3)
                }
                break;

            default:
                //console.log('nones')
                break;
        }//end switch
        
    }//fin for
    //pasar una cadena a array
    //var cadena = 'casa linda'
    //var cadenaArray = [...cadena].splice(',')
    //***************************************

    return textAdesencriptar.join('')

    //document.write(x.join(''))
}
