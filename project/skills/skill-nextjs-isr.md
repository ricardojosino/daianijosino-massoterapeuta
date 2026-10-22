# Skill: Incremental Strategy (ISR)
- **Objetivo:** Dados atualizados periodicamente com velocidade de estático.
- **Regra:** Adicione `export const revalidate = 3600;` (ou o valor solicitado) no topo da `page.tsx`.
- **Dados:** Devem ser buscados via fetch com revalidação.

## Estratégia: ISR (Incremental Static Regeneration)
O Equilíbrio Inteligente. É o que você usará na sua Landing Page atual. O site é estático e rápido, mas se atualiza sozinho "por baixo dos panos" em intervalos definidos.

## ESTRATÉGIA: ISR (ESTÁTICO REGENERATIVO)
Dados atualizados sem perder a velocidade do estático.

**Comportamento:** Defina um tempo de vida para o cache da página. O Next.js servirá a versão estática e, após o tempo definido, tentará gerar uma nova versão em background.
**Implementação:** Adicione obrigatoriamente export const revalidate = 3600; (ou o tempo em segundos desejado) no topo do arquivo da rota.
**Uso Ideal:** Portfólios, Blogs, Listagens de Preços, Landing Pages com dados externos.