//trabalhar com .json = para poder usar os array em lista = converter
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

//criar um video novo no servidor quando preenxido e clicado
async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
//se o server cair
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

//buscar video = converter
async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

//export constantes para poder usar nesse JS 
export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}