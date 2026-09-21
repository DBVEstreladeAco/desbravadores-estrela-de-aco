# Design System — Clube de Desbravadores Estrela de Aço

**Status:** documento vivo do projeto  
**Versão:** 2.x  
**Última etapa documentada:** revisão técnica de Atividades/Participe/Agenda + Agenda funcional (ver seção 14)

---

## 1. Identidade do projeto

- **Nome:** Clube de Desbravadores Estrela de Aço
- **Local:** Ipatinga/MG — AML
- **Fundação:** 2002
- **Tecnologia:** HTML5 + CSS3 + JavaScript puro
- **Conceito:** **Jovem + Aventura + Propósito**

A identidade do site não deve copiar a estética metálica da logo. A logo representa o clube; o site representa a experiência do clube.

---

## 2. Navegação principal

A navegação principal permanece:

1. Início
2. Sobre
3. Atividades
4. Agenda
5. Participe

A página Participe funciona como etapa final do percurso do visitante:

**Descobrir → entender → conhecer as atividades → consultar a agenda → participar**

---

## 3. Página Participe

> **Nota de implementação (revisão técnica):** a primeira versão desta
> página usava classes (`.button`, `.container`) e variáveis CSS
> (`--raw-off-white`, `--raw-fundo-claro`, `--raw-fundo-alternativo`) que
> não existiam em nenhum outro arquivo do projeto — nada nela era
> estilizado corretamente, e o link do CSS apontava para o caminho errado
> (`css/layout.css` em vez de `css/components/layout.css`). A página foi
> **reescrita do zero** mantendo a mesma estrutura de conteúdo descrita
> abaixo, mas usando exatamente as classes e tokens já em uso em
> Home/Sobre/Atividades/Agenda (`.btn`, `.section`, `.section--alt`,
> `.page-header`, `.eyebrow`, variáveis `--color-*`/`--category-*`).

### Objetivo

Reduzir a barreira de entrada para quem quer conhecer o clube e, ao mesmo tempo, fornecer aos pais informações básicas para entender a organização.

A página não deve começar como um formulário burocrático. Primeiro apresenta a experiência e explica como funciona; depois conduz ao contato/interesse.

### Estrutura atual

1. **Hero**
   - Pergunta principal: “Quer conhecer o Estrela de Aço?”
   - CTA principal: “Quero conhecer”
   - CTA secundário: “Ver agenda”
   - `[IMAGEM DE FUNDO NECESSÁRIA]`
   - Arquivo previsto: `assets/images/hero/hero-participe.jpg`

2. **Primeiro passo**
   - Explica que o visitante não precisa saber tudo antes de chegar.
   - Linguagem simples e acolhedora.

3. **Para quem é**
   - Crianças
   - Adolescentes
   - Famílias
   - Não apresentar como três “produtos”; são públicos com necessidades diferentes.

4. **Como funciona**
   - Unidades
   - Cargos e responsabilidades
   - Reuniões e atividades
   - Não foram inventados horários ou procedimentos específicos.

5. **Informações para pais**
   - Rotina
   - Organização
   - Perguntas frequentes
   - `[IMAGEM DE APOIO NECESSÁRIA]`
   - Arquivo previsto: `assets/images/experiences/participacao-familia.jpg`

6. **Quero conhecer**
   - Área preparada para futura integração de formulário.
   - `[FORMULÁRIO DE INTERESSE]`
   - `[INTEGRAÇÃO DE FORMULÁRIO NECESSÁRIA]`
   - A integração real será feita posteriormente.

7. **Não é da região?**
   - Encaminhamento para o localizador oficial de clubes.
   - Não criar uma página própria para outros clubes.

8. **CTA final**
   - Retorno para a Agenda.

---

## 4. Assets pendentes da página Participe

Os arquivos ainda não foram inventados nem substituídos por imagens genéricas.

### Imagens

- `assets/images/hero/hero-participe.jpg`
  - Uso: fundo do hero.
  - Tipo: fotografia real.
  - Direção visual: família/participação/atividade ao ar livre, com espaço visual para texto.

- `assets/images/experiences/participacao-familia.jpg`
  - Uso: apoio da seção para pais.
  - Tipo: fotografia real.
  - Direção visual: participação familiar e ambiente do clube.

### Ícones

- Ícone de grupo
- Ícone de organização
- Ícone de calendário
- Ícone de formulário
- Ícone de localização
- Ícone de contato
- Ícone de rede social

Por enquanto os locais estão marcados explicitamente no HTML com `[ÍCONE ...]`.

### Logo

- `assets/images/logo/logo-header.png`
- Uso: header e footer.
- O arquivo real deve substituir o marcador `[LOGO DO CLUBE]`.

---

## 5. Conteúdo factual pendente

Não preencher com informação inventada.

Ainda precisam ser definidos pelo clube:

- horários oficiais das reuniões;
- endereço/local exato dos encontros;
- canais oficiais de contato;
- redes sociais;
- procedimento real de inscrição/interesse;
- funcionamento definitivo do formulário;
- detalhes específicos da rotina para pais;
- textos reais da história do clube.

Enquanto esses dados não forem fornecidos, a interface deve indicar claramente o espaço reservado.

---

## 6. Paleta v2

### Identidade

- Verde Petróleo: `#0F4C46`
- Azul Profundo: `#0D3B66`
- Grafite: `#1E1E1E`
- Off-white: `#F4F3EF`

### Acentos

- Dourado: `#C89B3C`
- Amarelo: `#F4C430`
- Vermelho: `#B83A32`

### Secundárias

- Cinza Texto: `#5E686F`
- Verde Natural: `#2E7D32`
- Azul Céu: `#5B8DB8`

### Fundos

- Fundo claro: `#F4F3EF`
- Fundo alternativo: `#F0F0EC`
- Fundo escuro: `#0E1F24`
- Fundo textura: `#1A2A2F`

---

## 7. Tipografia

- **Títulos:** Big Shoulders Display
- **Texto:** Work Sans

Os títulos devem ter presença visual sem transformar o site em uma interface infantil ou temática demais.

---

## 8. Regras de design

- Jovem sem ser infantil.
- Aventureiro sem parecer radical.
- Espiritual sem parecer exclusivamente institucional.
- Profissional sem parecer corporativo.
- Fotografia real sempre que possível.
- Não usar excesso de gradientes, sombras ou efeitos 3D.
- Cores de categoria devem identificar, não dominar.
- Animações devem ser discretas e ter propósito.
- Nenhuma informação factual deve ser inventada apenas para preencher a interface.
- Quando um asset ainda não existir, marcar explicitamente seu lugar.

---

## 9. Convenção de placeholders

Durante o desenvolvimento, usar marcadores claros:

- `[IMAGEM DE FUNDO NECESSÁRIA]`
- `[IMAGEM DE APOIO NECESSÁRIA]`
- `[ÍCONE NECESSÁRIO]`
- `[LOGO DO CLUBE]`
- `[FORMULÁRIO DE INTERESSE]`
- `[INTEGRAÇÃO ... NECESSÁRIA]`
- `[INFORMAÇÃO NECESSÁRIA]`

Isso permite desenvolver o layout sem fingir que um asset ou informação já existe.

---

## 10. Agenda

A página Agenda foi criada antes de Participe.

Decisões mantidas:

- interface própria do Estrela de Aço;
- calendário preparado para futura integração com Google Calendar público;
- sem iframe como solução visual final;
- detalhes de eventos serão adicionados quando houver dados reais.

### Duas taxonomias diferentes (decisão resolvida)

A Agenda **não** usa as mesmas "categorias de atividade" da página
Atividades. São dois sistemas com propósitos diferentes, e os dois
continuam existindo:

| Sistema | Onde aparece | Valores |
|---|---|---|
| Categoria de atividade | Página Atividades, `.card__categoria` | Aventura, Aprendizado, Serviço, Liderança, Convivência |
| Tipo de evento | Página Agenda, filtros e cards | Reunião, Programação, Ação social, Arrecadação, Evento especial |

O tipo de evento vem da descrição do evento no Google Calendar, com a
convenção `tipo: reuniao` (ou outro valor válido) em qualquer lugar do
texto — ver `integrations/calendar/providers/public-calendar.js`.

### Integração implementada

- `js/pages/agenda.js` — renderiza o destaque e os cards, trata os
  estados "agenda em breve" (`CalendarConfig.enabled = false`, estado
  atual), "sem eventos" e "erro ao carregar", e ativa os filtros por
  tipo de evento.
- `integrations/calendar/calendar-config.js` — `enabled: false` até o
  clube ter um `calendarId` e `apiKey` reais. Não criar evento fictício
  para "preencher" a tela.
- `integrations/calendar/providers/public-calendar.js` — busca na API
  do Google Calendar e converte para o formato interno.
- `integrations/calendar/calendar-service.js` — camada entre a página e
  o provider (permite trocar de provider no futuro sem tocar em
  `agenda.js`).
- `pages/agenda.html` precisou de um ajuste: faltavam as tags
  `<script>` desses quatro arquivos antes do fechamento do `</body>`.

---

## 11. Sobre

A página Sobre já possui estrutura própria.

Conteúdo pendente:

- história real do clube;
- informações institucionais que ainda precisem ser confirmadas.

Não substituir informações faltantes por texto fictício.

---

## 12. Atividades

A página Atividades segue os cinco eixos:

- Aventura
- Aprendizado
- Serviço
- Liderança
- Convivência

A seção Aventura deve ter maior impacto visual, mas as categorias não devem virar cinco cards corporativos idênticos.

> **Correção aplicada (revisão técnica):** o rótulo de categoria
> (`.atividade-card__categoria` / `.atividade-destaque__categoria`) não
> usa mais `--categoria-cor` como cor de texto. Dois motivos: essa
> variável só existia dentro de `.atividade-card`, então nas seções de
> destaque o texto simplesmente não recebia cor nenhuma; e a cor de
> "Serviço" é o dourado, que reprova contraste WCAG como texto sobre
> fundo claro (ver seção 6). A identidade de cada categoria continua
> visível pela borda do card e pelo fundo da imagem de destaque — o
> rótulo de texto agora usa sempre `--color-text-secondary`.

---

## 13. Estado do projeto

### Concluído

- Estrutura de pastas
- Variáveis de design
- Reset
- Tipografia
- Header
- Footer
- Botões
- Cards
- Layout global
- Home
- Navegação mobile
- JavaScript base
- Documentação inicial
- Página Sobre
- Página Atividades (revisada — ver seção 12)
- Página Agenda (estrutura + integração funcional — ver seção 10)
- Página Participe (reescrita — ver seção 3)
- Revisão técnica completa das três páginas internas mais recentes (ver seção 14)

### Pendente

- Imagens reais da Home
- Imagens reais da Sobre
- História real do clube
- Imagens reais da Agenda
- Imagens reais da Participe
- `calendarId` e `apiKey` reais do Google Calendar (hoje `enabled: false`)
- Integração real do formulário (`integrations/forms/` ainda vazio)
- Contato/localização/redes sociais
- Revisão final de responsividade
- Revisão final de acessibilidade
- Revisão final de SEO
- Revisão de performance
- Escolha/configuração da hospedagem

---

## 14. Revisão técnica (arquivos reais do repositório)

Depois de uma etapa de continuação feita em outra ferramenta, o
repositório real foi conferido arquivo por arquivo (não só pela
descrição do que deveria ter sido feito). Achados e correções:

| Arquivo | Problema encontrado | Correção |
|---|---|---|
| `css/pages/atividades.css` | `--categoria-cor` não chegava até `.atividade-destaque` (fora do escopo); dourado usado como texto (`Serviço`) reprovava contraste | Rótulo de categoria passou a usar `--color-text-secondary` sempre |
| `pages/participe.html` + `css/pages/participe.css` | Classes (`.button`, `.container`) e variáveis (`--raw-off-white`, `--raw-fundo-claro`, `--raw-fundo-alternativo`) inexistentes; caminho do CSS errado (404) | Página reescrita do zero com as classes e tokens já em uso no resto do site |
| `pages/agenda.html` | Faltavam as tags `<script>` da integração e de `agenda.js` | Adicionadas as 4 tags, na ordem correta |
| `js/pages/agenda.js` | Não existia | Criado, compatível com o DOM real de `agenda.html` |
| `integrations/calendar/*.js` | Taxonomia de categoria não batia com os filtros reais do HTML | Ajustado para "tipo de evento" (ver seção 10) |

`css/components/modal.css`, `css/main.css`, `data/highlights.js` e
`data/site-config.js` continuam vazios de propósito — nenhuma página
os referencia ainda. Não preencher até terem uso real.

---

## 15. Regra para as próximas etapas

Cada nova alteração deve:

1. preservar a arquitetura atual;
2. reutilizar header, footer, layout e componentes existentes;
3. respeitar a paleta v2;
4. marcar assets inexistentes;
5. não inventar dados do clube;
6. alterar apenas os arquivos necessários;
7. atualizar este documento quando uma decisão estrutural ou visual for tomada.
