const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')


const lancamento = "3 jul 2026"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segtotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segtotal/60/60/24);
    const finalHoras = Math.floor(segtotal/60/60) % 24;
    const finalMinutos = Math.floor(segtotal/60) % 60;
    const finalSegundos = Math.floor(segtotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)


}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}`: tempo;
}

countDown();

setInterval(countDown, 1000)


