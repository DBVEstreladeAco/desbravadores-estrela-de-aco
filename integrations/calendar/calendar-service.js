/* ==========================================================================
   calendar-service.js — camada intermediária entre a página e o provider
   Local no projeto: integrations/calendar/calendar-service.js

   agenda.js (em js/pages/) só deve falar com CalendarService, nunca
   diretamente com PublicCalendarProvider. Isso permite trocar de provedor
   de calendário no futuro (ex.: migrar para API própria do clube) sem
   precisar tocar em nada dentro de agenda.js.
   ========================================================================== */

const CalendarService = (function () {

  /**
   * @returns {Promise<{eventos: Array, ativo: boolean}>}
   *   ativo=false quando a integração está desligada em calendar-config.js —
   *   agenda.js deve tratar isso como "agenda em breve", não como erro.
   */
  async function obterProximosEventos() {
    const config = window.CalendarConfig;

    if (!config || !config.enabled) {
      return { eventos: [], ativo: false };
    }

    const eventos = await window.PublicCalendarProvider.buscarProximosEventos();
    return { eventos, ativo: true };
  }

  return { obterProximosEventos };
})();

if (typeof window !== "undefined") {
  window.CalendarService = CalendarService;
}
