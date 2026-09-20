# Arquitetura do Projeto — Estrela de Aço

> Documento técnico: como o código é organizado e as convenções usadas.
> Para decisões de design/paleta/conteúdo, ver `docs/design-system.md`.

---

## 1. Estrutura de pastas

```text
desbravadores-estrela-de-aco/
├── index.html
├── pages/              → páginas internas (sobre, atividades, agenda, participe)
├── css/
│   ├── base/           → variables, reset, typography (fundação, carregado por toda página)
│   ├── components/     → header, footer, buttons, cards, modal, forms (reutilizáveis)
│   └── pages/          → estilo específico de cada página (home, sobre, ...)
├── js/
│   ├── core/           → main.js, navigation.js (roda em todas as páginas)
│   ├── components/     → JS de componentes reutilizáveis (ex.: modal.js)
│   └── pages/          → JS específico de uma página (ex.: agenda.js)
├── integrations/        → código de integração externa (calendar, forms, maps, whatsapp, social)
├── data/                → configuração/dados centralizados do site
├── assets/              → images, icons, videos, fonts
└── docs/                → este arquivo + design-system.md
```

**Regra geral:** um arquivo CSS/JS deve poder ser identificado pelo nome de
qual pasta ele está — se você não sabe em qual pasta colocar algo novo,
pergunte antes de criar pasta nova (regra do prompt-mestre original).

---

## 2. Ordem de carregamento do CSS

Cada página carrega o CSS nesta ordem, sempre:

```html
<link rel="stylesheet" href="css/base/variables.css">
<link rel="stylesheet" href="css/base/reset.css">
<link rel="stylesheet" href="css/base/typography.css">
<link rel="stylesheet" href="css/components/header.css">
<link rel="stylesheet" href="css/components/buttons.css">
<link rel="stylesheet" href="css/components/cards.css">
<link rel="stylesheet" href="css/components/footer.css">
<link rel="stylesheet" href="css/components/layout.css">
<link rel="stylesheet" href="css/pages/[nome-da-pagina].css">
```

`layout.css` contém a estrutura genérica de seção (`.section`,
`.section--alt`, `.on-dark`, `.cta-final`, `.page-header`) usada por
**todas** as páginas — sempre incluir, mesmo em página nova.

A ordem importa: `base` define tokens e reset antes de tudo; `components`
vem depois porque usa esses tokens; `pages` vem por último porque pode
ajustar algo específico daquela página sem precisar de `!important`.

Nem toda página vai usar todos os arquivos de `components/` — só inclua o
que a página realmente usa (ex.: se uma página não tem card, não carregue
`cards.css`).

---

## 3. Convenção de nomes CSS (BEM simplificado)

```css
.bloco { }
.bloco__elemento { }
.bloco--variante { }
```

Exemplos já usados no projeto:
- `.site-header__menu` (elemento `menu` dentro do bloco `site-header`)
- `.btn--primary` (variante `primary` do bloco `btn`)
- `.card__categoria[data-categoria="aventura"]` — usamos `data-*` quando a
  variação vem de um dado dinâmico (categoria da atividade), não de uma
  classe fixa.

Não criar nomes de classe genéricos (`.box`, `.item`, `.container` sozinho)
— sempre nomear pelo que o elemento representa no conteúdo.

---

## 4. Variáveis CSS (tokens)

Todas as cores, sem exceção, vêm de `css/base/variables.css`. Nunca escrever
um valor hexadecimal direto num componente ou página — sempre usar a
variável semântica (`var(--color-primary)`, não `#0F4C46`). Ver
`docs/design-system.md` seção 4 para a tabela completa e as regras de uso
de cada cor.

---

## 5. JavaScript

- Sem framework, sem bundler. Cada arquivo é carregado via `<script>` no
  final do `<body>`.
- Módulos são IIFEs (`(function () { ... })()`) para não vazar variáveis
  no escopo global.
- `js/core/navigation.js` cuida só do menu mobile — não adicionar lógica de
  outra coisa nele.
- `js/core/main.js` é o ponto central para inicializações que rodam em
  toda página (hoje está vazio, reservado para o dia em que a Home
  precisar checar se há evento em destaque).
- JS específico de uma página só (ex.: renderizar a agenda do Google
  Calendar) vai em `js/pages/agenda.js`, não em `main.js`.

---

## 6. Integrações (`integrations/`)

Cada integração externa vive isolada em sua própria subpasta, com um
`*-service.js` (lógica) e um `*-config.js` (chaves/URLs/parâmetros)
separados — isso permite trocar de provedor sem reescrever quem consome o
serviço.

Hoje só `calendar/` tem decisão tomada: Google Calendar público como fonte,
consumido por um provider próprio (`providers/public-calendar.js`), sem
iframe, para manter a interface visual do site. As pastas `forms/`,
`maps/`, `whatsapp/`, `social/` existem reservadas mas sem código ainda —
adicionar um `.gitkeep` em cada uma até terem conteúdo, porque o Git não
versiona pasta vazia.

---

## 7. Como adicionar uma página nova

1. Criar `pages/nome-da-pagina.html`, copiando a estrutura de header/footer
   do `index.html` (ainda não centralizados — ver observação abaixo).
2. Criar `css/pages/nome-da-pagina.css` para o estilo específico dela.
3. Linkar os arquivos de `components/` que essa página realmente usa.
4. Atualizar o menu (`.site-header__menu`) em **todas** as páginas
   existentes para incluir o link da nova página.
5. Atualizar `docs/design-system.md` se a página introduzir alguma decisão
   de conteúdo ou cor nova.

**Observação:** como o projeto não usa servidor local por padrão, o
header/footer estão duplicados em cada página (não dá para usar
`fetch()` para injetar HTML compartilhado sem servidor, por causa de
CORS em `file://`). Se algum dia passar a rodar com Live Server ou
similar, dá pra revisar isso e centralizar em um único arquivo.

---

## 8. Acessibilidade — checklist rápido ao criar componente novo

- Elemento interativo tem `:focus-visible` visível? (herda do reset, não remover)
- Imagem tem `alt` descritivo (ou `alt=""` se for puramente decorativa)?
- Cor sozinha carrega alguma informação? Se sim, adicionar texto/ícone junto.
- Contraste de texto novo foi checado contra o fundo? (ver restrições de
  dourado e azul céu no design-system.md)
