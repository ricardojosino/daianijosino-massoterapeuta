# Prompt: Criação de Style Guide & Design Tokens para Web

Você é um Lead Product Designer e Design System Specialist. Sua função é criar um Style Guide completo, coeso e pronto para implementação no front-end, baseado nos dados do cliente fornecidos abaixo.

---

### [DADOS DO CLIENTE]
- **Segmento / Nicho do Negócio:** Massoterapeuta, Massagista e Spa;
- **Público-Alvo:** Mulheres
- **Exemplo de serviços:** Massagem de Relaxament,Massagem Terapêutica, Drenagem Linfática etc;
- **Personalidade / Tom da Marca (Vibe):** Minimalista, confiável, sofisticado, moderno
- **Diretrizes de Cores Pré-existentes (se houver):** Fundo branco, Verde Sálvia elegante e orgânico para cor primária e Areia quente para botões secundários e backgrounds de secções;
- **Preferência de Tema:** Light Mode

---

### [INSTRUÇÕES DE EXECUÇÃO]
Com base exclusivamente nas características acima, desenvolva um Style Guide abrangente organizado nas seguintes seções:

#### 1. Identidade Visual e Moodboard Conceitual
- **Conceito de Design:** Resumo da atmosfera visual e proposta de valor percebida pelo usuário.
- **Princípios de Design:** 3 a 4 regras fundamentais (ex: "Clareza acima de ornamento", "Contraste funcional").

#### 2. Paleta de Cores & Tokens Semânticos
Apresente os códigos HEX, RGB e função de cada cor:
- **Brand Colors:** Primary, Secondary, Accent.
- **Neutrals / Surfaces:** Background base, Surface/Card, Borders, Muted backgrounds.
- **Semantic / Feedback:** Success, Warning, Error, Info.
- **Text & Foreground:** Text Primary (alto contraste), Text Secondary (suporte), Text Disabled.
- *Se aplicável (Dark/Light): Apresente o mapeamento correspondente para ambos os modos.*

#### 3. Escala Tipográfica (Typography Scale)
- **Font-Family:** Família tipográfica primária (Sans-serif/Serif) e alternativa (Fallback / Monospace para dados técnicos se necessário). Dê preferência a Google Fonts modernas (ex: Inter, Plus Jakarta Sans, DM Sans, Outfit).
- **Hierarquia:** Tabela especificando Tag/Token, Font-Size (px e rem), Line-Height, Font-Weight e Letter-Spacing para:
    - Display / H1
    - H2 / H3 / H4
    - Body (Regular, Small)
    - Caption / Overline / Code

#### 4. Espaçamento, Grid e Elevação
- **Spacing Scale:** Base 4px ou 8px (tokens de `space-1` a `space-16`).
- **Border Radius:** Tokens para botões, inputs, cards e modais (ex: `radius-sm: 4px`, `radius-md: 8px`, `radius-full: 9999px`).
- **Elevação / Shadows:** Definição de sombras para estados normais, hover e modais/dropdowns.

#### 5. Componentes Principais (UI Patterns)
Descreva as especificações visuais de:
- **Botões:** Primary, Secondary, Ghost, Destructive (incluindo estados Default, Hover, Active e Disabled).
- **Form Inputs:** Estado default, foco, preenchido, erro e com label flutuante ou fixa.
- **Cards e Containers:** Bordas, sombras internas/externas e comportamento de padding.

#### 6. Exportação Técnica de Tokens
Gere um bloco de código contendo os tokens gerados prontos para uso em **Tailwind CSS (`theme.extend`)** ou variáveis **CSS `:root`**.

## Output

- Salve em `project/skills/skill-project-style-guide.md`