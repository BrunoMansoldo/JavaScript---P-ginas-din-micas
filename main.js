/*function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

*/

function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log(' Elemnto não encontrado ou seletotor não encontrado')
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

//enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; 
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`//templete string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {


        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
