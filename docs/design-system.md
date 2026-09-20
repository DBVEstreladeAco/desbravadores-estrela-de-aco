# Clube de Desbravadores Estrela de Aço — Documentação do Projeto

> **Status:** documento vivo. Vai sendo atualizado ao longo do desenvolvimento.
> **Última atualização:** paleta v2 (cores enxugadas + correções de contraste WCAG AA).
> **Local sugerido no projeto:** `docs/design-system.md`

---

## 1. Identidade do projeto

- **Nome:** Clube de Desbravadores Estrela de Aço
- **Local:** Ipatinga/MG — AML
- **Fundação:** 2002
- **Stack:** HTML5, CSS3, JavaScript puro (sem frameworks)
- **Repositório:** `github.com/DBVEstreladeAco/desbravadores-estrela-de-aco`
- **Hospedagem:** ainda não escolhida (não será local — a definir)

Conceito central: **"Jovem + Aventura + Propósito"**. Jovem sem ser infantil,
aventureiro sem parecer radical, espiritual sem parecer só institucional,
profissional sem parecer corporativo.

A logo é industrial/metálica; o site **não** deve copiar essa estética —
o site representa a experiência do clube, a logo representa o símbolo.

---

## 2. Arquitetura de conteúdo

Navegação principal: **Início · Sobre · Atividades · Agenda · Participe**

Jornada do visitante:
`Descobrir → Entender → Se interessar → Conhecer atividades → Consultar agenda → Participar`

Decisões fixas (não reabrir sem motivo forte):
- Sem página de Galeria isolada — fotografia entra dentro do contexto de cada atividade.
- Sem página de Liderança com fotos/nomes — explicado em "Como funciona" e "Informações para pais".
- Link **"Não é da região?"** apontando para o localizador oficial de clubes.
- Home: hero permanente + bloco de aviso/destaque de evento que só aparece quando há evento (não substitui o hero).
- Categorias de Atividades: Aventura, Aprendizado, Serviço, Liderança, Convivência.

---

## 3. Integrações planejadas

| Integração | Decisão | Observação |
|---|---|---|
| Agenda | Google Calendar público como fonte + interface própria do site | Sem iframe. Estrutura pronta para migrar para API no futuro. |
| Formulários | Solução própria | Google Forms descartado — não permite personalização visual. |
| Mapas | A definir | Pasta reservada em `integrations/maps/`. |
| WhatsApp | A definir | Pasta reservada em `integrations/whatsapp/`. |
| Redes sociais | A definir | Pasta reservada em `integrations/social/`. |

---

## 4. Paleta de cores — v2 (vigente)

A paleta é um **sistema com função**, não uma lista de cores usadas por igual.
Arquivo fonte: `css/base/variables.css`.

### 4.1 Identidade

| Cor | Hex | Função |
|---|---|---|
| 🟢 Verde Petróleo | `#0F4C46` | Cor de marca. Header, botões principais, elementos ativos. Também é a cor **oficial** da farda de Desbravadores (confirmado no Regulamento de Uniformes MDA 2020). |
| 🔵 Azul Profundo | `#0D3B66` | Navegação, links, botões secundários. Usado também na página Sobre (o azul exclusivo `#123B5D` foi descontinuado). |
| ⚫ Grafite | `#1E1E1E` | Títulos, texto principal, ícones. |
| ◻️ Off-white | `#F4F3EF` | Único fundo claro base do site. |

### 4.2 Destaque

| Cor | Hex | Função | Restrição |
|---|---|---|---|
| 🟡 Amarelo | `#F4C430` | Botão de destaque, hover/link ativo no header, item ativo | — |
| 🟤 Dourado | `#C89B3C` | Detalhe institucional, borda, ícone especial, cor temática da Agenda | **Nunca como texto sobre fundo claro** (contraste 2.3:1 — reprova WCAG) |
| 🔴 Vermelho | `#B83A32` | Alerta, erro, aviso importante | **Nunca como CTA comum** ("Participar" não é vermelho) |

### 4.3 Apoio

| Cor | Hex | Função | Restrição |
|---|---|---|---|
| Cinza texto | `#5E686F` | Texto secundário | Corrigido de `#68727A` (reprovava AA por pouco: 4.42 vs mínimo 4.5) |
| Verde natural | `#2E7D32` | Ilustrações, elementos de natureza | Uso pontual, não substitui o verde petróleo |
| Azul céu | `#5B8DB8` | Ícone/chip secundário | Contraste fraco (3.18) como texto/traço fino sobre fundo claro — usar como fundo de chip com texto escuro, ou ícone maior |

### 4.4 Fundos

| Cor | Hex | Função |
|---|---|---|
| Base | `#F4F3EF` | Fundo padrão de todas as seções |
| Alternativo | `#F0F0EC` | Alterna com o base para separar seções sem usar borda |
| Escuro | `#0E1F24` | Rodapé, CTA final, banners de impacto |
| Textura | `#1A2A2F` | Overlay sobre fotografia, mapas, elementos de aventura |

> **Removido na v2:** `#FAFAF8` (quase idêntico ao `#F4F3EF`, contraste 1.06 —
> não separava nada visualmente) e `#123B5D` (azul exclusivo de Sobre,
> redundante com o azul profundo principal).

### 4.5 Categorias de atividades (reuso, não são cores novas)

| Categoria | Cor |
|---|---|
| Aventura | Verde Petróleo `#0F4C46` |
| Aprendizado | Azul Profundo `#0D3B66` |
| Serviço | Dourado `#C89B3C` |
| Liderança | Cinza texto `#5E686F` |
| Convivência | Azul Céu `#5B8DB8` |

Usar só em etiqueta, ícone ou linha de destaque — nunca pintar o card inteiro.

### 4.6 Regras de aplicação por componente

- **Header:** fundo verde petróleo, texto off-white, link ativo/hover amarelo.
- **Botão principal:** fundo verde petróleo, texto off-white. ("Quero participar", "Inscrever-me")
- **Botão secundário:** fundo azul profundo, texto off-white. ("Saiba mais", "Ver detalhes")
- **Botão de destaque:** fundo amarelo, texto grafite. ("Ver agenda", "Próxima atividade")
- **Botão de alerta:** fundo vermelho, texto off-white. Só para avisos reais.
- **Cards:** fundo neutro (`#F0F0EC`), nunca pintados na cor da categoria — só uma faixa/etiqueta.
- **Formulário:** campo com fundo `#F0F0EC`, foco em verde petróleo, erro em vermelho, sucesso em verde petróleo (não verde brilhante genérico).
- **Rodapé/CTA final:** fundo escuro `#0E1F24`, texto off-white, detalhe dourado, botão verde petróleo.

---

## 4.7 Tipografia

| Papel | Fonte | Fonte (Google Fonts) |
|---|---|---|
| Títulos (h1–h4) | Big Shoulders Display | `Big Shoulders Display:wght@600;700;800` |
| Texto corrido | Work Sans | `Work Sans:wght@400;500;600` |

**Por que essa dupla:** Big Shoulders Display é condensada e robusta — dialoga
com o acabamento de "placa metálica" da logo sem imitar o efeito 3D dela.
Work Sans é neutra e muito legível, para não competir com os títulos.
Evita-se de propósito a combinação "serif editorial + fundo creme", que é a
cara-padrão de site gerado por IA — nossa base é petróleo/off-white, não
creme/terracota.

Escala tipográfica fluida com `clamp()` em `typography.css` — cresce com a
tela sem precisar de media query dedicada para cada tamanho de texto.

---

## 5. Referências oficiais consultadas

- **Regulamento de Uniformes DSA (espanhol, 56 pág.):** Pantones oficiais dos emblemas — 2758C, 1795C, 116C, 3425C, 104C. Não usados diretamente no site (são cores de bordado/tecido, não de tela).
- **Regulamento de Uniformes MDA 2020 (português, 56 pág.):** confirma "verde petróleo" como nome oficial da cor da farda de Desbravadores. Não traz tabela de hex.
- **Logo oficial:** estrela metálica de 5 pontas + emblema dos Desbravadores + placa "CLUBE DE DESBRAVADORES / ESTRELA DE AÇO / IPATINGA-MG AML / DESDE 2002". Não recolorir nem redesenhar.

Referências visuais de inspiração (estrutura e fotografia, não identidade):
`escoteiros.org.br`, `adventistas.org/pt/desbravadores`, `kisc.ch`.

---

## 6. Estrutura de pastas (vigente, sem alterações)

```text
desbravadores-estrela-de-aco/
├── index.html
├── pages/
├── css/
│   ├── base/        (variables, reset, typography)
│   ├── components/  (header, footer, buttons, cards, modal, forms)
│   └── pages/
├── js/
│   ├── core/
│   ├── components/
│   └── pages/
├── integrations/
│   ├── calendar/
│   ├── forms/
│   ├── maps/
│   ├── whatsapp/
│   └── social/
├── data/
├── assets/
│   ├── images/
│   ├── icons/
│   ├── videos/
│   └── fonts/
├── docs/
└── .gitignore
```

> Nota prática: pastas vazias não são versionadas pelo Git. Para as pastas
> de `integrations/` sem arquivo ainda, adicionar um `.gitkeep` dentro de
> cada uma evita que suma no próximo push (já aconteceu com `assets/`).

---

## 7. Log de decisões

| Data/etapa | Decisão |
|---|---|
| Estruturação inicial | Arquitetura de conteúdo, integrações e paleta v1 fechadas no ChatGPT |
| Migração para Claude | Histórico completo analisado; paleta v1 revisada |
| Revisão de paleta | Cortado `#123B5D` (Sobre) e `#FAFAF8` (fundo duplicado); corrigido `#68727A` → `#5E686F` para WCAG AA; documentada restrição de uso do dourado e do azul céu como texto |
| Hospedagem | Definido que não será local; serviço ainda em escolha |
| Início da implementação | Tipografia definida (Big Shoulders Display + Work Sans); `variables.css`, `reset.css`, `typography.css` e `index.html` (estrutura da Home) entregues |
| Home completa (1ª versão) | Componentes CSS (header, buttons, cards, footer), `home.css`, menu mobile funcional (`navigation.js`) e `main.js` entregues; `docs/architecture.md` e `README.md` criados. Frase do hero trocada por decisão do usuário (foco em pertencimento/comunidade, não em "experiência" como produto) |

---

## 8. Arquivos entregues e onde colocá-los

| Arquivo entregue | Colocar em |
|---|---|
| `variables.css` | `css/base/variables.css` |
| `reset.css` | `css/base/reset.css` |
| `typography.css` | `css/base/typography.css` |
| `header.css` | `css/components/header.css` |
| `buttons.css` | `css/components/buttons.css` |
| `cards.css` | `css/components/cards.css` |
| `footer.css` | `css/components/footer.css` |
| `home.css` | `css/pages/home.css` |
| `layout.css` | `css/components/layout.css` |
| `sobre.css` | `css/pages/sobre.css` |
| `sobre.html` | `pages/sobre.html` |
| `navigation.js` | `js/core/navigation.js` |
| `main.js` | `js/core/main.js` |
| `index.html` | raiz do projeto (`index.html`) |
| `architecture.md` | `docs/architecture.md` |
| `README.md` | raiz do projeto (`README.md`) |

> **Atualização importante:** `.section`, `.section--alt`, `.on-dark`,
> `.cta-final` e `.page-header` saíram de `home.css` e viraram um
> componente compartilhado, `layout.css` — toda página interna (Sobre,
> Atividades, Agenda, Participe) vai carregar esse arquivo. Se você já
> tinha colocado o `home.css` antigo no projeto, substitua pela versão
> nova (sem esses blocos) e adicione o `layout.css` junto no `<head>` do
> `index.html`, logo antes do `home.css`.

Com esses arquivos no lugar, a Home e a página Sobre já devem renderizar
completas. Ainda faltam as imagens reais e o texto real da história do
clube (marcado com `[INFORMAÇÃO NECESSÁRIA]` no `sobre.html` — não
inventei história do clube, só deixei o espaço reservado).

## 9. Próximos passos

- [ ] Escolher serviço de hospedagem (pendente — atualizar esta seção quando decidido)
- [x] `css/base/variables.css`
- [x] `css/base/reset.css`
- [x] `css/base/typography.css`
- [x] `index.html` — estrutura semântica da Home
- [x] `css/components/header.css`, `buttons.css`, `cards.css`, `footer.css`, `layout.css`
- [x] `css/pages/home.css`
- [x] `js/core/navigation.js` (menu mobile) e `js/core/main.js`
- [x] `docs/architecture.md` e `README.md`
- [x] `pages/sobre.html` + `css/pages/sobre.css`
- [ ] Imagens reais da Home e da Sobre
- [ ] Texto real da história do clube (Sobre)
- [ ] Páginas internas restantes (Atividades, Agenda, Participe)
