# Skill: Static Strategy (SSG)
- **Objetivo:** Performance extrema e custo zero de servidor.
- **Regra:** Não use funções dinâmicas (cookies/headers).
- **Dados:** Devem ser injetados no momento do build.
- **Output:** Garanta que o componente seja puramente estático.

## Estratégia: SSG (Static Site Generation)
Velocidade Instantânea. A página é gerada uma única vez no momento do deploy. É a escolha definitiva para Landing Pages que buscam o 100/100 no Google PageSpeed.

## ESTRATÉGIA: SSG (ESTÁTICO PURO)
Objetivo: Performance máxima e SEO imbatível.

**Comportamento:** Use Server Components para buscar dados durante o build.
**Implementação:** Não utilize funções dinâmicas (como cookies() ou headers()) nem revalidate. A página deve ser tratada como um arquivo HTML estático imutável até o próximo deploy.
**Uso Ideal:** Landing Pages, Páginas de "Quem Somos", Documentação.

## Imagens:
Use o componente next/image com priority={true} para o LCP (Largest Contentful Paint) em todas as seções acima da dobra (Hero).

## 🏠 ESTRATÉGIA PARA CATÁLOGOS
- **Data Fetching:** No momento do build, consulte a API e salve os dados em `src/data/`.
- **Filtros Estáticos:** Utilize React States ou bibliotecas de filtragem no Client-Side para manipular o JSON estático.
- **Performance:** Como os dados são "congelados" entre builds, use imagens com `priority` e `placeholder="blur"` para que a navegação pareça instantânea.
- **Cache:** Não faça chamadas de API no navegador. Use apenas os dados injetados via SSG.