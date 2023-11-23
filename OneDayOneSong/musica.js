function sugerirMusica() {
    const moodSelect = document.getElementById('moodSelect');
    const musicaSugerida = document.getElementById('musicaSugerida');

    const selectedMood = moodSelect.value;

    switch (selectedMood) {
        case 'feliz':
            musicaSugerida.textContent = 'Sugestão: "Shake It Off" do álbum 1989';
            break;
        case 'triste':
            musicaSugerida.textContent = 'Sugestão: "Exile" do álbum Folklore';
            break;
        case 'calmo':
            musicaSugerida.textContent = 'Sugestão: "Lavender Haze" do álbum Midnights';
            break;
        case 'irritado':
            musicaSugerida.textContent = 'Sugestão: "Bad Blood" do álbum 1989';
            break;
        case 'apaixonado':
            musicaSugerida.textContent = 'Sugestão: "Treacherous" do álbum Red';
            break;
        case 'nostalgico':
            musicaSugerida.textContent = 'Sugestão: "Long Live" do álbum Speak Now';
            break;
        case 'animado':
            musicaSugerida.textContent = 'Sugestão: "...Ready For It?" do álbum Reputation';
            break;
        case 'cansado':
            musicaSugerida.textContent = 'Sugestão: "tis the damn season" do álbum Evermore';
            break;
        default:
            musicaSugerida.textContent = 'Selecione um humor válido.';
    }
}
