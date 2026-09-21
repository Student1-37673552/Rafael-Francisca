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

