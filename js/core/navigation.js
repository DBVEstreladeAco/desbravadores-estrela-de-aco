/* ==========================================================================
   navigation.js — controla o menu mobile (hambúrguer) do header
   Local no projeto: js/core/navigation.js
   ========================================================================== */

(function () {
  const toggle = document.querySelector(".site-header__toggle");
  const menu = document.querySelector(".site-header__menu");

  if (!toggle || !menu) return;

  function abrirMenu() {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  function fecharMenu() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function alternarMenu() {
    const aberto = toggle.getAttribute("aria-expanded") === "true";
    aberto ? fecharMenu() : abrirMenu();
  }

  toggle.addEventListener("click", alternarMenu);

  // Fecha o menu ao clicar em um link (útil no mobile, onde o menu ocupa a tela)
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
  });

  // Fecha o menu ao pressionar Esc
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") fecharMenu();
  });

  // Se a tela for redimensionada para o layout desktop, garante estado limpo
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 860) fecharMenu();
  });
})();
