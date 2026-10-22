# Skill: SEO e core web vitals (The 4 Pillars)

Sempre que criares ou revisares uma página ou componente, deves garantir nota máxima (100/100) seguindo rigorosamente estes quatro pilares:

## 1. DESEMPENHO (Core Web Vitals)
- **LCP (Largest Contentful Paint):** Use obrigatoriamente `next/image` com a propriedade `priority={true}` para a imagem principal da seção Hero (acima da dobra).
- **CLS (Cumulative Layout Shift):** - Defina sempre `width` e `height` explícitos em todas as imagens.
    - Utilize `next/font` para evitar saltos visuais durante o carregamento de fontes.
    - Skeletons e Loading States devem ter as mesmas dimensões do conteúdo final.
- **INP (Interaction to Next Paint):** Minimize o uso de lógica pesada no Client-Side. Prefira animações CSS ou Framer Motion otimizadas para manter a thread principal livre.

## 2. ACESSIBILIDADE (A11y) E NAVEGAÇÃO AGÊNTICA (IA / WebMCP)
- **Semântica HTML5:** Utilize as tags corretas para a estrutura (`main`, `header`, `footer`, `nav`, `section`, `article`).
- **Hierarquia de Títulos:** Siga uma ordem lógica (H1 -> H2 -> H3). Nunca pule níveis para fins estéticos; use classes Tailwind para ajustar o tamanho visual.
- **Interatividade & Navegação Agêntica:**
    - **Texto Discernível em Botões:** Botões que contêm apenas ícones (ex: botão flutuante do WhatsApp, ícone de fechar `X`, etc.) **devem obrigatoriamente** ter um `aria-label` descritivo (ex: `aria-label="Abrir conversa no WhatsApp"`) para aprovação em auditorias de **Navegação Agêntica** e leitores de tela.
    - Inclua `<span className="sr-only">Descrição da Ação</span>` dentro do botão e use `aria-hidden="true"` no ícone SVG.
    - Garanta que todos os elementos interativos sejam acessíveis via teclado (focus states).
- **Imagens:** O atributo `alt` é obrigatório. Se a imagem for meramente decorativa, use `alt=""`.

## 3. BOAS PRÁTICAS
- **Otimização de Assets:** Utilize formatos modernos (WebP/AVIF) gerados automaticamente pelo Next.js Image.
- **Segurança:** Links externos (`target="_blank"`) devem conter sempre `rel="noopener"`. Omitir o `noreferrer` garante que Analytics de destino consigam rastrear a origem do seu blog como referência de tráfego.
- **Consistência de Design:** Utilize estritamente os Design Tokens definidos no `theme.md`. Proibido o uso de valores arbitrários (ex: `mt-[23px]`) a menos que seja um caso extremo.
- **Clean Code:** Use sempre Path Aliases (`@/components/...`) e mantenha os componentes pequenos e focados (Single Responsibility).

## 4. SEO & OPEN GRAPH
- **Metadata API:** Exportar o objeto `metadata` em cada `page.tsx`. O `title` e a `description` devem ser únicos e baseados no conteúdo da página.
- **Canonical URLs & metadataBase Dinâmica:** Para garantir que as imagens OG e links canônicos funcionem corretamente sem bloqueios de acesso (login):
    - **Evite** o uso direto de `process.env.VERCEL_URL` para metadados, pois as URLs de preview da Vercel são protegidas por autenticação, o que impede scrapers (Facebook, WhatsApp, etc.) de lerem as imagens e descrições.
    - Utilize variáveis de ambiente dedicadas: `const baseUrl = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_SITE_URL_DEV! : process.env.NEXT_PUBLIC_SITE_URL_PROD!;`
    - Atribua ao `metadataBase: new URL(baseUrl)`.
- **Desativação de Indexação (Sites de Modelo):** Caso o site seja apenas um modelo de catálogo e não deva aparecer em buscas reais:
    - Configure `robots: { index: false, follow: false }` no layout global.
- **Social (OG & Twitter):**
    - **Open Graph:** Configure `title`, `description`, `url`, `siteName`, `type: 'website'` e `locale: 'pt_PT'`.
    - **Captura e Geração da Imagem de Partilha (1200x630px):**
        - Ao aplicar ou revisar o SEO de uma página, a IA deve abrir a página no navegador local com viewport configurado exatamente para **1200 x 630 pixels**.
        - Capturar o print da dobra superior (alinhado ao topo e centralizado), captando a identidade e o Hero da página.
        - Salvar a imagem no diretório `public/images/seo/` com o nome padronizado `seo-[slug-da-pagina].jpg` (ou `.png`). Crie a pasta `public/images/seo/` caso ainda não exista.
    - **Implementação com `baseUrl` nos Metadados:**
        - Utilize sempre a variável `baseUrl` para fornecer URLs absolutas e válidas para os crawlers sociais:
      ```tsx
      const baseUrl = process.env.NODE_ENV === 'development' 
        ? process.env.NEXT_PUBLIC_SITE_URL_DEV! 
        : process.env.NEXT_PUBLIC_SITE_URL_PROD!;
  
      export const metadata: Metadata = {
        metadataBase: new URL(baseUrl),
        // ...
        openGraph: {
          title: "...",
          description: "...",
          url: baseUrl,
          siteName: "BoxPage",
          locale: "pt_PT",
          type: "website",
          images: [
            {
              url: `${baseUrl}/images/seo/seo-nome-da-pagina.jpg`,
              width: 1200,
              height: 630,
              alt: "Título descritivo da imagem",
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: "...",
          description: "...",
          images: [`${baseUrl}/images/seo/seo-nome-da-pagina.jpg`],
        },
      };
      ```

  ## 5. ESTRATÉGIA DE CONTEÚDO (ARTIGOS SEO)
Ao redigir um artigo ou página, siga estas diretrizes de otimização editorial:

- **Arquitetura de Palavras-Chave:** A palavra-chave foco deve aparecer no H1, no primeiro parágrafo e em pelo menos um subtítulo (H2).
- **Escaneabilidade e Leitura:** - Utilize parágrafos curtos (máximo 3-4 linhas).
    - Use **Bullet Points** e **Listas Numeradas** com moderação, apenas quando for necessário listar itens.
    - Utilize **Negrito** em termos centrais para facilitar a leitura dinâmica (skimming).
- **Link Building Interno:** Inclua links para outras páginas relevantes do próprio site para fortalecer a autoridade temática (Topic Cluster).
- **Autoridade Externa:** Cite e linke para fontes de alta autoridade e confiança no nicho correspondente (E-E-A-T).
- **Rich Snippets (JSON-LD):** Sempre que possível, sugira a inclusão de esquemas de dados estruturados (`FAQPage` e `Article`) para destacar o site nos resultados de pesquisa.
- **CTA (Call to Action):** Todo o conteúdo deve terminar com uma chamada à ação clara e alinhada com o objetivo da página.

- Escreva de forma simples, direta e objetiva, como se estivesse a conversar com um amigo. **Não use** travessão e nunca escreva de forma formal e erudita como se fosse um jornalista ou escritor.

## 6. DADOS ESTRUTURADOS (SCHEMA.ORG JSON-LD)
Sempre que criares ou atualizares uma página, deves implementar dados estruturados em formato **JSON-LD** para permitir que os motores de busca (Google, Bing) e agentes de IA compreendam perfeitamente o contexto, as entidades e as ofertas da página.

### Diretrizes Obrigatórias para a IA ao Criar o Schema:
1. **Compreensão do Modelo de Negócio do Cliente:**
    - Antes de gerar o schema, a IA deve analisar a essência do negócio do cliente:
        - É um software ou serviço SaaS (ex: BoxPage)? Utilize `@type: "SoftwareApplication"` ou `"WebApplication"`.
        - É uma clínica, terapeuta ou profissional autônomo de estética e bem-estar? Utilize `@type: "HealthAndBeautyBusiness"`, `"MedicalBusiness"` ou `"ProfessionalService"`.
        - É uma página de serviço específico ou pacote de consultoria? Utilize `@type: "Service"`.
        - É uma publicação de blog ou guia informativo? Utilize `@type: "Article"` ou `"BlogPosting"`.
        - É uma página de comércio/produto digital? Utilize `@type: "Product"` com `"offers"`.

2. **Alinhamento Rigoroso com o Conteúdo da Página e SEO:**
    - O schema deve refletir **fielmente** o conteúdo visível para o utilizador:
        - O nome (`name`), a descrição (`description`) e a URL canônica (`url`) devem ser perfeitamente coerentes com o objeto `metadata` da página.
        - Se a página contém uma seção de Perguntas Frequentes (FAQ), é **obrigatório** gerar o tipo `FAQPage`, contendo todas as perguntas (`Question`) e respostas (`Answer`) presentes na interface.
        - Se a página possui planos ou preços, crie a entidade `offers` com valores reais, moeda (`priceCurrency: "EUR"`) e disponibilidade condizente (`InStock` ou `PreOrder`).
        - **Nunca invente** preços, avaliações, horários ou dados que não existam visivelmente na página. Práticas enganosas geram penalizações manuais do Google.

3. **Respeito aos Padrões Oficiais Schema.org:**
    - O cabeçalho deve usar sempre `"@context": "https://schema.org"`.
    - Utilize apenas propriedades válidas documentadas na especificação oficial do [Schema.org](https://schema.org).
    - Valide se os tipos e subtipos aninhados estão corretos (ex: `creator` do tipo `Organization`, `priceSpecification` do tipo `UnitPriceSpecification`, etc.).

### Padrão de Implementação no Next.js (App Router):
No Server Component da página (`page.tsx`), declare o objeto estruturado e injete-o através da tag `<script>` dentro do `<main>` ou no topo do retorno JSX:

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", // ou "Service", "FAQPage", etc.
  "name": "Nome da Aplicação ou Serviço",
  "url": baseUrl,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web browser",
  "description": "Descrição clara e idêntica à definida nos metadados de SEO.",
  "creator": {
    "@type": "Organization",
    "name": "BoxPage",
    "url": baseUrl
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Plano Base",
      "price": "0.00",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  ]
};

export default function Pagina() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Restante dos componentes da página */}
    </main>
  );
}
```

### Exemplo para Páginas com Perguntas Frequentes (FAQPage):
Quando a página contiver uma seção de FAQ, inclua o schema específico para habilitar Rich Snippets expansíveis nas pesquisas do Google:

```tsx
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Pergunta visível na página?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Resposta exata e completa conforme apresentada no site."
      }
    }
  ]
};
```


