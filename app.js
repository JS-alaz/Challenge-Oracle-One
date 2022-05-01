var btnEncriptar = document.querySelector('.btn')
var btnCopiar = document.querySelector('.btn-copiar')//recordar el bendito . de las clases!!!
var btnDesencriptar = document.querySelector('#btnDesencriptar')
var textoAencriptar = document.querySelector('.input-text-in')
var muestraTextoEncriptado = document.querySelector('.res')

var tag = ['.figure', '.not-found', '.next-to-notfound']
function displayNone() {
    for (let i = 0; i < tag.length; i++) {
        document.querySelector(tag[i]).style = 'display:none;'  
    }
}

btnEncriptar.addEventListener('click', function(e) {
    e.preventDefault()
    
    displayNone()//oculta el contendio de inicio en donde se muestra el texto encriptado

    btnCopiar.className = 'btn-copiar'//hace visible el boton copiar
    btnCopiar.style = 'display:block;'
 
    var TextoEncriptado = encriptarTexto()//encripta
    muestraTextoEncriptado.textContent = TextoEncriptado

})

btnDesencriptar.addEventListener('click', function (e) {
    btnCopiar.className = 'btn-copiar'//hace visible el boton copiar
    btnCopiar.style = 'display:block;'

    var textoDesencriptado = desencriptar()
    displayNone()
    muestraTextoEncriptado.textContent = textoDesencriptado
})//desencripta

btnCopiar.addEventListener('click', function(){
    muestraTextoEncriptado

    var seleccion = document.createRange();
    seleccion.selectNodeContents(muestraTextoEncriptado);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');

    //alert('texto copiado', seleccion)
})

