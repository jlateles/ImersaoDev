document.addEventListener('DOMContentLoaded', function () {
    // Dados fictícios da tabela
    const dadosTabela = [
        { posicao: 1, time: 'Palmeiras', pontos: 62 },
        { posicao: 2, time: 'Botafogo', pontos: 60 },
        { posicao: 3, time: 'Grêmio', pontos: 59 },
        { posicao: 4, time: 'Bragantino', pontos: 59 },
        { posicao: 5, time: 'Atlético-MG', pontos: 57 },
        { posicao: 6, time: 'Flamengo', pontos: 57 },
        { posicao: 7, time: 'Athletico-PR', pontos: 51 },
        { posicao: 8, time: 'Fluminense', pontos: 58 },
        { posicao: 9, time: 'Cuiabá', pontos: 47 },
        { posicao: 9, time: 'São Paulo', pontos: 47 }
    ];

    // Seleção do elemento da tabela no HTML
    const tabelaElement = document.getElementById('classificacao');
    const tbodyElement = tabelaElement.querySelector('tbody');

    // Adição dos dados da tabela ao HTML
    dadosTabela.forEach(time => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${time.posicao}</td>
            <td>${time.time}</td>
            <td>${time.pontos}</td>
        `;
        tbodyElement.appendChild(row);
    });
});
