---
title: "Skill Project Style Guide & Design Tokens"
description: "Guia de estilo oficial, design tokens e especificações de UI para o site de Daiani Josino - Massoterapeuta & Spa"
---

# Style Guide & Design Tokens: Daiani Josino - Massoterapia & Spa

Este documento define o Design System, a identidade visual, a escala tipográfica, os componentes fundamentais e os tokens técnicos para o desenvolvimento do site institucional e de agendamento de **Daiani Josino**.

---

## 1. Identidade Visual e Moodboard Conceitual

### Conceito de Design
- **Atmosfera Visual:** Serenidade orgânica, sofisticação acolhedora e minimalismo contemporâneo. O visual transmite sensação imediata de refúgio, relaxamento profundo, cuidado holístico e profissionalismo de alto padrão.
- **Proposta de Valor Percebida:** Um espaço exclusivo de bem-estar feminino onde a técnica terapêutica precisa se une à delicadeza do toque e ao conforto sensorial. A identidade evita clichês estéticos excessivamente clínicos ou puramente rústicos, posicionando a marca em um patamar *boutique spa* moderno.

### Princípios de Design
1. **Respiração e Serenidade (Espaço em Branco Ativo):** O layout deve priorizar generosidade de espaços em branco e arejamento visual, reduzindo ruídos cognitivos e induzindo tranquilidade imediata na navegação.
2. **Organicidade Sofisticada:** Harmonia entre tons terrosos suaves (areia quente), notas botânicas calmantes (verde sálvia) e formas orgânicas sutis (cantos arredondados, sombras suaves difusas que imitam luz natural).
3. **Clareza & Confiança Acessível:** Informações sobre procedimentos, indicações, benefícios e botões de ação (como agendamento no WhatsApp) com hierarquia imediata, legibilidade cristalina e contraste em conformidade com as diretrizes WCAG 2.1 AA/AAA.
4. **Toque Humano e Sensorial:** Texturas visuais macias, micro-interações gentis (transições suaves sem movimentos bruscos) e fotografia com luz natural, transmitindo acolhimento e respeito ao corpo feminino.

---

## 2. Paleta de Cores & Tokens Semânticos

A paleta foi concebida para o **Light Mode** prioritário, com base em fundos claros, verde sálvia botânico para estabilidade e cura, areia quente para toque aconchegante e neutros refinados.

### 2.1 Brand Colors
| Token | Cor / Função | HEX | RGB | Descrição / Uso |
| :--- | :--- | :--- | :--- | :--- |
| `color-primary-base` | Verde Sálvia Elegante | `#4E6B56` | `rgb(78, 107, 86)` | Ação principal, CTAs fortes, títulos de destaque e ícones de serviço. Alto contraste em fundo claro (WCAG AA/AAA). |
| `color-primary-hover` | Sálvia Profundo | `#3D5443` | `rgb(61, 84, 67)` | Estado de foco/hover de botões primários e links em destaque. |
| `color-primary-light` | Sálvia Suave | `#8EA895` | `rgb(142, 168, 149)` | Acentos visuais, tags ativas, badges e divisores temáticos. |
| `color-primary-subtle`| Bruma de Sálvia | `#EBF1ED` | `rgb(235, 241, 237)` | Fundo de destaque sutil, cartões selecionados e caixas de benefício. |
| `color-secondary-base`| Areia Quente | `#D8CBBF` | `rgb(216, 203, 191)` | Botões secundários, barras de destaque e contêineres táteis. |
| `color-secondary-hover`| Areia Tostada | `#C6B5A6` | `rgb(198, 181, 166)` | Hover de elementos secundários. |
| `color-secondary-subtle`| Areia Clara / Linho | `#F6F3EF` | `rgb(246, 243, 239)` | Fundo alternado de seções, caixas de depoimentos e cards de serviços. |
| `color-accent-base` | Argila Rosada / Terracota Suave | `#B8826D` | `rgb(184, 130, 109)` | Detalhes de charme, marcadores de novidades, estrelas de avaliação e destaques femininos sutis. |
| `color-accent-subtle`| Nude Floral | `#FAF1ED` | `rgb(250, 241, 237)` | Tags de tratamentos corporais e alertas suaves de autocuidado. |

### 2.2 Neutrals & Surfaces
| Token | Nome | HEX | RGB | Descrição / Uso |
| :--- | :--- | :--- | :--- | :--- |
| `color-bg-base` | Branco Puro | `#FFFFFF` | `rgb(255, 255, 255)` | Fundo principal da página, cards elevados e popovers. |
| `color-bg-muted` | Off-White / Alabastro | `#FBFBF9` | `rgb(251, 251, 249)` | Fundo padrão do body para conforto ocular prolongado. |
| `color-surface-card` | Branco Superfície | `#FFFFFF` | `rgb(255, 255, 255)` | Cards de procedimento, tabela de preços e modais. |
| `color-surface-sunken`| Areia Suave de Seção | `#F4EFEA` | `rgb(244, 239, 234)` | Background de seções contrastantes (ex: Sobre a Daiani, Depoimentos, FAQ). |
| `color-border-subtle` | Linho Sutil | `#EDE8E1` | `rgb(237, 232, 225)` | Linhas divisórias leves e bordas de cards inativos. |
| `color-border-medium` | Borda Neutra | `#D9D2C7` | `rgb(217, 210, 199)` | Bordas de inputs, botões outlined e divisores de conteúdo. |
| `color-border-focus` | Anel de Foco Sálvia | `#4E6B56` | `rgb(78, 107, 86)` | Indicador de foco de acessibilidade (outline/ring). |

### 2.3 Text & Foreground
| Token | Nome | HEX | RGB | Descrição / Uso |
| :--- | :--- | :--- | :--- | :--- |
| `color-text-primary` | Grafite Orgânico | `#1E2521` | `rgb(30, 37, 33)` | Textos principais, H1 a H4 e parágrafos de alta legibilidade (Contraste 13.5:1 no branco). |
| `color-text-secondary`| Oliva Carvão Suave | `#525D55` | `rgb(82, 93, 85)` | Subtítulos, descrições secundárias, legendas e textos de suporte. |
| `color-text-muted` | Cinza Herbal Claro | `#838F86` | `rgb(131, 143, 134)` | Placeholders de formulário, notas de rodapé e metadados. |
| `color-text-disabled` | Neutro Desabilitado | `#B3BDB6` | `rgb(179, 189, 182)` | Textos de botões e campos desativados. |
| `color-text-inverse` | Branco Puro | `#FFFFFF` | `rgb(255, 255, 255)` | Texto sobre botões primários e backgrounds escuros. |

### 2.4 Semantic & Feedback
| Token | Função | HEX | RGB | Descrição / Uso |
| :--- | :--- | :--- | :--- | :--- |
| `color-success-base` | Sucesso / Agendado | `#3E7352` | `rgb(62, 115, 82)` | Mensagens de sucesso, confirmação de agendamento e badges de status livre. |
| `color-success-subtle`| Sucesso Fundo | `#EAF4EE` | `rgb(234, 244, 238)` | Fundo de alertas e badges positivos. |
| `color-warning-base` | Atenção | `#C4842B` | `rgb(196, 132, 43)` | Avisos de vagas limitadas, horários de tolerância e lembretes pré-massagem. |
| `color-warning-subtle`| Atenção Fundo | `#FDF6E9` | `rgb(253, 246, 233)` | Fundo de notificações de aviso. |
| `color-error-base` | Erro / Alerta | `#BD453E` | `rgb(189, 69, 62)` | Mensagens de erro de validação em formulários e cancelamento. |
| `color-error-subtle` | Erro Fundo | `#FDF0EF` | `rgb(253, 240, 239)` | Fundo de alertas críticos de formulário. |
| `color-info-base` | Informativo | `#477685` | `rgb(71, 118, 133)` | Informações adicionais sobre contraindicações de massagens e orientações. |
| `color-info-subtle` | Informativo Fundo | `#ECF4F7` | `rgb(236, 244, 247)` | Fundo de caixas explicativas de técnicas de massoterapia. |

---

## 3. Escala Tipográfica (Typography Scale)

### Font Families
- **Fonte Primária (UI & Textos):** `Plus Jakarta Sans`, sans-serif (Google Fonts). Fonte geométrica moderna com curvas gentis, altamente legível e humanizada, perfeita para marcas sofisticadas de bem-estar.
- **Fonte de Exibição / Editorial (Opcional para H1 e Citações):** `Cormorant Garamond` ou `Playfair Display`, serif (Google Fonts) — reservada para títulos heroicos ou frases de efeito de autocuidado, trazendo sofisticação editorial clássica de spa.
- **Fonte Fallback:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.

### Tabela de Hierarquia Tipográfica
| Token / Tag | Font-Size (px) | Font-Size (rem) | Line-Height | Font-Weight | Letter-Spacing | Aplicação Típica |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `text-display` | 48px – 56px | 3.0rem – 3.5rem | 1.15 | 600 (SemiBold) | -0.025em | Hero da Home ("Harmonia e Bem-Estar para o Seu Corpo") |
| `text-h1` | 36px – 40px | 2.25rem – 2.5rem| 1.20 | 600 (SemiBold) | -0.02em | Títulos de Seção ("Massagens Especializadas", "Sobre Mim") |
| `text-h2` | 28px – 32px | 1.75rem – 2.0rem| 1.25 | 600 (SemiBold) | -0.015em | Subtítulos de Seções e Títulos de Módulos |
| `text-h3` | 22px – 24px | 1.375rem – 1.5rem| 1.35 | 500 (Medium) | -0.01em | Nomes de Serviços individuais ("Drenagem Linfática Método Exclusivo") |
| `text-h4` | 18px – 20px | 1.125rem – 1.25rem| 1.40 | 500 (Medium) | 0.00em | Títulos de cards, perguntas frequentes do FAQ e tópicos |
| `text-body-lg` | 18px | 1.125rem | 1.65 | 400 (Regular) | 0.00em | Parágrafo introdutório do Hero e frases de destaque |
| `text-body-base`| 16px | 1.0rem | 1.60 | 400 (Regular) | 0.00em | Texto corrido de apresentação dos serviços e artigos |
| `text-body-sm` | 14px | 0.875rem | 1.50 | 400 (Regular) | +0.005em | Detalhes adicionais, descrições de rodapé e labels secundárias |
| `text-caption` | 12px | 0.75rem | 1.40 | 400 (Regular) | +0.02em | Informações de copyright, horários e termos de atendimento |
| `text-overline`| 12px | 0.75rem | 1.20 | 600 (SemiBold) | +0.08em (Uppercase)| Eyebrow / Tag superior de seção ("SPA & BEM-ESTAR FEMININO") |
| `text-button` | 15px | 0.9375rem | 1.25 | 500 (Medium) | +0.01em | Rótulos de botões de agendamento e navegação |

---

## 4. Espaçamento, Grid e Elevação

### 4.1 Escala de Espaçamento (Base 4px / 8px)
| Token | Valor (px) | Valor (rem) | Uso Típico |
| :--- | :--- | :--- | :--- |
| `space-1` | 4px | 0.25rem | Espaçamentos mínimos, gaps de ícones compactos |
| `space-2` | 8px | 0.5rem | Gap interno entre ícone e texto de botões |
| `space-3` | 12px | 0.75rem | Padding vertical de inputs e botões compactos |
| `space-4` | 16px | 1.0rem | Padding padrão de botões e espaçamento de listas |
| `space-6` | 24px | 1.5rem | Padding interno de cards de serviço |
| `space-8` | 32px | 2.0rem | Gap entre colunas de grid de serviços |
| `space-10`| 40px | 2.5rem | Margem entre blocos de conteúdo |
| `space-12`| 48px | 3.0rem | Espaçamento vertical entre tópicos |
| `space-16`| 64px | 4.0rem | Padding vertical padrão de seções (mobile) |
| `space-20`| 80px | 5.0rem | Padding vertical padrão de seções (desktop) |
| `space-24`| 96px | 6.0rem | Separação de seções nobres e do Hero |

### 4.2 Border Radius (Organic & Modern)
- `radius-none`: `0px`
- `radius-sm`: `6px` (tags pequenas, tooltips, checkboxes)
- `radius-md`: `10px` (inputs de formulário, botões secundários)
- `radius-lg`: `14px` (botões primários de agendamento, caixas de diálogo)
- `radius-xl`: `20px` (cards de serviços, depoimentos, fotos com cantos suavizados)
- `radius-2xl`: `28px` (contêineres de destaque, cards de planos e pacotes)
- `radius-full`: `9999px` (pills de categoria, avatares circulares e botão flutuante de WhatsApp)

### 4.3 Sombras & Elevação (Soft Spa Diffuse)
Sombras com tonalidade quente levemente esverdeada/arenosa, simulando iluminação ambiente relaxante sem criar cinzas artificiais duros:
- **Shadow Flat / Border:** `0 0 0 1px rgba(217, 210, 199, 0.6)` (delimitador ultra-leve).
- **Shadow Soft (Card Padrão):** `0 4px 20px -2px rgba(60, 72, 64, 0.05), 0 2px 6px -1px rgba(60, 72, 64, 0.03)`
- **Shadow Hover (Card Elevado / Ação):** `0 12px 28px -4px rgba(60, 72, 64, 0.09), 0 4px 10px -2px rgba(60, 72, 64, 0.04)`
- **Shadow Float (Botão Flutuante WhatsApp / Modal):** `0 20px 38px -6px rgba(60, 72, 64, 0.14), 0 8px 16px -4px rgba(60, 72, 64, 0.06)`

---

## 5. Componentes Principais (UI Patterns)

### 5.1 Botões

#### Botão Primário (Agendamento / Ação Principal)
- **Visual:** Background Verde Sálvia (`#4E6B56`), Texto Branco (`#FFFFFF`), Border-radius `14px`, Font-weight `500`, Padding `14px 28px`.
- **Hover:** Background Sálvia Profundo (`#3D5443`), elevação `Shadow Hover`, transição suave `all 200ms ease`.
- **Active:** Scale leve de `0.98`, background `#344739`.
- **Disabled:** Background `#D9E2DC`, texto `#8CA093`, cursor `not-allowed`, sem sombra.
- **Focus-Visible:** Outline de `2px` com offset de `2px` em `#4E6B56`.

#### Botão Secundário (Saiba Mais / Conhecer Técnicas)
- **Visual:** Background Areia Quente (`#D8CBBF`), Texto Grafite Orgânico (`#1E2521`), Border-radius `14px`, Font-weight `500`, Padding `14px 28px`.
- **Hover:** Background Areia Tostada (`#C6B5A6`), transição `all 200ms ease`.
- **Active:** Background `#BAA797`, scale `0.98`.
- **Disabled:** Background `#ECE6E0`, texto `#AFA499`, cursor `not-allowed`.

#### Botão Ghost / Terciário (Navegação / Links de Menu)
- **Visual:** Background transparente, Texto `#4E6B56`, Padding `10px 18px`.
- **Hover:** Background `#EBF1ED` (Bruma de Sálvia), texto `#3D5443`.
- **Active:** Background `#DCE7E0`.
- **Disabled:** Background transparente, texto `#B3BDB6`.

#### Botão Destructive (Cancelar Horário / Limpar)
- **Visual:** Background `#BD453E`, Texto `#FFFFFF`, Border-radius `14px`.
- **Hover:** Background `#A03832`.
- **Disabled:** Background `#F2C8C5`, texto `#FFFFFF`.

---

### 5.2 Form Inputs

#### Campo de Texto / Select / Textarea
- **Background Padrão:** `#FFFFFF`.
- **Borda Padrão:** `1px solid #D9D2C7` (Borda Neutra).
- **Border-radius:** `10px` (`radius-md`).
- **Padding:** `12px 16px` para altura confortável de 48px (ideal para toque no mobile).
- **Tipografia Interna:** `text-body-base` (`16px`, prevenindo zoom automático em navegadores iOS).
- **Placeholder:** `#838F86` (Cinza Herbal Claro).
- **Estado de Foco (Focus-Visible):** Borda `#4E6B56`, anel de foco `ring-2 ring-[#4E6B56]/20`.
- **Estado Preenchido:** Borda `#B5ADA1`, texto `#1E2521`.
- **Estado de Erro:** Borda `#BD453E`, anel `ring-2 ring-[#BD453E]/20`, mensagem explicativa logo abaixo em `#BD453E` com ícone sutil de aviso.
- **Label:** Fixa acima do campo, `14px`, font-weight `500`, cor `#1E2521`, com espaçamento inferior de `6px`.

---

### 5.3 Cards e Containers

#### Card de Serviço (ex: "Massagem Relaxante com Óleos Essenciais")
- **Background:** `#FFFFFF`.
- **Borda:** `1px solid #EDE8E1`.
- **Border-radius:** `20px` (`radius-xl`).
- **Padding:** `28px` (desktop), `20px` (mobile).
- **Sombra:** `Shadow Soft`.
- **Hover:** Elevação suave com deslocamento `translate-y-[-4px]`, sombra `Shadow Hover`, borda suavizada para `#D9CFC4`.
- **Estrutura Interna:** Tag superior (Overline em `#B8826D` ou `#4E6B56`), Título do serviço em `text-h3`, descrição em `text-body-sm`, duração e valor em destaque com tipografia de peso médio, seguido de botão de agendamento rápido via WhatsApp.

#### Seção Alternada / Container de Acolhimento
- **Background:** `#F4EFEA` (Areia Suave) ou `#F6F3EF`.
- **Bordas:** Sem bordas duras; transição suave por contraste de cor.
- **Padding Vertical:** `80px` a `96px` para transmitir amplitude, luxo e tranquilidade.

---

## 6. Exportação Técnica de Tokens

Abaixo estão os tokens prontos tanto para a especificação **CSS `:root`** quanto para integração com **Tailwind CSS v4** (utilizado no projeto via `@theme inline`) e **Tailwind CSS v3** (`theme.extend`).

### 6.1 Variáveis CSS Globais (`:root`)

```css
:root {
  /* Brand Colors */
  --primary: #4E6B56;
  --primary-foreground: #FFFFFF;
  --primary-hover: #3D5443;
  --primary-light: #8EA895;
  --primary-subtle: #EBF1ED;

  --secondary: #D8CBBF;
  --secondary-foreground: #1E2521;
  --secondary-hover: #C6B5A6;
  --secondary-subtle: #F6F3EF;

  --accent: #B8826D;
  --accent-foreground: #FFFFFF;
  --accent-subtle: #FAF1ED;

  /* Surfaces & Backgrounds */
  --background: #FBFBF9;
  --foreground: #1E2521;
  --card: #FFFFFF;
  --card-foreground: #1E2521;
  --popover: #FFFFFF;
  --popover-foreground: #1E2521;
  --section-muted: #F4EFEA;

  /* Text & Neutral states */
  --muted: #F4EFEA;
  --muted-foreground: #525D55;
  --text-disabled: #B3BDB6;

  /* Borders & Inputs */
  --border: #EDE8E1;
  --input: #D9D2C7;
  --ring: #4E6B56;

  /* Semantic / Feedback */
  --success: #3E7352;
  --success-foreground: #FFFFFF;
  --success-subtle: #EAF4EE;

  --warning: #C4842B;
  --warning-foreground: #FFFFFF;
  --warning-subtle: #FDF6E9;

  --destructive: #BD453E;
  --destructive-foreground: #FFFFFF;
  --destructive-subtle: #FDF0EF;

  --info: #477685;
  --info-foreground: #FFFFFF;
  --info-subtle: #ECF4F7;

  /* Radii */
  --radius-sm: 0.375rem; /* 6px */
  --radius-md: 0.625rem; /* 10px */
  --radius-lg: 0.875rem; /* 14px */
  --radius-xl: 1.25rem;  /* 20px */
  --radius-2xl: 1.75rem; /* 28px */
  --radius-full: 9999px;

  /* Shadows */
  --shadow-soft: 0 4px 20px -2px rgba(60, 72, 64, 0.05), 0 2px 6px -1px rgba(60, 72, 64, 0.03);
  --shadow-hover: 0 12px 28px -4px rgba(60, 72, 64, 0.09), 0 4px 10px -2px rgba(60, 72, 64, 0.04);
  --shadow-float: 0 20px 38px -6px rgba(60, 72, 64, 0.14), 0 8px 16px -4px rgba(60, 72, 64, 0.06);
}
```

### 6.2 Configuração Tailwind CSS v4 (`@theme inline` para `globals.css`)

```css
@theme inline {
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary-hover: var(--primary-hover);
  --color-primary-light: var(--primary-light);
  --color-primary-subtle: var(--primary-subtle);

  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary-hover: var(--secondary-hover);
  --color-secondary-subtle: var(--secondary-subtle);

  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent-subtle: var(--accent-subtle);

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-section-muted: var(--section-muted);

  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
  --color-info: var(--info);
  --color-info-foreground: var(--info-foreground);

  --font-sans: 'Plus Jakarta Sans', var(--font-sans), sans-serif;
  --font-serif: 'Cormorant Garamond', 'Playfair Display', serif;

  --shadow-soft: var(--shadow-soft);
  --shadow-hover: var(--shadow-hover);
  --shadow-float: var(--shadow-float);
}
```

### 6.3 Configuração Legada / Tailwind v3 (`tailwind.config.js`)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4E6B56',
          foreground: '#FFFFFF',
          hover: '#3D5443',
          light: '#8EA895',
          subtle: '#EBF1ED',
        },
        secondary: {
          DEFAULT: '#D8CBBF',
          foreground: '#1E2521',
          hover: '#C6B5A6',
          subtle: '#F6F3EF',
        },
        accent: {
          DEFAULT: '#B8826D',
          foreground: '#FFFFFF',
          subtle: '#FAF1ED',
        },
        sand: {
          50: '#FAF8F5',
          100: '#F4EFEA',
          200: '#E8DFD5',
          300: '#D8CBBF',
          400: '#C6B5A6',
          500: '#B09D8D',
        },
        sage: {
          50: '#F3F6F4',
          100: '#EBF1ED',
          200: '#D2E0D6',
          300: '#A9C2B1',
          400: '#8EA895',
          500: '#4E6B56',
          600: '#3D5443',
          700: '#2E4033',
        },
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(60, 72, 64, 0.05), 0 2px 6px -1px rgba(60, 72, 64, 0.03)',
        hover: '0 12px 28px -4px rgba(60, 72, 64, 0.09), 0 4px 10px -2px rgba(60, 72, 64, 0.04)',
        float: '0 20px 38px -6px rgba(60, 72, 64, 0.14), 0 8px 16px -4px rgba(60, 72, 64, 0.06)',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        xl: '20px',
        '2xl': '28px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'serif'],
      },
    },
  },
};
```
