/* ==========================================================================
   public-calendar.js — provider do Google Calendar público
   Local no projeto: integrations/calendar/providers/public-calendar.js

   Responsabilidade única: buscar eventos do Google Calendar público via
   API REST e devolver no formato interno do site (ver formatarEvento).
   Não sabe nada sobre HTML, DOM ou como a Agenda vai exibir os dados —
   isso é responsabilidade de js/pages/agenda.js.
   ========================================================================== */

const PublicCalendarProvider = (function () {

  /**
   * Busca os próximos eventos do calendário público configurado.
   * @returns {Promise<Array>} lista de eventos já no formato interno
   */
  async function buscarProximosEventos() {
    const config = window.CalendarConfig;

    if (!config || !config.enabled) {
      throw new Error("Integração de calendário desativada (CalendarConfig.enabled = false).");
    }

    if (!config.calendarId || !config.apiKey) {
      throw new Error("calendarId ou apiKey não configurados em calendar-config.js.");
    }

    const agora = new Date().toISOString();
    const url = new URL(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(config.calendarId)}/events`
    );
    url.searchParams.set("key", config.apiKey);
    url.searchParams.set("singleEvents", "true");
    url.searchParams.set("orderBy", "startTime");
    url.searchParams.set("timeMin", agora);
    url.searchParams.set("maxResults", String(config.maxResults || 10));

    const resposta = await fetch(url.toString());

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar eventos do Google Calendar (HTTP ${resposta.status}).`);
    }

    const dados = await resposta.json();
    const itens = dados.items || [];

    return itens.map(formatarEvento);
  }

  /**
   * Converte um evento no formato da API do Google para o formato
   * interno usado por agenda.js.
   *
   * Convenção esperada na descrição do evento no Google Calendar, em
   * qualquer lugar do texto:
   *   tipo: reuniao
   * (o valor deve ser uma das chaves de CalendarConfig.tiposDeEvento —
   * hoje: reuniao, programacao, servico, arrecadacao, especial)
   */
  function formatarEvento(itemBruto) {
    const inicio = itemBruto.start?.dateTime || itemBruto.start?.date || null;
    const fim = itemBruto.end?.dateTime || itemBruto.end?.date || null;
    const tipo = extrairTipoDeEvento(itemBruto.description || "");

    return {
      id: itemBruto.id,
      titulo: itemBruto.summary || "Atividade sem título",
      descricao: (itemBruto.description || "").replace(/tipo:\s*\w+/i, "").trim(),
      local: itemBruto.location || "",
      inicio,
      fim,
      tipo, // uma das chaves de CalendarConfig.tiposDeEvento, ou null
      linkOriginal: itemBruto.htmlLink || null,
    };
  }

  function extrairTipoDeEvento(descricao) {
    const config = window.CalendarConfig;
    const tiposValidos = (config && config.tiposDeEvento) || {};
    const match = descricao.match(/tipo:\s*(\w+)/i);

    if (!match) return null;

    const tipo = match[1].toLowerCase();
    return Object.prototype.hasOwnProperty.call(tiposValidos, tipo) ? tipo : null;
  }

  return { buscarProximosEventos };
})();

if (typeof window !== "undefined") {
  window.PublicCalendarProvider = PublicCalendarProvider;
}
