/* let catalogo = "filmes"

var listaFilmes = [ "https://br.web.img2.acsta.net/r_1280_720/pictures/23/09/20/15/54/3311902.jpg", "https://maniacosporfilme.files.wordpress.com/2023/08/image-47.png", 

"https://br.web.img3.acsta.net/pictures/23/08/10/00/47/0758512.png", "https://de.web.img2.acsta.net/pictures/23/06/19/14/02/2035833.jpg",
 "https://br.web.img2.acsta.net/pictures/23/06/06/10/46/1023942.jpg"]

var linkTrailer = [ "https://www.youtube.com/watch?v=Zdxr-u4q6yg", "https://www.youtube.com/watch?v=oPCHF6Qx63A", 
"https://www.youtube.com/watch?v=lvZ9Rz3_pWg", "https://www.youtube.com/watch?v=0cSX0-XKD9o", "https://www.youtube.com/watch?v=vH5NAahf76s&t=4s"]

var nomeFilmes = [ "Jogos Vorazes", "O Pacto ", "Besouro Azul", "Talk to me", "Bottoms"]
 
for(var i = 0; i < listaFilmes.length; i++) {
  document.write("<a href=" + linkTrailer[i] + "target='_blank'><div class="+ catalogo +"><img src=" + listaFilmes[i]+"/></br><span>"+ nomeFilmes[i] + "</span></div></a>")
} */

document.addEventListener('DOMContentLoaded', function () {
    // Lista de filmes com nome, cartaz e link do trailer
    const filmes = [
        { nome: 'Talk to me', cartaz: 'https://de.web.img2.acsta.net/pictures/23/06/19/14/02/2035833.jpg', trailer: 'https://www.youtube.com/watch?v=0cSX0-XKD9o' },
        { nome: 'Bottoms', cartaz: 'https://br.web.img2.acsta.net/pictures/23/06/06/10/46/1023942.jpg', trailer: 'https://www.youtube.com/watch?v=vH5NAahf76s&t=4s' },
        // Adicione mais filmes conforme necessário
        { nome: 'Past Lives', cartaz: 'https://upload.wikimedia.org/wikipedia/en/d/da/Past_Lives_film_poster.png', trailer: 'https://www.youtube.com/watch?v=pK73iGzO6jE' },
        { nome: 'All of Us Strangers ', cartaz: 'https://m.media-amazon.com/images/M/MV5BZmYzMjMzN2EtMGYwNi00ODc3LWI3YTctMjA5YjI1MGFkYTlhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg', trailer: 'https://www.youtube.com/watch?v=WGAwcHs00J4' },
        { nome: 'Jogos Vorazes', cartaz: 'https://iguatemi.com.br/jkiguatemi/sites/jkiguatemi/files/177644c1-0445-45ae-b931-cbd82bc58140.webp', trailer: 'https://www.youtube.com/watch?v=Zdxr-u4q6yg'}
    ];

    // Elemento do cartaz
    const cartazesElement = document.getElementById('cartazes');

    // Adiciona cada filme ao HTML
    filmes.forEach(filme => {
        const filmeDiv = document.createElement('div');
        filmeDiv.classList.add('filme-item');

        // Adiciona um link para o trailer ao clicar no cartaz
        const linkTrailer = document.createElement('a');
        linkTrailer.href = filme.trailer;
        linkTrailer.target = '_blank';

        // Adiciona a imagem do cartaz
        const imagemCartaz = document.createElement('img');
        imagemCartaz.src = filme.cartaz;
        imagemCartaz.alt = `${filme.nome} - Cartaz`;

        // Adiciona a imagem do cartaz ao link do trailer
        linkTrailer.appendChild(imagemCartaz);

        // Adiciona o link do trailer à div do filme
        filmeDiv.appendChild(linkTrailer);

        // Adiciona a div do filme ao contêiner de cartazes
        cartazesElement.appendChild(filmeDiv);
    });
});

