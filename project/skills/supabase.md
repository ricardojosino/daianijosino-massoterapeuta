# SKILL: INTEGRAÇÃO SUPABASE (EDGE FUNCTIONS E SSR)

## REGRA DE SEGURANÇA MÁXIMA (PROIBIDO ACESSO DIRETO)
É **ESTRITAMENTE PROIBIDO** fazer chamadas diretas ao banco de dados utilizando `supabase.from()` para qualquer mutação de dados (POST, PUT, DELETE) ou lógicas complexas.
Toda a inteligência de negócios e alteração de dados deve ser feita **exclusivamente** através das **Supabase Edge Functions**.

## 1. O MÉTODO DE INVOCAÇÃO OBRIGATÓRIO
Nunca utilize `fetch()` nativo do JavaScript para chamar as URLs das Edge Functions.
Você deve utilizar sempre o método oficial do cliente Supabase para garantir a injeção automática dos headers de autorização:
`supabase.functions.invoke('nome-da-funcao', { body, method })`

## 2. ARQUITETURA DE MUTAÇÃO (SERVER ACTIONS)
Como estamos utilizando o Next.js App Router, as chamadas para as Edge Functions **NÃO devem ser feitas em Client Components**.
- **Padrão:** Crie Server Actions (com a diretiva `'use server'`) em arquivos dedicados na pasta `src/actions/` ou no mesmo diretório do módulo.
- **Fluxo:** O Client Component chama a Server Action -> A Server Action autentica o cliente Supabase no servidor lendo os cookies -> A Server Action invoca a Edge Function.

### Exemplo de Padrão de Código (Server Action):
```typescript
'use server'
import { createClient } from '@/utils/supabase/server'

export async function salvarDados(payload: any) {
  const supabase = await createClient()
  
  const { data, error } = await supabase.functions.invoke('nome-da-edge-function', {
    method: 'POST',
    body: payload,
  })

  if (error) throw new Error(`Erro na API: ${error.message}`)
  return data
}
```

## 3. GESTÃO DE SESSÃO E TOKENS (MIDDLEWARE)
O gerenciamento de autenticação e a renovação de tokens (Refresh Tokens) são de responsabilidade **exclusiva** do pacote `@supabase/ssr` atuando no arquivo `src/middleware.ts`.
- **NUNCA** tente renovar tokens manualmente, extrair JWT na mão ou manipular headers de autorização dentro de Server Actions ou Client Components.
- Confie que o cliente instanciado via `createClient()` sempre terá uma sessão válida garantida pelo Middleware antes de executar o `invoke()`.

## 4. UI/UX E FEEDBACK VISUAL (A "VIBE")
Ao acionar uma Server Action a partir de um Client Component (ex: formulário de Anamnese ou Cadastros), você **deve** utilizar o hook `useTransition` do React.
- Gerencie o estado de *isPending* para desabilitar o botão de envio e mostrar um ícone de *loading* (utilizando Lucide-React, como `<Loader2 className="animate-spin" />`).
- Isso garante a fluidez visual exigida nas diretrizes de UI High-End do projeto.

## 5. RENDERIZAÇÃO DE DADOS (SSR)
Para buscar dados de leitura nas páginas administrativas (ex: listar clientes na tabela):
- Faça o fetch diretamente no **Server Component** (`page.tsx`) instanciando o Supabase no servidor.
- Passe os dados limpos como `props` para os Client Components que renderizam a UI interativa.