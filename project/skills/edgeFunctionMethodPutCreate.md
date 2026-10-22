# Skill: edgeFunctionMethodPutCreate

## Descrição
Esta skill orienta a IA na criação de novas Supabase Edge Functions utilizando o método `PUT` (geralmente para atualização/edição de registros), garantindo que todo o código seja gerado seguindo rigorosamente a estrutura e os padrões estabelecidos no arquivo modelo `project/snippets/backend/templates/api-put.js`.

---

## 📍 Localização e Estrutura de Arquivos

1. **Localização desta Skill**: `project/skills/edgeFunctionMethodPutCreate.md`
2. **Modelo Base de Referência**: `project/snippets/backend/templates/api-put.js`
3. **Destino e Linguagem da Edge Function Criada**:
   - **Linguagem obrigatória**: A Edge Function deve ser desenvolvida em **JavaScript (`.js`)** e **NUNCA em TypeScript (`.ts`)**.
   - O código-fonte da Edge Function deve ser salvo no diretório: `supabase/edge-functions/<contexto>/<modulo>/<nomeDaFuncao>.js`.
   - **Contextos disponíveis**:
     - `app`: Funções para os módulos privados do sistema.
     - `public`: Funções para áreas públicas (site, landing page, etc.).
     - `service`: Funções para integrações e serviços externos.
   - **Módulo**: Nome da pasta do módulo extraído da própria função (ex: `financialCategoryUpdate.js` pertence ao módulo `financial`).
   - **Exemplo de caminho**: `supabase/edge-functions/app/financial/financialCategoryUpdate.js`
4. **Documentação da Edge Function**:
   - Sempre que criar uma nova Edge Function, gere também sua documentação em formato de skill e salve em `project/skills/supabase-boxpage/<contexto>/<nomeDaFuncao>.md`, seguindo os padrões definidos em `project/skills/CreateDocumentationSupabaseEdgeFunction.md`.

---

## 🛠️ Regras de Desenvolvimento da Edge Function (Método PUT)

Ao criar uma nova Edge Function de método `PUT`, a IA deve utilizar a estrutura idêntica ao modelo `project/snippets/backend/templates/api-put.js`.

> [!IMPORTANT]
> **Linguagem Obrigatória**: O código da Edge Function deve ser programado estritamente em **JavaScript (`.js`)**. Não utilize TypeScript (`.ts`).

### 1. Importações Básicas
- Importe o cliente Supabase para ambiente Deno:
  ```javascript
  import { createClient } from "npm:@supabase/supabase-js@2.94.1";
  ```

### 2. Fluxo Principal da Requisição (`Deno.serve`)
- Declare o servidor HTTP utilizando `Deno.serve(async (req) => { ... })`.
- Trate o cabeçalho `content-type` e o método `req.method`.
- Resolva requisições preflight CORS para o método `OPTIONS`:
  ```javascript
  if (method === 'OPTIONS') return cors();
  ```
- Verifique se o método é estritamente `PUT`:
  ```javascript
  if (method === 'PUT') {
      try {
          // Recupera token do header e payload JSON do body
          const token = getToken(req);
          const body = await req.json();

          const {
              account_id,
              // Outros parâmetros da requisição...
          } = body;

          // Validações obrigatórias
          validationIsNotEmpty(token, "8172634", "Acesso Negado", "token é obrigatório");
          validationIsNotEmpty(account_id, "7182637", "Acesso Negado", "account_id é obrigatório");
          // Adicionar validações adicionais dos campos específicos aqui...

          // Instâncias do Supabase
          const supabase = await instanceSupabase(); // Instância admin (service_role)
          const supabaseUser = await instanceSupabaseUser(token); // Instância autenticada do usuário

          // Recupera informações e valida sessão/conta do usuário
          const auth = await getAuth(supabase, token, account_id);

          // -- {CODE} Lógica de Negócio da Edge Function (Atualização de dados) --
          // Deve ser organizada em funções auxiliares executadas sequencialmente passo a passo

          // Retorno de resposta com sucesso
          return response("Operação realizada com sucesso", {});

      } catch (error) {
          return fall(error);
      }
  } else {
      return fallback();
  }
  ```

### 📐 Organização do Código em Funções Sequenciais (Regra Obrigatória)

Toda Edge Function criada deve obrigatoriamente organizar sua lógica de negócio em **funções auxiliares separadas e bem nomeadas**, executadas sequencialmente passo a passo no bloco principal do handler `Deno.serve`.

**Diretrizes de Organização**:
1. **Zero Código Solto no Handler Principal**: O bloco do handler `Deno.serve` deve funcionar como um orquestrador de alto nível, chamando cada etapa em ordem cronológica através de funções auxiliares.
2. **Funções com Responsabilidade Única**: Cada etapa do fluxo (ex: validação de payload, consulta de dados prévios, verificação de concorrência, execução de update, auditoria) deve residir em sua própria função `async`.
3. **Sequência Lógica Clara**: Nomeie as funções auxiliares com verbos de ação claros (ex: `validateInputPayload`, `checkExistingRecord`, `updateRecordData`, `logAuditChange`).

**Exemplo de Orquestração Sequencial**:
```javascript
// Passo 1: Validar payload e dados de entrada
validateInputPayload(token, account_id, payloadData);

// Passo 2: Instanciar o Supabase e obter sessão/autenticação
const supabase = await instanceSupabase();
const auth = await getAuth(supabase, token, account_id);

// Passo 3: Verificar registro existente a ser atualizado
const existingRecord = await checkExistingRecord(supabase, account_id, recordId);

// Passo 4: Executar atualização dos dados
const updatedRecord = await updateRecordData(supabase, recordId, payloadData);

// Passo 5: Retornar resposta padronizada
return response("Registro atualizado com sucesso", updatedRecord);
```

---

## 🔄 Invocação de Outras Edge Functions (Tratamento Obrigatório de Erros)

Quando uma Edge Function precisar invocar outra Edge Function (utilizando `supabase.functions.invoke(...)`), é **OBRIGATÓRIO** tratar o retorno de erro. Todas as Edge Functions contêm validações internas e retornam códigos de status HTTP diferentes de 200 (ex: 400, 404, 500) quando ocorrem erros de validação.

Deve-se obrigatoriamente extrair o detalhe do erro contido em `error.context` e repassá-lo através da função `validationSupabaseError(...)`:

```javascript
// Exemplo: invocando a Edge Function subscriptionTestCreate
async function signatureTest(supabase, accountData, token) {
    if (!accountData || !accountData.account_id) return;

    try {
        const { data, error } = await supabase.functions.invoke('subscriptionTestCreate', {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: {
                account_id: accountData.account_id
            },
            method: "POST"
        });

        if (error) {
            let errorDetail = error.message;
            if (error.context) {
                try {
                    const parsed = await error.context.json();
                    errorDetail = parsed.message || parsed.details || errorDetail;
                } catch {
                    // ignora se não for um json válido
                }
            }

            validationSupabaseError(errorDetail, '9283434', 'Não foi possível gerar a assinatura de teste', 404);
        }
    } catch (err) {
        validationSupabaseError(err, '9283434', 'Não foi possível gerar a assinatura de teste', 404);
    }
}
```

---

## 🧱 Funções Padrão Obrigatórias no Código

Todas as Edge Functions `PUT` devem conter a implementação integral das seguintes funções auxiliares e utilitárias no final do arquivo:

### 1. Respostas HTTP e CORS
- `response(message, data)`: Retorna um objeto JSON padronizado com `success: true`, `code: 100`, a mensagem e os dados, além de incluir todos os headers CORS necessários.
- `fallback()`: Retorna o erro HTTP 405 (Método não suportado) quando a requisição não for do tipo `PUT`.
- `fall(error)`: Trata exceções capturadas no `catch`, retornando status HTTP (padrão 404 ou customizado) com a estrutura `{ success: false, code, message, details, data: [] }`.
- `cors()`: Retorna a resposta HTTP 204 para requisições do tipo `OPTIONS`.

### 2. Instanciação do Supabase e Autenticação
- `instanceSupabase()`: Cria uma instância do Supabase com a chave `SUPABASE_SERVICE_ROLE_KEY`.
- `instanceSupabaseUser(token)`: Cria uma instância autenticada do Supabase com `SUPABASE_ANON_KEY` (ou `SUPABASE_PUBLISHABLE_KEYS`) e o token JWT do usuário no header `Authorization`.
- `getAuth(supabase, token, account_id)`: Executa a validação do token JWT via `supabase.auth.getUser(token)`, consulta os dados na tabela `users`, visualiza a conta em `view_account` e busca configurações em `account_config`.

### 3. Helpers de Formatação e Validação
- `getToken(req)`: Extrai o token do cabeçalho `Authorization: Bearer <token>`.
- `formatEmail(value)`: Trata e converte e-mail para letras minúsculas.
- `formatTextToUpperCase(value)`: Converte texto para maiúsculas.
- `formatJustNumber(value)`: Remove caracteres não numéricos.
- `formatCleanSpace(value)`: Remove espaços em branco.
- `formatDateForDatabase(value)`: Valida e converte datas (`DD-MM-YYYY`, `YYYY-MM-DD`, `DDMMYYYY`, etc.) para o formato ISO `YYYY-MM-DD`.
- `dataListInfo(data)`: Retorna objeto contendo estatísticas (`has`, `total`, `items`) para arrays.
- `checkDataIsEmpty(data)` / `checkDataIsNotEmpty(data)`: Auxiliares para validação de dados vazios em objetos e arrays.
- `validationIsNotEmpty(value, code, message, details, status)`: Lança exceções com código e mensagem personalizados caso o valor seja nulo/vazio.
- `validationCheckRegister(supabase, table, key, key_value, account_id, error_code, error_message)`: Garante que um registro ativo e não deletado exista na tabela.
- `validationCheckRegisterAll(...)`: Garante que um registro exista na tabela independentemente do status de exclusão.
- `sendError(code, message, details, status)`: Utilitário para lançar erros formatados.
- `validationSupabaseError(supabase_error, code, message, status)`: Verifica e relança erros retornados pela API do Supabase.

---

## 📋 Checklist de Verificação para a IA

Ao finalizar a geração da Edge Function `PUT`:
1. [ ] A estrutura foi copiada exatamente a partir de `project/snippets/backend/templates/api-put.js`?
2. [ ] A função foi escrita exclusivamente em JavaScript (`.js`) e não em TypeScript (`.ts`)?
3. [ ] O método `PUT` e a requisição preflight `OPTIONS` foram devidamente validados?
4. [ ] A validação de `token` e `account_id` foi incluída no início do fluxo?
5. [ ] A lógica de negócio foi organizada em funções auxiliares separadas e executadas na sequência correta no handler principal?
6. [ ] Caso invoque outra Edge Function (`supabase.functions.invoke`), o tratamento de erros com `error.context.json()` e `validationSupabaseError` foi devidamente incluído?
7. [ ] O código da função foi salvo na pasta `supabase/edge-functions/<contexto>/<modulo>/<nomeDaFuncao>.js`?
8. [ ] A documentação da função foi criada na pasta `project/skills/supabase-boxpage/<contexto>/<nomeDaFuncao>.md`?
