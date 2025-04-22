document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }
});

//JS do PopUp da carta

document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById("popupCarta");
  const btnAbrirPopup = document.getElementById("btnAbrirPopup");
  const btnFechar = document.getElementById("btnFechar");
  const textoCarta = document.getElementById("textoCarta");

  if (!popup || !btnAbrirPopup || !btnFechar || !textoCarta) {
      console.error("Erro: Elementos do pop-up não foram encontrados!");
      return;
  }

  const mensagem = "Ê Bixa, \nQueria te presentear nesse teu 17° aniversário com algo especial, algo que eu realmente precisasse me dedicar. Então decidi por trazer  uma coisa que eu sei fazer, com meus conhecimentos e desconhecimentos. \n Foram 5 dias estudando e armando essa ideia mirabolante para que no fim, obviamente, você tenha uma memória do carinho que eu tenho por ti. Então espero que você aproveite esse sistema bem probrinho feito na correria. E feliz aniversário né"; 

  function revelarTexto(index) {
      if (index < mensagem.length) {
          textoCarta.innerHTML += mensagem.charAt(index);
          setTimeout(() => revelarTexto(index + 1), 45); 
      }
  }

  btnAbrirPopup.addEventListener("click", function () {
      popup.style.display = "block"; 

      setTimeout(() => {
          textoCarta.innerHTML = ""; 
          revelarTexto(0);
      }, 500); 
  });

  btnFechar.addEventListener("click", function () {
      popup.style.display = "none";
      textoCarta.innerHTML = "";
  });
});

//JS do Mixtape

document.addEventListener('DOMContentLoaded', function () {
  const btnMixtape = document.getElementById("btnMixtape");
  const mixtapeArea = document.getElementById("mixtapeArea");
  const btnFecharMixtape = document.getElementById("btnFecharMixtape");
  const btnAnterior = document.getElementById("btnAnterior");
  const btnProxima = document.getElementById("btnProxima");
  const dedicatoriaMusica = document.getElementById("dedicatoriaMusica");
  const spotifyPlayer = document.getElementById("spotifyPlayer");

  const musicas = [
    //musicas pra colocar: Modinha para Gabriela; Eu Vou; Rua da Consolação, Maria Maria; Ninguém Me Ensinou; Algum Ritmo; Girassol; Tempo Não Para; Flor de Tangerina
    {
          spotifyEmbed: "https://open.spotify.com/embed/track/389l04Z0DCri5X4jh6C7Oa?utm_source=generator&theme=0",
          dedicacao: "Essa pode ser meio obvia né, mas quando a gente analiza a letra, é totalmente feita pra ti  'eu nasci assim, eu cresci assim,vou ser sempre assim, Gabriella, sempre Gabriella'. Principalmente pela sua personalidade forte de não ir como uma Maria vai com as outras e sim de ser uma Gabriela 'pouco me importou, é assim que eu sou'."
      },
      {
        spotifyEmbed: "https://open.spotify.com/embed/track/5nvWrddTPpTG8yl8htw7ue?utm_source=generator&theme=0",
        dedicacao: "Essa eu não sei o porquê me vem você, as vezes é pq a gente é pobre proletariado YEEEEAH, Sambinha/MPB delicia cara."
    },
      {

          spotifyEmbed: "https://open.spotify.com/embed/track/47IUIfhXXyhaILLcAE7LbL?utm_source=generator&theme=0",
          dedicacao: "Essa novamente vai pela passagem que me lembra seu jeito de viver a vida e ir na onda dela. Ai sla amo esa banda mds"
      },
      {
        spotifyEmbed: "https://open.spotify.com/embed/track/1nl13AcSpiCKdbkhtvJoo7?utm_source=generator&theme=0",
        dedicacao: "Maria Maria, melhor na voz da Elis porém como quem você mais escuta é o Milton... Dnv, muito você sabe, uma mulher que merece viver e amar como outra qualquer do planeta, mas é preciso ter força, ter raça e etc..."
    },
    {
          spotifyEmbed: "https://open.spotify.com/embed/track/2CnjdM7i26Y1kvN3lyuDOl?utm_source=generator&theme=0",
          dedicacao: "Ninguém me ensinou a ter que procurar um significado pra uma canção, simplesmente eu gosto dela e sei que vc gosta tbm pq ta lá nas ouvidas tua lá <3 "
      },
      {
        spotifyEmbed: "https://open.spotify.com/embed/track/5EVv8M3vhByFLLqT1dkdGd?utm_source=generator&theme=0",
        dedicacao: "'Algum ritmo em comum, fez-nos encontrar... fez-nos conversar', acho que isso resume o como viramos amigas né? Por mais que eu não saiba muito de você, já que você querendo ou não é uma pessoa culta, tivemos um ritmo em comum que nos conectou, mesmo que as ondas não sejam do mar, a gente tá aqui 🤙🏻 "
    }, 
      {
          spotifyEmbed: "https://open.spotify.com/embed/track/5BLShRvEy6OQNXzkawWLvj?utm_source=generator&theme=0",
          dedicacao: "Não acho que a letra dela tenha muito haver sobre o vc pra mim, masss, acho que Girassois são amarelos alaranjados, e você é uma pessoa muito amarela alaranjada pra mim, quando eu lembro de vc essa é a cor que eu vejo, e por coincidência, girassol é a flor que eu idealizo tbm. "
      },
      {
        spotifyEmbed: "https://open.spotify.com/embed/track/10C3nAydzBvNfaY86NwUuA?utm_source=generator&theme=0",
        dedicacao: "O primeiro cantor que fui procurar pra fazer isso foi Cazuza, e a primeira musica que imaginei foi O Tempo Não Para. Já está idealizado para mim ela como uma referencia de vc, principalmente quando você falou numa conversa com a Giulia que tinha usado na sua redação, se foi ela ou não to nem ai tbm pq que eu me lembre ou que eu inventei era ela e vc gosta de cazuza e por consequencia gosta dessa musica pq era praticamente a unica lá e então voce ama ela e é isso"
    }, 
      {
      spotifyEmbed: "https://open.spotify.com/embed/track/4ZsyrBZX0YMopDJjGpva5j?utm_source=generator&theme=0",
      dedicacao: "Por  último, nem sei se vc chegou até aqui. Alceu Valença, um classico Brasileiro, outra flor amarela alaranjada. Eu gostando e vc gostando é + com + dá +."
      },
      
  ];

  let indexAtual = 0;

  function atualizarMixtape(index) {
      const musica = musicas[index];
      dedicatoriaMusica.innerText = musica.dedicacao;
      spotifyPlayer.style.display = "block"
      spotifyPlayer.src = musica.spotifyEmbed; 
  }

  btnMixtape.addEventListener("click", function () {
      mixtapeArea.style.display = "block";
      atualizarMixtape(indexAtual);
  });

  btnProxima.addEventListener("click", function () {
      indexAtual = (indexAtual + 1) % musicas.length;
      atualizarMixtape(indexAtual);
  });

  btnAnterior.addEventListener("click", function () {
      indexAtual = (indexAtual - 1 + musicas.length) % musicas.length;
      atualizarMixtape(indexAtual);
  });

  btnFecharMixtape.addEventListener("click", function () {
      mixtapeArea.style.display = "none";
  });
});

//JS do jogo da cobrinha 

const btnSurpresa = document.getElementById('btnSurpresa');
const divJogo = document.getElementById('jogoSurpresa');
const canvas = document.getElementById('canvasJogo');
const ctx = canvas.getContext('2d');

let jogo;
let jogoAtivo = false;

btnSurpresa.addEventListener('click', () => {
  if (!jogoAtivo) {
    iniciarJogo();
    divJogo.style.display = 'block';
    btnSurpresa.textContent = 'Fechar Surpresa';
    jogoAtivo = true;
  } else {
    fecharJogo();
  }
});

function fecharJogo() {
  clearInterval(jogo);
  divJogo.style.display = 'none';
  btnSurpresa.textContent = 'Abrir Surpresa';
  jogoAtivo = false;
}

let tamanho = 20;
let cobra = [{ x: 120, y: 120 }];
let direcao = 'direita';
let bolo = gerarBolo();
let pontuacao = 0;

function iniciarJogo() {
  cobra = [{ x: 120, y: 120 }];
  direcao = 'direita';
  bolo = gerarBolo();
  pontuacao = 0;
  clearInterval(jogo);
  jogo = setInterval(atualizar, 150);
}

function gerarBolo() {
  return {
    x: Math.floor(Math.random() * (canvas.width / tamanho)) * tamanho,
    y: Math.floor(Math.random() * (canvas.height / tamanho)) * tamanho
  };
}

function desenhar() {
  ctx.fillStyle = '#3a3333'; // fundo preto
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // corpo da cobrinha (verde oliva)
  ctx.fillStyle = '#3d5a40';
  cobra.forEach(p => ctx.fillRect(p.x, p.y, tamanho, tamanho));

  // bolo (laranja queimado)
  ctx.fillStyle = '#ffc1c1';
  ctx.fillRect(bolo.x, bolo.y, tamanho, tamanho);
}

function atualizar() {
  const cabeca = { ...cobra[0] };
  if (direcao === 'direita') cabeca.x += tamanho;
  if (direcao === 'esquerda') cabeca.x -= tamanho;
  if (direcao === 'cima') cabeca.y -= tamanho;
  if (direcao === 'baixo') cabeca.y += tamanho;

  cobra.unshift(cabeca);

  if (cabeca.x === bolo.x && cabeca.y === bolo.y) {
    bolo = gerarBolo();
    pontuacao++;
  } else {
    cobra.pop();
  }

  if (
    cabeca.x < 0 || cabeca.x >= canvas.width ||
    cabeca.y < 0 || cabeca.y >= canvas.height
  ) {
    alert(`Fim de jogo! Pontuação: ${pontuacao}`);
    fecharJogo();
  }

  desenhar();
}

// JS pra se ela quiser jogar pelo teclado do pc
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' && direcao !== 'baixo') direcao = 'cima';
  if (e.key === 'ArrowDown' && direcao !== 'cima') direcao = 'baixo';
  if (e.key === 'ArrowLeft' && direcao !== 'direita') direcao = 'esquerda';
  if (e.key === 'ArrowRight' && direcao !== 'esquerda') direcao = 'direita';
});

// touch mobile
function mudarDirecao(nova) {
  if (nova === 'cima' && direcao !== 'baixo') direcao = 'cima';
  if (nova === 'baixo' && direcao !== 'cima') direcao = 'baixo';
  if (nova === 'esquerda' && direcao !== 'direita') direcao = 'esquerda';
  if (nova === 'direita' && direcao !== 'esquerda') direcao = 'direita';
}


//JS dos Créditos

document.addEventListener('DOMContentLoaded', function () {
    const btnCreditos = document.getElementById("btnCreditos");
    const telaCreditos = document.getElementById("telaCreditos");

    btnCreditos.addEventListener("click", function () {
        telaCreditos.style.display = "flex"; 

        setTimeout(() => {
            telaCreditos.style.display = "none"; 
        }, 25000); 
    });

    telaCreditos.addEventListener("click", function () {
        telaCreditos.style.display = "none"; 
    });
});