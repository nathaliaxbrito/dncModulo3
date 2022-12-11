var lamp =  window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar(){
    if(!estaQuebrada()){
    lamp.src = 'acesa.svg'}
}

function desligar(){
    if(!estaQuebrada()){
    lamp.src = 'apagada.svg'}
}

lamp.addEventListener('click', quebrar)
function quebrar(){
    lamp.src = 'quebrada.svg'
}