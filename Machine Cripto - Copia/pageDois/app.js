/*

document.querySelector(".form").addEventListener("submit", async function (e) {
  e.preventDefault(); // Evita o envio tradicional do formulário

  // Coletando os dados do formulário
  const nome = document.getElementById("Name").value;
  const telefone = document.getElementById("phone").value;
  const cep = document.getElementById("cep").value;
  const renda = document.getElementById("renda").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const cripto =
    document.querySelector('input[name="cripto"]:checked')?.value || "nao"; // 'sim' ou 'nao'
  const criptoInvestimento =
    document.getElementById("criptoInvestimento").value;

  // Verificando se as senhas coincidem
  if (password !== confirmPassword) {
    alert("As senhas não coincidem");
    return;
  }

  // Montando o objeto com os dados
  const dados = {
    nome,
    telefone,
    cep,
    renda,
    email,
    password,
    cripto,
    criptoInvestimento,
  };

  try {
    // Enviando os dados para o back-end
    const resposta = await fetch("http://localhost:5000/api/usuarios", {
      method: "POST", // Enviando dados via POST
      headers: {
        "Content-Type": "application/json", // Definindo o tipo de conteúdo como JSON
      },
      body: JSON.stringify(dados), // Enviando os dados como JSON
    });

    const resultado = await resposta.json(); // Convertendo a resposta para JSON
    if (resposta.ok) {
      alert("Dados enviados com sucesso!");
    } else {
      alert("Erro ao enviar os dados: " + resultado.message);
    }
  } catch (erro) {
    alert("Erro de comunicação com o servidor: " + erro.message);
  }
});

function gerarSenhaForte(tamanho = 12) {
  // Definindo os caracteres possíveis
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const especiais = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

  // Garantindo pelo menos 1 caractere de cada tipo
  const senha = [
    maiusculas[Math.floor(Math.random() * maiusculas.length)], // 1 maiúscula
    minusculas[Math.floor(Math.random() * minusculas.length)], // 1 minúscula
    numeros[Math.floor(Math.random() * numeros.length)], // 1 número
    especiais[Math.floor(Math.random() * especiais.length)], // 1 caractere especial
  ];

  // Preenchendo o restante da senha com caracteres aleatórios
  const caracteres = maiusculas + minusculas + numeros + especiais;
  for (let i = senha.length; i < tamanho; i++) {
    senha.push(caracteres[Math.floor(Math.random() * caracteres.length)]);
  }

  // Embaralhando os caracteres da senha
  for (let i = senha.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [senha[i], senha[j]] = [senha[j], senha[i]]; // Troca de lugar entre os caracteres
  }

  // Convertendo o array de caracteres para string
  return senha.join("");
}

// Exemplo de uso:
const senhaForte = gerarSenhaForte(12);
console.log(senhaForte);

function processarFormulario() {
  const nomeUsuario = document.getElementById("Name").value; // Pega o nome inserido
  const senhaGerada = gerarSenhaForte(12); // Gera uma senha forte
  alert(
    `Solicitação Efetuada, ${nomeUsuario}! Sua senha gerada é: ${senhaGerada}`
  );
}
document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = document.querySelector("#carouselExampleAutoplaying");
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 4000, // 2 segundos de visibilidade + 2 segundos de transição
    ride: "carousel",
  });

  // Personalizar a lógica de transição para garantir que as imagens fiquem visíveis por 2 segundos
  myCarousel.addEventListener("slide.bs.carousel", function (event) {
    const activeItem = document.querySelector(".carousel-item.active");

    // Define que a imagem ficará visível por 2 segundos
    setTimeout(function () {
      activeItem.classList.remove("active");
      activeItem.classList.add("carousel-item-next"); // Começa a mover para a próxima posição
    }, 2000); // 2 segundos de visibilidade total antes de deslizar para a próxima
  });
});

*/
// Função para verificar a visibilidade das imagens com a classe .foto1
// Função para verificar a visibilidade das imagens com a classe .foto1
// Função para verificar se a imagem está visível
// Função para verificar se a imagem está visível
// Função para verificar se a imagem está visível
function checkVisibility() {
  const imagens = document.querySelectorAll(
    ".imagem12, .imagem122, .titulos, .contain, .paginaa, .texto-overlay"
  ); // Seleciona todas as imagens com a classe 'imagem12'

  imagens.forEach((imagem) => {
    const rect = imagem.getBoundingClientRect(); // Obtém a posição da imagem na tela
    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight; // Altura da janela de visualização

    // Verifica se a imagem está visível em pelo menos 80% da altura da janela
    if (rect.top <= viewHeight * 0.8 && rect.bottom >= 0) {
      imagem.classList.add("visible"); // Adiciona a classe 'visible' para animar a imagem
    } else {
      imagem.classList.remove("visible"); // Remove a classe 'visible' quando a imagem sai da área visível
    }
  });
}

// Adiciona eventos para verificar a visibilidade ao rolar a página e ao carregar a página
window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);

// Verifica a visibilidade das imagens imediatamente após o carregamento
checkVisibility();
