// ==========================================================================
// RAFAEL & FRANCISCA — comportamento do site
// ==========================================================================

// Data do casamento — atualizar aqui quando a data/hora exata for confirmada
const DATA_CASAMENTO = new Date("2027-10-24T15:30:00");

function atualizarContador(){
  const agora = new Date();
  const diff = DATA_CASAMENTO - agora;

  const elDias = document.getElementById("cd-dias");
  const elHoras = document.getElementById("cd-horas");
  const elMin = document.getElementById("cd-min");
  const elSeg = document.getElementById("cd-seg");

  if(!elDias) return;

  if(diff <= 0){
    elDias.textContent = "0";
    elHoras.textContent = "00";
    elMin.textContent = "00";
    elSeg.textContent = "00";
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const seg = Math.floor((diff / 1000) % 60);

  elDias.textContent = String(dias);
  elHoras.textContent = String(horas).padStart(2, "0");
  elMin.textContent = String(min).padStart(2, "0");
  elSeg.textContent = String(seg).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);

// Menu mobile
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if(navToggle && navLinks){
  navToggle.addEventListener("click", () => {
    const aberto = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(aberto));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// RSVP — envia os dados para a Google Sheet através do Google Apps Script.
// PASSO OBRIGATÓRIO: cola aqui o URL que o Google te deu depois do Deploy
// (ver google-apps-script/Codigo.gs e o README para o passo a passo completo).
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyTQ0berbmJik7KX9XulC4ehrCuTWS4y06V9VkgH1p2pV7MeU6CbMCZIS1xF-SqVsCdAQ/exec";

const rsvpForm = document.getElementById("rsvpForm");
const rsvpSuccess = document.getElementById("rsvpSuccess");

if(rsvpForm){
  rsvpForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if(GOOGLE_SCRIPT_URL.includes("COLA_AQUI")){
      alert("O formulário ainda não está ligado à Google Sheet. Substitui GOOGLE_SCRIPT_URL em js/script.js pelo URL do teu Apps Script — passo a passo no README.");
      return;
    }

    const presenca = document.getElementById("presenca").value;
    const dados = {
      nome: document.getElementById("nome").value,
      presenca: presenca,
      acompanhantes: document.getElementById("acompanhantes").value,
      restricoes: document.getElementById("restricoes").value
    };

    const botao = rsvpForm.querySelector(".btn-submit");
    const textoOriginal = botao.textContent;
    botao.disabled = true;
    botao.textContent = "A enviar...";

    try{
      // "no-cors" porque o Apps Script não devolve cabeçalhos CORS para fetch;
      // não conseguimos ler a resposta, mas o envio funciona na mesma.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(dados)
      });

      if(presenca === "sim"){ lancarConfetti(); }

      rsvpForm.hidden = true;
      if(rsvpSuccess) rsvpSuccess.hidden = false;
    }catch(erro){
      alert("Não foi possível enviar a confirmação. Verifica a tua ligação e tenta novamente.");
    }finally{
      botao.disabled = false;
      botao.textContent = textoOriginal;
    }
  });
}

// ============ Efeito: revelar secções ao fazer scroll ============
const elementosReveal = document.querySelectorAll(
  ".timeline-item, .photo-placeholder, .schedule-item, .info-card, .section-title, .section-lead"
);
elementosReveal.forEach(el => el.classList.add("reveal"));

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if(entrada.isIntersecting){
      entrada.target.classList.add("is-visible");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

elementosReveal.forEach(el => observador.observe(el));

// ============ Efeito: confetti divertido (usado no RSVP) ============
function lancarConfetti(){
  const cores = ["#4F242D", "#54647B", "#757C2C", "#BDDDF6"];
  const quantidade = 60;

  for(let i = 0; i < quantidade; i++){
    const peca = document.createElement("div");
    peca.className = "confetti-piece";
    peca.style.left = Math.random() * 100 + "vw";
    peca.style.width = 6 + Math.random() * 6 + "px";
    peca.style.height = 10 + Math.random() * 6 + "px";
    peca.style.background = cores[Math.floor(Math.random() * cores.length)];
    peca.style.animationDuration = 2.2 + Math.random() * 1.6 + "s";
    peca.style.opacity = String(0.7 + Math.random() * 0.3);
    document.body.appendChild(peca);
    setTimeout(() => peca.remove(), 4000);
  }
}
