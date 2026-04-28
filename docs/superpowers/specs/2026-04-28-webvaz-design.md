# WEBVAZ — Site de Portfólio/Agência

**Data:** 2026-04-28
**Stack:** HTML + CSS + GSAP (CDN)
**Objetivo:** Site de uma página para vender serviços de criação de sites a pequenos negócios em Portugal

---

## Paleta de Cores

| Variável | Hex | Uso |
|----------|-----|-----|
| `--bg` | `#0D192B` | Fundo principal |
| `--accent` | `#07F9A2` | CTAs, hover, highlights |
| `--accent-2` | `#09C184` | Gradientes, ícones |
| `--mid` | `#0A8967` | Bordas, detalhes secundários |
| `--card` | `#0C5149` | Background de cards |
| `--text` | `#FFFFFF` | Texto principal |
| `--text-muted` | `#B0C4BE` | Texto secundário |

## Tipografia

- Fonte: **Inter** (Google Fonts)
- Hero H1: 72px / bold
- Section H2: 48px / bold
- Body: 16–18px / regular
- Botões: 16px / semibold / uppercase

## Animações

- **GSAP** via CDN para animações de entrada do hero (fade + slide up)
- **AOS** (Animate On Scroll) via CDN para cards e secções ao fazer scroll
- Hover nos cards: lift com box-shadow em `--accent`
- Cursor personalizado opcional (mint dot)

---

## Estrutura da Página

### 1. Nav
- Logo "WEBVAZ" em bold + accent color no "VAZ"
- Links: Serviços, Portfólio, Preços, Contacto
- CTA sticky: "Pedir Orçamento" (botão filled accent)
- Mobile: hamburger menu

### 2. Hero
- Tag line pequena: "Agência de Criação de Sites"
- H1: "O teu negócio merece um site que vende."
- Subheadline: "Criamos sites profissionais para pequenos negócios em Portugal — rápidos, modernos e que aparecem no Google."
- CTA primário: "Pedir Orçamento Grátis" → ancora para #contacto
- CTA secundário: "Ver Portfólio" → ancora para #portfolio
- Stat decorativo: "10+ clientes satisfeitos"
- Background: gradient radial de `#0D192B` para `#0C5149`

### 3. Serviços
- Título: "O que fazemos"
- 4 cards com ícone SVG, título, descrição curta e hover animado:
  1. **Sites Institucionais** — "Presença online profissional para a tua empresa"
  2. **Lojas Online** — "Vende os teus produtos 24h por dia, todos os dias"
  3. **Manutenção Mensal** — "Nós tratamos do teu site, tu tratas do teu negócio"
  4. **SEO** — "Aparece no Google quando os teus clientes pesquisam"

### 4. Portfólio
- Título: "Trabalhos recentes"
- 3 cards com imagem placeholder, nome do projeto, categoria e tag
  1. **Restaurante O Tasqueiro** — Site Institucional
  2. **Salão Prestige** — Site + Marcações Online
  3. **Loja Artesanato Local** — E-commerce
- Botão: "Ver projeto" em cada card (link # por agora)

### 5. Como Funciona
- Título: "Do briefing ao lançamento"
- 4 passos em linha com número grande accent:
  1. Briefing — "Contamos sobre o teu negócio"
  2. Design — "Criamos o visual em 48h"
  3. Desenvolvimento — "Construímos e testamos"
  4. Entrega — "Site no ar em menos de 7 dias"

### 6. Depoimentos
- Título: "O que dizem os clientes"
- 2 cards com avatar placeholder, nome, negócio e review:
  1. "O Davi entregou o site em menos de uma semana e os clientes adoram!" — João Silva, Restaurante O Tasqueiro
  2. "As reservas online triplicaram depois do novo site. Recomendo a 100%." — Ana Ferreira, Salão Prestige

### 7. Preços
- Título: "Investimento transparente"
- 3 planos:
  | Plano | Preço | Inclui |
  |-------|-------|--------|
  | Landing Page | 300€ | 1 página, contacto, mobile |
  | Site Completo | 600€ | Até 5 páginas, SEO básico, blog |
  | Loja Online | 1.200€ | E-commerce, pagamentos, gestão |
- Nota: "Manutenção mensal disponível a partir de 30€/mês"
- CTA em cada plano: "Escolher este plano"

### 8. CTA Final
- Fundo: gradient accent (`#07F9A2` → `#09C184`) com texto escuro
- Título: "Pronto para ter um site que trabalha por ti?"
- Subtítulo: "Respondo em menos de 24 horas."
- Botão WhatsApp + Email

### 9. Footer
- Logo WEBVAZ
- Links rápidos
- Email: davimachadovaz@gmail.com
- Copyright 2026 WEBVAZ

---

## Ficheiros

```
webvaz/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
        └── (placeholders gerados via CSS gradient)
```

## Decisões

- Sem framework — HTML puro para deploy simples no Hostinger
- Imagens do portfólio: gradientes CSS coloridos como placeholder (sem ficheiros externos)
- Formulário de contacto: `mailto:` link por agora (sem backend)
- GSAP e AOS via CDN (sem npm necessário)
