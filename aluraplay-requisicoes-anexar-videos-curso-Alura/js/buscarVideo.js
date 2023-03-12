//import os arquivos = e uso o async e await
import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

//configurar array :
async function buscarVideo(evento) {
    evento.preventDefault(); //preventDefault inpede que o eveno padrão ocorra
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    //busca video por alguma dessas classificações :
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    //mensagem quando pesquisa e n tem nd
    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`
    }
}

//função quando clicar bsucar video
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))