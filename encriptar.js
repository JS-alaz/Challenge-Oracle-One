function encriptarTexto() {
    var encriptado = []
    //if(!soloLetras(Event)){

        for (var i = 0; i < textoAencriptar.value.length; i++) {

        if (textoAencriptar.value[i] === 'a') {
            encriptado.push('ai')
        }else if (textoAencriptar.value[i] === 'e') {
            encriptado.push('enter')
        }else if (textoAencriptar.value[i] === 'i') {
            encriptado.push('imes')
        }else if (textoAencriptar.value[i] === 'o') {
            encriptado.push('ober')
        }else if (textoAencriptar.value[i] === 'u') {
            encriptado.push('ufat')
        }
        
        else{
            encriptado.push(textoAencriptar.value[i])
        }
    
    }
    //}//fin si
    //pasar array a string ???
    return encriptado.join('')
    
}

