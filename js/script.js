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

// RSVP — por agora só impede o envio real e mostra confirmação visual.
// Próximo passo: ligar a um destino real (ex. Formspree, Netlify Forms, Google Sheets).
const rsvpForm = document.getElementById("rsvpForm");
if(rsvpForm){
  rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulário ainda não está ligado a um destino de envio. Isto é só o esboço — vamos configurar isto no próximo passo.");
  });
}
