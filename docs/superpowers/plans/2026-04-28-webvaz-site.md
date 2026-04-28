# WEBVAZ Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir o site de portfólio/agência WEBVAZ em HTML + CSS + GSAP, pronto para publicar no GitHub.

**Architecture:** Página única (`index.html`) com `css/style.css` e `js/main.js`. Sem build step — abrir `index.html` diretamente no browser para ver. GSAP e AOS carregados via CDN. Imagens do portfólio substituídas por gradientes CSS.

**Tech Stack:** HTML5, CSS3 (custom properties), GSAP 3 (CDN), AOS 2 (CDN), Git

---

## File Map

| Ficheiro | Responsabilidade |
|----------|-----------------|
| `index.html` | Estrutura completa da página, todas as secções |
| `css/style.css` | Todos os estilos, variáveis CSS, responsivo |
| `js/main.js` | Menu mobile, animações GSAP, init AOS |

---

## Task 1: Inicializar projeto e estrutura de ficheiros

**Files:**
- Create: `index.html`
- Create: `css/style.css`
- Create: `js/main.js`

- [ ] **Step 1: Criar pastas e ficheiros vazios**

```bash
cd C:/Projetos/web/webvaz
mkdir css js assets
touch index.html css/style.css js/main.js
```

- [ ] **Step 2: Inicializar git**

```bash
git init
git add .
git commit -m "chore: initialize webvaz project structure"
```

- [ ] **Step 3: Verificar**

Resultado esperado: pasta `webvaz/` com `index.html`, `css/style.css`, `js/main.js` e `.git/`

---

## Task 2: HTML completo — todas as secções

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Escrever o index.html completo**

Substituir o conteúdo de `index.html` por:

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WEBVAZ — Criação de Sites Profissionais em Portugal</title>
  <meta name="description" content="Criamos sites profissionais para pequenos negócios em Portugal. Rápidos, modernos e que aparecem no Google.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- NAV -->
  <nav class="nav" id="nav">
    <div class="nav__container">
      <a href="#inicio" class="nav__logo">WEB<span>VAZ</span></a>
      <ul class="nav__links" id="navLinks">
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#precos">Preços</a></li>
        <li><a href="#contacto" class="nav__cta">Pedir Orçamento</a></li>
      </ul>
      <button class="nav__hamburger" id="hamburger" aria-label="Abrir menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="inicio">
    <div class="hero__bg"></div>
    <div class="hero__container">
      <span class="hero__tag">Agência de Criação de Sites</span>
      <h1 class="hero__title">O teu negócio merece<br>um site que <span>vende.</span></h1>
      <p class="hero__sub">Criamos sites profissionais para pequenos negócios em Portugal — rápidos, modernos e que aparecem no Google.</p>
      <div class="hero__ctas">
        <a href="#contacto" class="btn btn--primary">Pedir Orçamento Grátis</a>
        <a href="#portfolio" class="btn btn--ghost">Ver Portfólio</a>
      </div>
      <div class="hero__stat">
        <strong>10+</strong>
        <span>clientes satisfeitos</span>
      </div>
    </div>
  </section>

  <!-- SERVIÇOS -->
  <section class="services" id="servicos">
    <div class="container">
      <h2 data-aos="fade-up">O que fazemos</h2>
      <div class="services__grid">
        <div class="service-card" data-aos="fade-up" data-aos-delay="0">
          <div class="service-card__icon">🌐</div>
          <h3>Sites Institucionais</h3>
          <p>Presença online profissional para a tua empresa. Design moderno, rápido e adaptado a todos os dispositivos.</p>
        </div>
        <div class="service-card" data-aos="fade-up" data-aos-delay="100">
          <div class="service-card__icon">🛒</div>
          <h3>Lojas Online</h3>
          <p>Vende os teus produtos 24h por dia, todos os dias. Pagamentos seguros e gestão simples.</p>
        </div>
        <div class="service-card" data-aos="fade-up" data-aos-delay="200">
          <div class="service-card__icon">🔧</div>
          <h3>Manutenção Mensal</h3>
          <p>Nós tratamos do teu site, tu tratas do teu negócio. Atualizações, segurança e suporte incluídos.</p>
        </div>
        <div class="service-card" data-aos="fade-up" data-aos-delay="300">
          <div class="service-card__icon">📈</div>
          <h3>SEO</h3>
          <p>Aparece no Google quando os teus clientes pesquisam. Mais visibilidade, mais clientes, mais vendas.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PORTFÓLIO -->
  <section class="portfolio" id="portfolio">
    <div class="container">
      <h2 data-aos="fade-up">Trabalhos recentes</h2>
      <div class="portfolio__grid">
        <div class="portfolio-card" data-aos="fade-up">
          <div class="portfolio-card__img portfolio-card__img--1"></div>
          <div class="portfolio-card__body">
            <span class="portfolio-card__tag">Site Institucional</span>
            <h3>Restaurante O Tasqueiro</h3>
            <a href="#" class="btn btn--ghost btn--sm">Ver projeto →</a>
          </div>
        </div>
        <div class="portfolio-card" data-aos="fade-up" data-aos-delay="100">
          <div class="portfolio-card__img portfolio-card__img--2"></div>
          <div class="portfolio-card__body">
            <span class="portfolio-card__tag">Site + Marcações Online</span>
            <h3>Salão Prestige</h3>
            <a href="#" class="btn btn--ghost btn--sm">Ver projeto →</a>
          </div>
        </div>
        <div class="portfolio-card" data-aos="fade-up" data-aos-delay="200">
          <div class="portfolio-card__img portfolio-card__img--3"></div>
          <div class="portfolio-card__body">
            <span class="portfolio-card__tag">E-commerce</span>
            <h3>Loja Artesanato Local</h3>
            <a href="#" class="btn btn--ghost btn--sm">Ver projeto →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- COMO FUNCIONA -->
  <section class="process" id="processo">
    <div class="container">
      <h2 data-aos="fade-up">Do briefing ao lançamento</h2>
      <div class="process__steps">
        <div class="process-step" data-aos="fade-up">
          <span class="process-step__num">01</span>
          <h3>Briefing</h3>
          <p>Contamos sobre o teu negócio e o que precisas.</p>
        </div>
        <div class="process-step" data-aos="fade-up" data-aos-delay="100">
          <span class="process-step__num">02</span>
          <h3>Design</h3>
          <p>Criamos o visual personalizado em 48 horas.</p>
        </div>
        <div class="process-step" data-aos="fade-up" data-aos-delay="200">
          <span class="process-step__num">03</span>
          <h3>Desenvolvimento</h3>
          <p>Construímos e testamos cada detalhe do site.</p>
        </div>
        <div class="process-step" data-aos="fade-up" data-aos-delay="300">
          <span class="process-step__num">04</span>
          <h3>Entrega</h3>
          <p>Site no ar em menos de 7 dias.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- DEPOIMENTOS -->
  <section class="testimonials" id="depoimentos">
    <div class="container">
      <h2 data-aos="fade-up">O que dizem os clientes</h2>
      <div class="testimonials__grid">
        <div class="testimonial-card" data-aos="fade-up">
          <p>"O Davi entregou o site em menos de uma semana e os clientes adoram! As reservas online dispararam."</p>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">JS</div>
            <div>
              <strong>João Silva</strong>
              <span>Restaurante O Tasqueiro</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="150">
          <p>"As marcações online triplicaram depois do novo site. Recomendo a 100%! Serviço profissional e rápido."</p>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">AF</div>
            <div>
              <strong>Ana Ferreira</strong>
              <span>Salão Prestige</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PREÇOS -->
  <section class="pricing" id="precos">
    <div class="container">
      <h2 data-aos="fade-up">Investimento transparente</h2>
      <p class="section-sub" data-aos="fade-up">Sem surpresas. Preços fixos, entrega garantida.</p>
      <div class="pricing__grid">
        <div class="pricing-card" data-aos="fade-up">
          <h3>Landing Page</h3>
          <div class="pricing-card__price"><span>300€</span></div>
          <ul>
            <li>✓ 1 página profissional</li>
            <li>✓ Formulário de contacto</li>
            <li>✓ Adaptado a mobile</li>
            <li>✓ Entrega em 3 dias</li>
          </ul>
          <a href="#contacto" class="btn btn--ghost">Escolher</a>
        </div>
        <div class="pricing-card pricing-card--featured" data-aos="fade-up" data-aos-delay="100">
          <span class="pricing-card__badge">Mais popular</span>
          <h3>Site Completo</h3>
          <div class="pricing-card__price"><span>600€</span></div>
          <ul>
            <li>✓ Até 5 páginas</li>
            <li>✓ SEO básico incluído</li>
            <li>✓ Blog opcional</li>
            <li>✓ Entrega em 7 dias</li>
          </ul>
          <a href="#contacto" class="btn btn--primary">Escolher</a>
        </div>
        <div class="pricing-card" data-aos="fade-up" data-aos-delay="200">
          <h3>Loja Online</h3>
          <div class="pricing-card__price"><span>1.200€</span></div>
          <ul>
            <li>✓ E-commerce completo</li>
            <li>✓ Pagamentos online</li>
            <li>✓ Gestão de produtos</li>
            <li>✓ Entrega em 14 dias</li>
          </ul>
          <a href="#contacto" class="btn btn--ghost">Escolher</a>
        </div>
      </div>
      <p class="pricing__note" data-aos="fade-up">Manutenção mensal disponível a partir de <strong>30€/mês</strong></p>
    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="cta-final" id="contacto">
    <div class="container">
      <h2 data-aos="fade-up">Pronto para ter um site que trabalha por ti?</h2>
      <p data-aos="fade-up">Respondo em menos de 24 horas.</p>
      <div class="cta-final__btns" data-aos="fade-up">
        <a href="https://wa.me/351XXXXXXXXX" class="btn btn--dark" target="_blank" rel="noopener">💬 WhatsApp</a>
        <a href="mailto:davimachadovaz@gmail.com" class="btn btn--dark">✉️ Enviar Email</a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <a href="#inicio" class="nav__logo">WEB<span>VAZ</span></a>
      <ul class="footer__links">
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#precos">Preços</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <p>© 2026 WEBVAZ. Todos os direitos reservados.</p>
    </div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verificar**

Abrir `index.html` no browser (duplo clique ou arrastar para Chrome/Edge).
Esperado: página carrega, fundo escuro `#0D192B`, sem erros na consola, todas as secções visíveis sem estilos ainda.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add complete HTML structure for all sections"
```

---

## Task 3: CSS — Base, variáveis, nav e hero

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Escrever CSS base, variáveis, botões, nav e hero**

Substituir o conteúdo de `css/style.css` por:

```css
/* ===== VARIABLES & RESET ===== */
:root {
  --bg: #0D192B;
  --accent: #07F9A2;
  --accent-2: #09C184;
  --mid: #0A8967;
  --card: #0C5149;
  --text: #FFFFFF;
  --text-muted: #B0C4BE;
  --max-width: 1200px;
  --radius: 12px;
  --transition: 0.3s ease;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
}
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* ===== LAYOUT ===== */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}
section { padding: 100px 0; }
h2 {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  margin-bottom: 16px;
}
.section-sub {
  color: var(--text-muted);
  font-size: 18px;
  margin-bottom: 60px;
}

/* ===== BUTTONS ===== */
.btn {
  display: inline-block;
  padding: 14px 28px;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 15px;
  transition: var(--transition);
  cursor: pointer;
  border: 2px solid transparent;
}
.btn--primary { background: var(--accent); color: var(--bg); }
.btn--primary:hover { background: var(--accent-2); transform: translateY(-2px); }
.btn--ghost { border-color: var(--accent); color: var(--accent); }
.btn--ghost:hover { background: var(--accent); color: var(--bg); transform: translateY(-2px); }
.btn--dark { background: var(--bg); color: var(--accent); border-color: var(--bg); }
.btn--dark:hover { background: rgba(13,25,43,0.8); transform: translateY(-2px); }
.btn--sm { padding: 8px 16px; font-size: 14px; }

/* ===== NAV ===== */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 20px 0;
  background: rgba(13,25,43,0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(7,249,162,0.1);
  transition: padding var(--transition);
}
.nav__container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__logo { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
.nav__logo span { color: var(--accent); }
.nav__links { display: flex; align-items: center; gap: 32px; }
.nav__links a { color: var(--text-muted); font-weight: 500; transition: color var(--transition); }
.nav__links a:hover { color: var(--accent); }
.nav__cta {
  background: var(--accent) !important;
  color: var(--bg) !important;
  padding: 10px 20px;
  border-radius: var(--radius);
  font-weight: 600 !important;
}
.nav__cta:hover { background: var(--accent-2) !important; color: var(--bg) !important; }
.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav__hamburger span { display: block; width: 24px; height: 2px; background: var(--text); transition: var(--transition); }

/* ===== HERO ===== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 100px;
  overflow: hidden;
}
.hero__bg {
  position: absolute;
  top: -200px; right: -200px;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(7,249,162,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.hero__container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}
.hero__tag {
  display: inline-block;
  background: rgba(7,249,162,0.12);
  color: var(--accent);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 24px;
  border: 1px solid rgba(7,249,162,0.25);
}
.hero__title {
  font-size: clamp(42px, 7vw, 80px);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -2px;
}
.hero__title span { color: var(--accent); }
.hero__sub {
  font-size: 18px;
  color: var(--text-muted);
  max-width: 560px;
  margin-bottom: 40px;
  line-height: 1.7;
}
.hero__ctas { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 60px; }
.hero__stat { display: flex; align-items: center; gap: 12px; }
.hero__stat strong { font-size: 40px; font-weight: 800; color: var(--accent); }
.hero__stat span { color: var(--text-muted); font-size: 15px; }
```

- [ ] **Step 2: Verificar**

Abrir `index.html` no browser.
Esperado: nav fixo no topo (transparente com blur), hero com título grande em branco, "vende." em verde mint, botões estilizados, fundo dark navy com glow radial no canto superior direito.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add base styles, nav and hero CSS"
```

---

## Task 4: CSS — Serviços, Portfólio, Como Funciona

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Adicionar estilos das secções no final de style.css**

Adicionar ao **fim** de `css/style.css`:

```css
/* ===== SERVICES ===== */
.services { background: rgba(12,81,73,0.15); }
.services h2 { margin-bottom: 60px; }
.services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}
.service-card {
  background: var(--card);
  border: 1px solid rgba(7,249,162,0.1);
  border-radius: var(--radius);
  padding: 32px;
  transition: var(--transition);
}
.service-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(7,249,162,0.15);
}
.service-card__icon { font-size: 36px; margin-bottom: 20px; }
.service-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 12px; }
.service-card p { color: var(--text-muted); font-size: 15px; line-height: 1.6; }

/* ===== PORTFOLIO ===== */
.portfolio h2 { margin-bottom: 60px; }
.portfolio__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
.portfolio-card {
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--card);
  border: 1px solid rgba(7,249,162,0.1);
  transition: var(--transition);
}
.portfolio-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(7,249,162,0.15);
}
.portfolio-card__img { height: 200px; }
.portfolio-card__img--1 { background: linear-gradient(135deg, #0A8967 0%, #07F9A2 100%); }
.portfolio-card__img--2 { background: linear-gradient(135deg, #09C184 0%, #0C5149 100%); }
.portfolio-card__img--3 { background: linear-gradient(135deg, #0D192B 0%, #0A8967 100%); }
.portfolio-card__body { padding: 24px; }
.portfolio-card__tag {
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 8px;
}
.portfolio-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 16px; }

/* ===== PROCESS ===== */
.process { background: rgba(12,81,73,0.1); }
.process h2 { margin-bottom: 60px; }
.process__steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
}
.process-step { text-align: center; }
.process-step__num {
  display: block;
  font-size: 64px;
  font-weight: 800;
  color: var(--accent);
  opacity: 0.3;
  line-height: 1;
  margin-bottom: 12px;
}
.process-step h3 { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
.process-step p { color: var(--text-muted); font-size: 15px; }
```

- [ ] **Step 2: Verificar**

Fazer scroll na página.
Esperado: cards de serviços com fundo `#0C5149`, hover levanta o card e acende borda mint; portfólio com 3 cards de gradiente; secção de processo com números grandes e transparentes.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add services, portfolio and process CSS"
```

---

## Task 5: CSS — Depoimentos, Preços, CTA, Footer, Responsivo

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Adicionar estilos restantes no fim de style.css**

Adicionar ao **fim** de `css/style.css`:

```css
/* ===== TESTIMONIALS ===== */
.testimonials h2 { margin-bottom: 60px; }
.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
.testimonial-card {
  background: var(--card);
  border: 1px solid rgba(7,249,162,0.1);
  border-radius: var(--radius);
  padding: 32px;
}
.testimonial-card > p {
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 24px;
  font-style: italic;
}
.testimonial-card__author { display: flex; align-items: center; gap: 12px; }
.testimonial-card__avatar {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--mid));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: var(--bg);
  flex-shrink: 0;
}
.testimonial-card__author strong { display: block; font-weight: 700; }
.testimonial-card__author span { font-size: 13px; color: var(--text-muted); }

/* ===== PRICING ===== */
.pricing { background: rgba(12,81,73,0.1); }
.pricing h2 { margin-bottom: 12px; }
.pricing__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}
.pricing-card {
  background: var(--card);
  border: 1px solid rgba(7,249,162,0.1);
  border-radius: var(--radius);
  padding: 32px;
  position: relative;
  transition: var(--transition);
}
.pricing-card--featured {
  border-color: var(--accent);
  box-shadow: 0 0 40px rgba(7,249,162,0.15);
}
.pricing-card__badge {
  position: absolute;
  top: -14px; left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  color: var(--bg);
  padding: 4px 16px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}
.pricing-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 16px; }
.pricing-card__price { margin-bottom: 24px; }
.pricing-card__price span { font-size: 48px; font-weight: 800; color: var(--accent); }
.pricing-card ul { margin-bottom: 32px; display: flex; flex-direction: column; gap: 10px; }
.pricing-card li { color: var(--text-muted); font-size: 15px; }
.pricing__note { text-align: center; color: var(--text-muted); }
.pricing__note strong { color: var(--accent); }

/* ===== CTA FINAL ===== */
.cta-final {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
  text-align: center;
}
.cta-final h2 {
  color: var(--bg);
  font-size: clamp(28px, 4vw, 44px);
  max-width: 700px;
  margin: 0 auto 16px;
}
.cta-final p { color: rgba(13,25,43,0.7); font-size: 18px; margin-bottom: 40px; }
.cta-final__btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

/* ===== FOOTER ===== */
.footer {
  background: rgba(0,0,0,0.3);
  padding: 40px 0;
  border-top: 1px solid rgba(7,249,162,0.1);
}
.footer .container { display: flex; flex-direction: column; align-items: center; gap: 24px; text-align: center; }
.footer__links { display: flex; gap: 32px; flex-wrap: wrap; justify-content: center; }
.footer__links a { color: var(--text-muted); font-size: 14px; transition: color var(--transition); }
.footer__links a:hover { color: var(--accent); }
.footer p { color: var(--text-muted); font-size: 13px; }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .nav__links {
    display: none;
    position: fixed;
    top: 72px; left: 0; right: 0;
    background: var(--bg);
    flex-direction: column;
    padding: 24px;
    gap: 24px;
    border-bottom: 1px solid rgba(7,249,162,0.1);
    z-index: 99;
  }
  .nav__links.open { display: flex; }
  .nav__hamburger { display: flex; }

  section { padding: 60px 0; }
  .hero__title { letter-spacing: -1px; }
  .hero__ctas { flex-direction: column; align-items: flex-start; }

  .services__grid,
  .portfolio__grid,
  .testimonials__grid,
  .pricing__grid { grid-template-columns: 1fr; }

  .process__steps { grid-template-columns: 1fr 1fr; }
  .cta-final__btns { flex-direction: column; align-items: center; }
}

@media (max-width: 480px) {
  .process__steps { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2: Verificar**

Abrir `index.html`, fazer scroll até ao final.
Esperado: depoimentos com avatar verde, preços com card central destacado, CTA com fundo mint→verde, footer escuro. Redimensionar para 375px: menu hamburger aparece, todas as grids passam a 1 coluna.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add testimonials, pricing, CTA, footer and responsive CSS"
```

---

## Task 6: JavaScript — Menu mobile, GSAP e AOS

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Escrever main.js completo**

Substituir `js/main.js` por:

```javascript
// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.style.padding = window.scrollY > 60 ? '12px 0' : '20px 0';
});

// GSAP hero entrance animations
gsap.from('.hero__tag',   { opacity: 0, y: 30, duration: 0.8, delay: 0.2, ease: 'power3.out' });
gsap.from('.hero__title', { opacity: 0, y: 50, duration: 0.9, delay: 0.4, ease: 'power3.out' });
gsap.from('.hero__sub',   { opacity: 0, y: 30, duration: 0.8, delay: 0.6, ease: 'power3.out' });
gsap.from('.hero__ctas',  { opacity: 0, y: 20, duration: 0.7, delay: 0.8, ease: 'power3.out' });
gsap.from('.hero__stat',  { opacity: 0, y: 20, duration: 0.7, delay: 1.0, ease: 'power3.out' });

// AOS scroll animations init
AOS.init({
  duration: 700,
  once: true,
  offset: 80,
  easing: 'ease-out-cubic',
});
```

- [ ] **Step 2: Verificar**

Recarregar `index.html` no browser.
Esperado: ao abrir, os elementos do hero aparecem um a um com fade+slide. Ao fazer scroll, os cards aparecem com animação. Em mobile (<768px), o botão hamburger abre/fecha o menu.

- [ ] **Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: add GSAP hero animations, AOS scroll init and mobile menu"
```

---

## Task 7: Atualizar WhatsApp e criar repositório no GitHub

**Files:**
- Modify: `index.html` (número WhatsApp)

- [ ] **Step 1: Atualizar número de WhatsApp**

Em `index.html`, encontrar a linha:
```html
<a href="https://wa.me/351XXXXXXXXX" class="btn btn--dark" target="_blank" rel="noopener">💬 WhatsApp</a>
```

Substituir `351XXXXXXXXX` pelo teu número no formato internacional sem espaços (ex: `351912345678`).

- [ ] **Step 2: Commit final**

```bash
git add index.html
git commit -m "feat: complete WEBVAZ portfolio site v1.0"
```

- [ ] **Step 3: Criar repositório no GitHub**

1. Ir a [github.com/new](https://github.com/new)
2. Repository name: `webvaz`
3. Visibility: **Private** (para proteger o código)
4. **Não** inicializar com README (já temos ficheiros)
5. Clicar "Create repository"
6. Copiar o URL do repo (ex: `https://github.com/davimachadovaz/webvaz.git`)

- [ ] **Step 4: Ligar e fazer push**

```bash
git remote add origin https://github.com/SEU_USERNAME/webvaz.git
git branch -M main
git push -u origin main
```

- [ ] **Step 5: Verificar**

Ir ao GitHub e confirmar que todos os ficheiros estão no repositório.
