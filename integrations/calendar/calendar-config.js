/* ==========================================================================
   calendar-config.js — configuração central da integração de Agenda
   Local no projeto: integrations/calendar/calendar-config.js

   Nenhum evento fictício deve ser criado enquanto "enabled" for false.
   Quando o calendário público do clube existir, preencher calendarId e
   apiKey e mudar enabled para true.

   ATUALIZAÇÃO: as categorias abaixo são o TIPO DE EVENTO exibido na Agenda
   (reunião, programação, ação social, arrecadação, evento especial) — não
   são as mesmas "categorias de atividade" (Aventura/Aprendizado/Serviço/
   Liderança/Convivência) usadas na página Atividades. São dois sistemas
   diferentes, de propósito diferente:
     - categoria de atividade → pilar de desenvolvimento (página Atividades)
     - tipo de evento → natureza do compromisso na agenda (página Agenda)
   Os valores abaixo já batem com os botões de filtro existentes em
   pages/agenda.html (data-filtro) — não alterar um lado sem alterar o outro.
   ========================================================================== */

const CalendarConfig = {
  // Enquanto false, calendar-service.js não faz nenhuma chamada de rede
  // e agenda.js mostra o estado "agenda em breve" (ver agenda.js).
  enabled: false,

  // ID do Google Calendar público do clube (ex.: "abc123@group.calendar.google.com")
  calendarId: "",

  // Chave de API do Google Calendar (Google Cloud Console → Calendar API)
  apiKey: "",

  // Quantos eventos futuros buscar de cada vez
  maxResults: 10,

  // Tipos de evento válidos — devem bater com os data-filtro em agenda.html
  tiposDeEvento: {
    reuniao: "Reunião",
    programacao: "Programação",
    servico: "Ação social",
    arrecadacao: "Arrecadação",
    especial: "Evento especial",
  },
};

if (typeof window !== "undefined") {
  window.CalendarConfig = CalendarConfig;
}
