// ==========================================================================
// RAFAEL & FRANCISCA — comportamento do site
// ==========================================================================

// Data do casamento — atualizar aqui quando a data/hora exata for confirmada
const DATA_CASAMENTO = new Date("2027-10-30T11:30:00");

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

// ============ Efeito: revelar secções ao fazer scroll ============
const elementosReveal = document.querySelectorAll(
  ".photo-placeholder, .schedule-item, .info-card, .section-title, .section-lead"
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


// ============ Como Chegar: escolher entre a igreja e a quinta ============
// Para mudar moradas ou links, edita este bloco.
const LOCAIS = {
  igreja: {
    titulo: "Mapa da Basílica de Santa Quitéria de Meca",
    morada: "Basílica de Santa Quitéria de Meca, Largo de Santa Quitéria, Meca, 2580",
    mapa: "https://www.google.com/maps?q=Bas%C3%ADlica+de+Santa+Quit%C3%A9ria+de+Meca,+Largo+de+Santa+Quit%C3%A9ria,+Meca,+2580&output=embed",
    abrir: "https://www.google.com/maps/search/?api=1&query=Bas%C3%ADlica+de+Santa+Quit%C3%A9ria+de+Meca",
    extra: null
  },
  quinta: {
    titulo: "Mapa da Quinta da Bichinha, Ventosa, Alenquer",
    morada: "Quinta da Bichinha, Vila Chã, 2580-413 Ventosa, Alenquer",
    mapa: "https://www.google.com/maps?q=Quinta+da+Bichinha,+Vila+Ch%C3%A3,+2580-413+Ventosa,+Alenquer&output=embed",
    abrir: "https://www.google.com/maps/search/?api=1&query=Quinta+da+Bichinha+Vila+Ch%C3%A3+2580-413+Ventosa+Alenquer",
    extra: { texto: "Como chegar (site da Quinta)", url: "https://www.quintadabichinha.pt/localizacao" }
  }
};

const separadores = document.querySelectorAll(".local-tab");
const painelLocal = document.getElementById("painel-local");
const mapaLocal = document.getElementById("mapaLocal");
const moradaLocal = document.getElementById("localMorada");
const linkAbrir = document.getElementById("linkAbrir");
const linkExtra = document.getElementById("linkExtra");

function mostrarLocal(chave, focar){
  const local = LOCAIS[chave];
  if(!local || !mapaLocal) return;

  separadores.forEach(sep => {
    const ativo = sep.dataset.local === chave;
    sep.setAttribute("aria-selected", String(ativo));
    sep.tabIndex = ativo ? 0 : -1;
    if(ativo){
      painelLocal.setAttribute("aria-labelledby", sep.id);
      if(focar) sep.focus();
    }
  });

  if(mapaLocal.src !== local.mapa){ mapaLocal.src = local.mapa; }
  mapaLocal.title = local.titulo;
  moradaLocal.textContent = local.morada;
  linkAbrir.href = local.abrir;

  if(local.extra){
    linkExtra.textContent = local.extra.texto;
    linkExtra.href = local.extra.url;
    linkExtra.hidden = false;
  }else{
    linkExtra.hidden = true;
  }
}

separadores.forEach((sep, i) => {
  sep.addEventListener("click", () => mostrarLocal(sep.dataset.local, false));
  sep.addEventListener("keydown", (e) => {
    if(e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const delta = e.key === "ArrowRight" ? 1 : -1;
    const seguinte = separadores[(i + delta + separadores.length) % separadores.length];
    mostrarLocal(seguinte.dataset.local, true);
  });
});

// Ligações noutras secções (ex.: "Ver no mapa" no programa) escolhem o local certo
document.querySelectorAll("[data-local-link]").forEach(link => {
  link.addEventListener("click", () => mostrarLocal(link.dataset.localLink, false));
});
