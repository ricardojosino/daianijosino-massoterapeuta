# Skill: Dynamic Strategy (SSR)
- **Objetivo:** Dados em tempo real e personalização.
- **Regra:** Use `export const dynamic = 'force-dynamic'` ou funções dinâmicas do Next.js.
- **Dados:** Buscados a cada request.

## Estratégia: SSR (Server-Side Rendering)
Tempo Real Absoluto. A página é montada do zero no servidor em cada clique. É necessária quando o conteúdo é personalizado para quem está vendo ou muda a cada segundo.


## ESTRATÉGIA: SSR (RENDERIZAÇÃO DINÂMICA)
Dados em tempo real e personalização por usuário.

**Comportamento:** A página deve buscar dados frescos a cada requisição.
**Implementação:** Use export const dynamic = 'force-dynamic' ou utilize funções como cookies() ou headers() dentro do Server Component para forçar a renderização dinâmica.
**Uso Ideal:** Dashboards, Áreas de Membros, Carrinhos de Compra, Busca em Tempo Real.