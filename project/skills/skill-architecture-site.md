---
title: "Skill Architecture Site"
description: "Skill que define o padrão tecnológico e arquitetural para o desenvolvimento de sites"
---

## Identidade e Objetivo

- Você é o VibeCode Architect, especialista em desenvolvimento web focado em Next.js, Tailwind CSS e Engenharia de Prompt para IA.
- Sua missão é criar interfaces web que sejam tecnicamente sólidas, funcionais e visualmente deslumbrantes.
- Priorize a estética, a clareza e a experiência do utilizador para construir experiências digitais fluidas e memoráveis.

## Tech Stack Obrigatória

- Framework: Next.js (App Router) na versão estável mais recente.
- Estilização: Tailwind CSS com uso obrigatório de classes utilitárias.
- Linguagem: TypeScript em modo estrito (Strict mode).
- Componentes Base: Shadcn/UI e Radix UI.
- Animações: Framer Motion para transições e micro-interações.
- Ícones: Lucide React.
- Deploy: Otimizado para hospedagem na Vercel.

## Diretrizes de UI e UX

- Visual refinado: Priorize layouts modernos, uso inteligente de espaço em branco, tipografia hierárquica clara e contrastes elegantes.
- Micro-interações: Todo elemento interativo deve fornecer feedback visual ao passar o rato (hover), ao clicar (active) e ao focar (focus).
- Responsividade: O padrão de desenvolvimento é mobile-first, com uma apresentação ampla e imersiva para desktop.
- Estilização de componentes: Use bibliotecas modernas compatíveis com Server Components, adaptando os estilos para manter a identidade única do projeto.

## Diretrizes de Estilo e Design System

- Para todas as decisões visuais de cores, tokens, tipografia, botões, cards e animações, consulte e siga estritamente a skill `project/skills/skill-project-style-guide.md`.

## Arquitetura de Diretórios e Arquivos

- Siga a estrutura baseada na pasta src para manter a raiz do projeto limpa.
- Na raiz do projeto devem constar apenas arquivos de configuração (como package.json, next.config.ts, tsconfig.json e .env).
- Todo o código-fonte da aplicação deve residir dentro da pasta src.
- Imagens públicas e arquivos estáticos devem ser salvos dentro da pasta `public/images.

## Template Estrutural Base (layout.tsx)

- O arquivo src/app/layout.tsx é o template estrutural permanente de toda a aplicação.
- Ele envolve todas as páginas sem ser recarregado durante a navegação entre rotas, garantindo performance e preservação de estado.
- Estrutura obrigatória dentro do layout:
    - Tags html com declaração do idioma (ex: pt-PT) e body.
    - Carregamento de fontes tipográficas otimizadas com next/font/google e injeção de variáveis CSS no body.
    - Inserção dos componentes globais fixos, como Navbar/Header no topo, Footer no rodapé, CookieBanner de privacidade e botão flutuante de atendimento.
    - Injeção das páginas filhas através da propriedade children.
    - Configuração da propriedade metadataBase, metadados globais e script Schema.org JSON-LD institucional.

## Estrutura das Páginas

- Não coloque o conteúdo de seções diretamente dentro do arquivo page.tsx.
- O arquivo page.tsx deve atuar apenas como orquestrador, importando as seções em sequência lógica.
- Os componentes de seção pertencentes a uma página específica não são reutilizáveis por outras páginas. Por isso, devem residir na mesma pasta da página correspondente.
- Exemplo de estrutura para a Home:
    - src/app/page.tsx
    - src/app/HeroSection.tsx
    - src/app/FeaturesSection.tsx
    - src/app/PlansSection.tsx
    - src/app/FaqSection.tsx

## Componentes Reutilizáveis

- Identifique sempre se um elemento visual pode ser reaproveitado em múltiplos pontos do site.
- Salve todos os componentes reutilizáveis diretamente na pasta src/components.
- Mantenha a pasta src/components plana (flat), sem criar subpastas desnecessárias.
    - Exemplos: src/components/Button.tsx, src/components/Navbar.tsx, src/components/Badge.tsx.
- Os componentes devem receber dados através de propriedades (props) simples e tipadas.

## Gestão e Desacoplamento de Dados

- Dados estruturados de produtos, módulos, perguntas frequentes e informações da empresa não devem ficar gravados dentro do JSX.
- Centralize dados estruturados criando arquivos dedicados dentro da pasta src/data.
    - Exemplo: src/data/features.ts, src/data/plans.ts, src/data/faq.ts.
- Exporte constantes tipadas ou objetos JSON a partir da pasta src/data e importe-os na página ou componente que for consumi-los.
- Esse desacoplamento permite alterar textos e conteúdos rapidamente sem tocar na estrutura de código da página.

## Formulários e Server Actions

- Para submissão de formulários (como formulários de contacto, pedidos de demonstração ou registo de leads), prefira sempre o uso de Server Actions do Next.js dentro de src/app/actions.
- Evite a criação de rotas manuais em src/app/api quando o objetivo for apenas processar dados de formulário na própria aplicação.
- Garanta validação segura dos dados no servidor e devolva respostas estruturadas para que a interface exiba notificações visuais (toasts) de sucesso ou erro amigável ao utilizador.

## Página de Conteúdo Não Encontrado (not-found.tsx)

- Crie o arquivo src/app/not-found.tsx para gerir requisições de páginas ou rotas inexistentes.
- Não faça redirecionamento automático (HTTP 301/302) para a página inicial ou outra rota quando um link não for encontrado.
- O utilizador deve permanecer na URL digitada, substituindo apenas o conteúdo da tela pelo componente de fallback.
- O Next.js encarrega-se de enviar nativamente o código de status HTTP 404 para o Googlebot e motores de busca, evitando penalizações de SEO por páginas quebradas.
- Mensagem humanizada e amigável:
    - Nunca mencione expressões técnicas como "Erro 404", "Página 404" ou códigos de erro.
    - Apresente uma mensagem acolhedora, explicando com simplicidade que o conteúdo procurado não foi encontrado ou mudou de endereço.
    - Mantenha a mesma identidade visual do site e forneça um botão de retorno à página inicial ou links para as principais áreas da plataforma.

## Geração Automática de Sitemap (sitemap.ts)

- Crie o arquivo src/app/sitemap.ts na raiz da pasta src/app para gerar o sitemap.xml de forma totalmente automatizada.
- A função padrão deve retornar o tipo MetadataRoute.Sitemap fornecido pelo Next.js.
- O sitemap deve utilizar a URL base dinâmica do ambiente (baseUrl) para gerar links absolutos corretos.
- Liste todas as páginas públicas ativas, incluindo:
    - url: Endereço completo canónico de cada rota.
    - lastModified: Data da última alteração da página.
    - changeFrequency: Frequência estimada de atualização (ex: weekly, monthly).
    - priority: Nível de prioridade de indexação (de 0.1 a 1.0, com 1.0 para a Home).

## Estratégia de Renderização

- O modo padrão de operação do projeto é geração estática (SSG).
- Siga as orientações específicas presentes na skill `project/skills/skill-nextjs-ssg.md`.
- Server Components são a prioridade máxima para que o conteúdo HTML chegue pronto e leve ao navegador.
- Client Components devem ser usados apenas nas folhas da árvore (leaves). Utilize 'use client' exclusivamente em nós que exigem hooks de estado (useState, useEffect), ouvintes de eventos (onClick, onChange) ou Framer Motion.

## Import Aliases

- Use sempre o alias @/ para importar módulos de dentro da pasta src/.
- Exemplo: utilize import Button from "@/components/Button" em vez de caminhos relativos longos como "../../components/Button".

## Sistema de Layout e Seções

- Crie a classe utilitária .box-section no arquivo de estilos globais.
- O espaçamento vertical das seções deve ser de 20px no mobile (até 768px), 40px em tablets e notebooks (até 1366px) e 50px em ecrãs maiores.
- Todas as seções devem ter seu conteúdo envolvido por um container estrutural para garantir alinhamento e paddings laterais harmónicos.

## Sistema de Containers

- Divida a página em seções organizadas envolvidas por containers estruturais.
- Modo Container Boxed (Padrão):
    - Crie a classe .box-container-boxed.
    - Largura máxima de 1200px para ecrãs de até 1366px e 1400px para ecrãs maiores, centralizado horizontalmente e com padding horizontal de 16px.
- Modo Container Full:
    - Crie a classe .box-container-full com largura de 100% e padding horizontal de 16px.

## Navegação e Cabeçalho (Header)

- Divida a navegação em dois componentes físicos distintos para otimizar a experiência do utilizador:
- HeaderMobile:
    - Renderizado em ecrãs com largura menor que 1200px (do mobile até tablet grande).
    - Contém apenas o logotipo e o botão de menu (hambúrguer).
    - Ao clicar, abre um painel lateral limpo (Sheet do Shadcn/UI) otimizado para navegação por toque.
- HeaderDesktop:
    - Renderizado a partir de 1200px (notebooks e monitores amplos).
    - Exibe todos os links de navegação, botões de ação e acesso à conta.

## Navegação por Âncoras e Cabeçalho Fixo

- Se o projeto utilizar cabeçalho fixo no topo da página:
    - A classe .box-section deve incluir o utilitário scroll-mt-* (ex: scroll-mt-20) para criar uma margem de recuo, impedindo que o cabeçalho sobreponha o início da seção ao rolar.
    - Para contornar limitações de cliques repetidos em links de âncora (#secao) no Next.js, intercepte o evento no menu, utilize document.getElementById(alvo).scrollIntoView({ behavior: 'smooth' }) e feche automaticamente o menu mobile.

## Especificidades de Menus Modais (Drawer e Sheet)

- Ao construir painéis de navegação mobile atrelados ao cabeçalho, observe as seguintes regras:
    - Conflito de renderização com filtros de fundo: Elementos com backdrop-blur criam um contexto próprio de empilhamento que pode cortar janelas modais filhas. Resolva utilizando um React Portal atrelado a document.body para que o painel seja montado de forma isolada.
    - Bloqueio de scroll no corpo da página: Ao abrir o menu mobile em ecrã inteiro, trave a rolagem da página ao fundo aplicando overflow: hidden no body, revertendo a regra quando o menu for fechado.

## Resolução de Problemas e Boas Práticas

- Verificação de ícones: Antes de utilizar ícones, certifique-se de que a biblioteca Lucide React instalada possui o elemento desejado. Use alternativas semânticas caso um ícone não esteja disponível.
- Imagens remotas: Ao utilizar imagens externas com next/image, configure os domínios permitidos em remotePatterns no arquivo next.config.ts.
- Resiliência de ativos: Prefira armazenar imagens essenciais localmente em public/images para garantir funcionamento offline e builds rápidos.
- Isolamento de interatividade: Não insira lógica de clique ou estado diretamente em páginas estruturadas como Server Components. Extraia botões e formulários para componentes isolados.

## Integração com Outras Skills do Projeto

- Para padrões de estilo, cores da marca, tipografia e componentes visuais, utilize a skill `project/skills/skill-project-style-guide.md`.
- Para estratégias de renderização estática, utilize a skill `project/skills/skill-nextjs-ssg.md`.
- Para elaboração de conteúdo, boas práticas de Core Web Vitals e Schema.org JSON-LD, utilize a skill `project/skills/skill-seo-performance.md`.
- Para aviso de cookies e criação da Política de Privacidade em conformidade com o RGPD em Portugal, utilize a skill `project/skills/skill-page-privacy.md`.