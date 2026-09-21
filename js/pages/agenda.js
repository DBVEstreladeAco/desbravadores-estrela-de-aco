/* ==========================================================================
   agenda.js — lógica da página Agenda
   Local no projeto: js/pages/agenda.js

   Depende de (carregados antes deste script em pages/agenda.html):
   integrations/calendar/calendar-config.js
   integrations/calendar/providers/public-calendar.js
   integrations/calendar/calendar-service.js

   Enquanto CalendarConfig.enabled for false, esta página mostra um estado
   de "agenda em breve" — nunca eventos fictícios.
   ========================================================================== */

(function () {
  document.addEventListener("DOMContentLoaded", inicializarAgenda);

  async function inicializarAgenda() {
    const elementos = {
      destaqueConteudo: document.querySelector(".agenda-destaque__conteudo"),
      grid: document.getElementById("lista-agenda"),
      status: document.getElementById("agenda-status"),
      filtros: document.querySelectorAll(".agenda-filtros__item"),
    };

    if (!elementos.grid || !elementos.status) return;

    try {
      const { eventos, ativo } = await window.CalendarService.obterProximosEventos();

      if (!ativo) {
        mostrarAgendaEmBreve(elementos);
        return;
      }

      if (!eventos.length) {
        mostrarAgendaVazia(elementos);
        return;
      }

      renderizarAgenda(elementos, eventos);
    } catch (erro) {
      console.error("Falha ao carregar a agenda:", erro);
      mostrarErro(elementos);
    }
  }

  /* ---- Estados sem dados reais ainda ---- */

  function mostrarAgendaEmBreve(elementos) {
    limparDestaque(elementos.destaqueConteudo, "A agenda chega em breve");
    elementos.grid.innerHTML = "";
    elementos.status.textContent =
      "A agenda ficará disponível aqui assim que o calendário público do clube for conectado.";
    desativarFiltros(elementos.filtros);
  }

  function mostrarAgendaVazia(elementos) {
    limparDestaque(elementos.destaqueConteudo, "Nenhuma atividade agendada no momento");
    elementos.grid.innerHTML = "";
    elementos.status.textContent = "Volte em breve para conferir novas atividades.";
    desativarFiltros(elementos.filtros);
  }

  function mostrarErro(elementos) {
    limparDestaque(elementos.destaqueConteudo, "Não foi possível carregar a agenda");
    elementos.grid.innerHTML = "";
    elementos.status.textContent =
      "Não foi possível carregar a agenda agora. Tente novamente mais tarde.";
    desativarFiltros(elementos.filtros);
  }

  function limparDestaque(container, titulo) {
    if (!container) return;
    container.innerHTML = `
      <p class="eyebrow">Próxima atividade</p>
      <h2>${titulo}</h2>
    `;
  }

  function desativarFiltros(filtros) {
    filtros.forEach((botao) => {
      botao.disabled = true;
    });
  }

  /* ---- Estado com eventos reais ---- */

  function renderizarAgenda(elementos, eventos) {
    const [destaque, ...restante] = eventos;

    if (destaque) {
      renderizarDestaque(elementos.destaqueConteudo, destaque);
    }

    elementos.grid.innerHTML = "";
    restante.forEach((evento) => {
      elementos.grid.appendChild(criarCardEvento(evento));
    });

    elementos.status.textContent = `${eventos.length} atividade(s) na agenda.`;

    ativarFiltros(elementos.filtros, elementos.grid);
  }

  function renderizarDestaque(container, evento) {
    if (!container) return;
    const { diaSemana, dia, mes } = formatarData(evento.inicio);

    container.innerHTML = `
      <p class="eyebrow">Próxima atividade</p>
      <h2>${escaparHtml(evento.titulo)}</h2>
      <div class="agenda-evento__meta">
        <p><strong>${diaSemana}, ${dia} de ${mes}</strong></p>
        <p>${escaparHtml(evento.local || "Local a confirmar")}</p>
      </div>
      <p>${escaparHtml(evento.descricao || "")}</p>
      <a href="#proximas-atividades" class="btn btn--primary">Ver programação</a>
    `;
  }

  function criarCardEvento(evento) {
    const config = window.CalendarConfig;
    const rotuloTipo = (config && config.tiposDeEvento && config.tiposDeEvento[evento.tipo]) || "Atividade";
    const { mesAbrev, dia } = formatarDataCurta(evento.inicio);

    const artigo = document.createElement("article");
    artigo.className = "agenda-card";
    artigo.dataset.categoria = evento.tipo || "";

    artigo.innerHTML = `
      <div class="agenda-card__data">
        <span>${mesAbrev}</span>
        <strong>${dia}</strong>
      </div>
      <div class="agenda-card__conteudo">
        <span class="agenda-card__categoria">${escaparHtml(rotuloTipo)}</span>
        <h3>${escaparHtml(evento.titulo)}</h3>
        <p>${escaparHtml(evento.local || "Local a confirmar")}</p>
        <p>${escaparHtml(evento.descricao || "")}</p>
        ${evento.linkOriginal ? `<a href="${evento.linkOriginal}" class="agenda-card__link" target="_blank" rel="noopener">Ver detalhes</a>` : ""}
      </div>
    `;

    return artigo;
  }

  function ativarFiltros(filtros, grid) {
    filtros.forEach((botao) => {
      botao.disabled = false;
      botao.addEventListener("click", () => {
        filtros.forEach((b) => b.classList.remove("is-active"));
        botao.classList.add("is-active");

        const filtro = botao.dataset.filtro;
        const cards = grid.querySelectorAll(".agenda-card");

        cards.forEach((card) => {
          const mostrar = filtro === "todos" || card.dataset.categoria === filtro;
          card.style.display = mostrar ? "" : "none";
        });
      });
    });
  }

  /* ---- Utilitários ---- */

  const DIAS_SEMANA = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const MESES = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  const MESES_ABREV = [
    "JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
    "JUL", "AGO", "SET", "OUT", "NOV", "DEZ",
  ];

  function formatarData(dataIso) {
    if (!dataIso) return { diaSemana: "", dia: "", mes: "" };
    const data = new Date(dataIso);
    return {
      diaSemana: DIAS_SEMANA[data.getDay()],
      dia: data.getDate(),
      mes: MESES[data.getMonth()],
    };
  }

  function formatarDataCurta(dataIso) {
    if (!dataIso) return { mesAbrev: "", dia: "" };
    const data = new Date(dataIso);
    return {
      mesAbrev: MESES_ABREV[data.getMonth()],
      dia: String(data.getDate()).padStart(2, "0"),
    };
  }

  function escaparHtml(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
  }
})();
