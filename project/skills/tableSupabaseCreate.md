# Skill: tableSupabaseCreate

## Descrição
Esta skill orienta a IA na criação de novas tabelas para o Supabase no projeto Ementa Digital, garantindo a padronização de chaves primárias, campos obrigatórios de auditoria e controle, otimização extrema de performance (índices parciais/filtrados, compostos e chaves estrangeiras), políticas de segurança RLS (Row Level Security), constraints e a geração do dicionário de dados.

---

## 📍 Localização e Estrutura de Arquivos

1. **Localização desta Skill**: `project/skills/tableSupabaseCreate.md`
2. **Destino da Documentação da Tabela Criada**:
   - Toda nova tabela criada deve ter sua definição em SQL e seu dicionário de dados documentados em um arquivo `.md`.
   - **Caminho**: `supabase/tables/<nome_da_tabela>.md`

---

## 🔑 Regras de Nomenclatura e Chave Primária

1. **Nome da Tabela**: Em letras minúsculas, no singular e usando `snake_case` (ex: `category`, `product`, `restaurant_profile`).
2. **Chave Primária**:
   - Deve ser obrigatoriamente do tipo `uuid not null default gen_random_uuid()`.
   - O nome da chave primária **DEVE** ter o nome da tabela seguido do sufixo `_id`.
   - Exemplo: Para a tabela `category`, a chave primária é `category_id`. Para `product`, é `product_id`.

---

## 📋 Campos Obrigatórios (Primeiros Campos)

Após a chave primária, os seguintes 8 campos são **OBRIGATÓRIOS** e **DEVEM** ser os primeiros campos declarados na estrutura da tabela:

```sql
  ready boolean null default true,
  display boolean null default true,
  register_create_date timestamp with time zone null default (now() AT TIME ZONE 'utc'::text),
  register_create_user uuid null default auth.uid (),
  register_update_date timestamp with time zone null default (now() AT TIME ZONE 'utc'::text),
  register_update_user uuid null default auth.uid (),
  register_delete_date timestamp with time zone null,
  register_delete_user uuid null,
```

> [!NOTE]
> O campo `register_create_user` armazena o identificador do usuário (`auth.uid()`) que criou o registro e determina quem é o seu legítimo proprietário/dono no sistema.

---

## 🛡️ Políticas de Segurança (Row Level Security - RLS)

Todas as tabelas criadas no Supabase **DEVEM** habilitar o RLS para garantir a segurança dos dados.
O modelo de segurança adota o princípio de que **apenas o dono do registro pode mexer (inserir, atualizar, excluir) nos seus dados e precisa estar devidamente autenticado**, salvo quando houver necessidade de leitura pública.

### 1. Habilitação Obrigatória do RLS
```sql
alter table public.<nome_da_tabela> enable row level security;
```

### 2. Regra Padrão: Apenas o Dono Autenticado pode mexer no registro
Para gerenciar o ciclo completo do registro (criar, ler privadamente, atualizar e excluir), o usuário deve estar autenticado e ser o criador/dono do registro:

```sql
create policy "Apenas o dono autenticado pode gerenciar seu registro"
on public.<nome_da_tabela>
for all
to authenticated
using (register_create_user = auth.uid())
with check (register_create_user = auth.uid());
```

---

### 3. Análise Obrigatória: Tabela Pública vs Privada

A IA **DEVE SEMPRE ANALISAR** o contexto da tabela antes de definir as políticas de segurança:

#### A) Quando a tabela precisa de Leitura Pública (Ex: Ementa Digital Pública / Catálogo)
Tabelas como `restaurant_profile`, `category`, `product`, `product_price_variant`, `product_extra_item`, etc., contêm dados que precisam ser consultados abertamente pelos clientes que acessam o menu digital (`/[slug]`), sem exigir login (`anon` e `authenticated`).

Nestes casos, a política de leitura pública deve permitir o `select` aberto, mantendo as operações de escrita (INSERT, UPDATE, DELETE) restritas estritamente ao dono autenticado:

```sql
-- Leitura pública para qualquer visitante (anônimo ou autenticado)
create policy "Leitura publica"
on public.<nome_da_tabela>
for select
to anon, authenticated
using (true);

-- Mutações e gerenciamento continuam exclusivos do dono autenticado:
create policy "Apenas o dono autenticado pode gerenciar seu registro"
on public.<nome_da_tabela>
for all
to authenticated
using (register_create_user = auth.uid())
with check (register_create_user = auth.uid());
```

> [!IMPORTANT]
> **Nunca insira filtros de estado no RLS** (como `ready = true`, `display = true` ou `register_delete_date is null`). O controle de exibição de itens ativos, rascunhos ou registros na lixeira deve ser feito **exclusivamente na query normal da aplicação** (ex: `.eq('display', true).is('register_delete_date', null)`). Dessa forma, a aplicação tem flexibilidade para consultar dados em rascunho ou exibir itens na lixeira para restauração.

#### B) Quando a tabela é de Acesso Restrito / Privado (Apenas Backend / Edge Functions)
Para tabelas sensíveis, logs, webhooks internos ou manipuladas exclusivamente via Edge Functions com a chave `service_role`:
- Habilita-se o RLS (`alter table public.<nome_da_tabela> enable row level security;`) e **não se cria nenhuma política** para `authenticated` ou `anon`. O acesso direto pelo frontend fica 100% bloqueado.

---

## ⚡ Otimização para Performance (Índices e Chaves Estrangeiras)

Para garantir que as consultas no Supabase/PostgreSQL sejam extremamente rápidas mesmo com grandes volumes de dados, a IA **DEVE** aplicar as seguintes otimizações:

### 1. Índices em Chaves Estrangeiras e Colunas de Busca Frequente
- **Obrigatoriedade**: Todas as chaves estrangeiras (ex: `register_create_user`, `category_id`, `product_id`) e colunas usadas frequentemente em filtros e ordenações (`slug`, `status`, `sort_order`, `type`, `display`, `register_delete_date`) **DEVEM** ter índices dedicados.
- **Nomenclatura**: `<nome_da_tabela>_<coluna>_idx` (ex: `product_register_create_user_idx`).
- Não restrinja os índices com cláusulas `WHERE` rígidas que impeçam a indexação de registros em rascunho ou lixeira, permitindo alta performance em qualquer cenário de consulta.

### 2. Índices Compostos (Composite Indexes)
- Quando uma consulta frequente filtrar por múltiplos campos (por exemplo, `register_create_user` juntamente com `category_id` ou `slug`), deve-se criar um índice composto para evitar scans desnecessários.
- **Nomenclatura**: `<nome_da_tabela>_<coluna1>_<coluna2>_idx` (ex: `product_register_create_user_category_id_idx`).

### 3. Escolha do Tipo de Índice (`btree` vs `gin`)
- **`btree`**: Utilizado para a grande maioria dos campos (`uuid`, `timestamp`, `integer`, `varchar`, `boolean`).
- **`gin`**: Utilizado obrigatoriamente para colunas do tipo `jsonb` ou busca textual avançada em campos de texto amplo (`metadata jsonb`).

### 4. Integridade Referencial e Chaves Estrangeiras (`FOREIGN KEY`)
- Toda coluna que referenciar outra tabela **DEVE** ter uma `CONSTRAINT` explícita com `FOREIGN KEY`.
- **Ações de Exclusão (`ON DELETE`)**:
  - `ON DELETE CASCADE`: Para dependências diretas de um registro pai (ex: itens de produto referenciando o produto pai).
  - `ON DELETE SET NULL`: Para relacionamentos opcionais onde o registro dependente deve ser mantido.
  - Chaves de auditoria de usuário (`register_create_user`, `register_update_user`, `register_delete_user`) devem obrigatoriamente referenciar `auth.users (id)`.

### 5. Otimização dos Tipos de Dados
- Usar `uuid` para identificadores únicos.
- Usar `timestamp with time zone` armazenado sempre em UTC.
- Usar `smallint` para códigos numéricos de status ou enums para economizar bytes por linha.
- Armazenar valores monetários em centavos como `bigint` ou `integer` (evita imprecisão de ponto flutuante).

---

## 🛠️ Modelo Padrão de SQL (`create table` + `indexes` + `RLS`)

Toda instrução SQL de criação de tabela, índices e políticas RLS deve seguir esta estrutura base:

```sql
create table public.<nome_da_tabela> (
  <nome_da_tabela>_id uuid not null default gen_random_uuid (),
  ready boolean null default true,
  display boolean null default true,
  register_create_date timestamp with time zone null default (now() AT TIME ZONE 'utc'::text),
  register_create_user uuid null default auth.uid (),
  register_update_date timestamp with time zone null default (now() AT TIME ZONE 'utc'::text),
  register_update_user uuid null default auth.uid (),
  register_delete_date timestamp with time zone null,
  register_delete_user uuid null,
  
  -- Campos específicos da tabela
  -- ex: name character varying not null,
  -- ex: status smallint null default 1,

  -- Constraints de chave primária e chaves estrangeiras
  constraint <nome_da_tabela>_pkey primary key (<nome_da_tabela>_id),
  constraint <nome_da_tabela>_register_create_user_fkey foreign KEY (register_create_user) references auth.users (id),
  constraint <nome_da_tabela>_register_delete_user_fkey foreign KEY (register_delete_user) references auth.users (id),
  constraint <nome_da_tabela>_register_update_user_fkey foreign KEY (register_update_user) references auth.users (id)
) TABLESPACE pg_default;

-- Índice para busca pelo dono do registro
create index IF not exists <nome_da_tabela>_register_create_user_idx on public.<nome_da_tabela> using btree (register_create_user) TABLESPACE pg_default;

-- Ativação do RLS
alter table public.<nome_da_tabela> enable row level security;

-- Política 1: Apenas o dono autenticado pode gerenciar seu próprio registro
create policy "Apenas o dono autenticado pode gerenciar seu registro"
on public.<nome_da_tabela>
for all
to authenticated
using (register_create_user = auth.uid())
with check (register_create_user = auth.uid());

-- Política 2 (SE A TABELA FOR PÚBLICA): Leitura aberta para visitantes na ementa
-- ATENÇÃO: Incluir esta política apenas quando a tabela fizer parte da ementa pública.
-- Filtros como display, ready e exclusão lógica ficam para as queries normais da aplicação.
create policy "Leitura publica"
on public.<nome_da_tabela>
for select
to anon, authenticated
using (true);
```

---

## 📖 Dicionário de Dados

Toda documentação de tabela **DEVE** incluir uma seção de **Dicionário de Dados** ao final, detalhando o propósito de cada campo da tabela. Os 8 campos padrão obrigatórios devem seguir a descrição abaixo:

### Formato do Dicionário de Dados:

```markdown
### Dicionário de Dados

- <nome_da_tabela>_id: Chave primária. Identificador único do registro de <nome_do_conceito>;
- ready: Indica se o registro está processado/pronto para uso. Padrão: true;
- display: Indica se o registro deve ser exibido visualmente no sistema. Padrão: true;
- register_create_date: Data e hora de criação do registro em UTC;
- register_create_user: ID do usuário proprietário que criou o registro. Chave estrangeira que se relaciona com auth.users;
- register_update_date: Data e hora da última atualização do registro em UTC;
- register_update_user: ID do usuário que realizou a última atualização. Chave estrangeira que se relaciona com auth.users;
- register_delete_date: Data e hora da exclusão lógica (soft delete);
- register_delete_user: ID do usuário que efetuou a exclusão lógica. Chave estrangeira que se relaciona com auth.users;
- <campo_especifico>: Descrição detalhada do campo específico;
```

---

## 💡 Exemplo Completo de Referência: Tabela `product_category`

```markdown
# product_category

```sql
create table public.product_category (
  product_category_id uuid not null default gen_random_uuid (),
  ready boolean null default true,
  display boolean null default true,
  register_create_date timestamp with time zone null default (now() AT TIME ZONE 'utc'::text),
  register_create_user uuid null default auth.uid (),
  register_update_date timestamp with time zone null default (now() AT TIME ZONE 'utc'::text),
  register_update_user uuid null default auth.uid (),
  register_delete_date timestamp with time zone null,
  register_delete_user uuid null,
  name character varying not null,
  slug character varying not null,
  icon character varying null,
  sort_order integer not null default 0,
  constraint product_category_pkey primary key (product_category_id),
  constraint product_category_register_create_user_fkey foreign KEY (register_create_user) references auth.users (id),
  constraint product_category_register_delete_user_fkey foreign KEY (register_delete_user) references auth.users (id),
  constraint product_category_register_update_user_fkey foreign KEY (register_update_user) references auth.users (id)
) TABLESPACE pg_default;

-- Índice para o dono do registro
create index IF not exists product_category_register_create_user_idx on public.product_category using btree (register_create_user) TABLESPACE pg_default;

-- Índice para ordenação das categorias na ementa
create index IF not exists product_category_sort_order_idx on public.product_category using btree (sort_order) TABLESPACE pg_default;

-- Habilitação do RLS
alter table public.product_category enable row level security;

-- Política de gerenciamento exclusivo pelo dono autenticado
create policy "Apenas o dono autenticado pode gerenciar seu registro"
on public.product_category
for all
to authenticated
using (register_create_user = auth.uid())
with check (register_create_user = auth.uid());

-- Política de consulta pública para exibir as categorias na ementa digital (sem amarrar filtros no RLS)
create policy "Leitura publica"
on public.product_category
for select
to anon, authenticated
using (true);
```

### Dicionário de Dados

- product_category_id: Chave primária que identifica unicamente a categoria de produtos;
- ready: Indica se o registro está processado/pronto para uso. Padrão: true;
- display: Indica se o registro deve ser exibido visualmente na ementa. Padrão: true;
- register_create_date: Data e hora de criação do registro em UTC;
- register_create_user: ID do usuário criador e dono da categoria. Chave estrangeira relacionada com auth.users;
- register_update_date: Data e hora da última atualização do registro em UTC;
- register_update_user: ID do usuário que efetuou a última atualização. Chave estrangeira com auth.users;
- register_delete_date: Data e hora da exclusão lógica (soft delete);
- register_delete_user: ID do usuário que efetuou a exclusão lógica. Chave estrangeira com auth.users;
- name: Nome da categoria (ex: "Entradas", "Bebidas", "Sobremesas");
- slug: Identificador textual amigável para URLs ou âncoras (ex: "entradas");
- icon: Nome do ícone da biblioteca Lucide React associado à categoria;
- sort_order: Ordem numérica de exibição da categoria no menu deslizante da ementa;
```

---

## 📋 Checklist de Verificação para a IA

Ao criar ou documentar uma nova tabela no Supabase, certifique-se de:

1. [ ] A chave primária possui o sufixo `_id` precedido pelo nome da tabela (ex: `<nome_da_tabela>_id`)?
2. [ ] Os **8 campos obrigatórios padrão** (`ready`, `display`, `register_create_date`, `register_create_user`, `register_update_date`, `register_update_user`, `register_delete_date`, `register_delete_user`) foram incluídos como os **primeiros** campos da tabela?
3. [ ] O RLS foi ativado (`alter table public.<nome_da_tabela> enable row level security;`)?
4. [ ] Foi configurada a política para que **apenas o dono autenticado possa mexer no registro** (`using (register_create_user = auth.uid()) with check (register_create_user = auth.uid())`)?
5. [ ] Foi realizada a **análise de acesso público**? Se a tabela precisa ser visualizada na ementa pública por visitantes anônimos (ex: produtos, categorias, dados públicos), foi incluída a política `for select to anon, authenticated using (true)` sem amarrar filtros no RLS?
6. [ ] Todas as chaves estrangeiras de auditoria possuem `CONSTRAINT` explícita referenciando `auth.users (id)`?
7. [ ] Foram criados **índices dedicados** para a coluna `register_create_user` e colunas de busca/ordenação frequente, sem cláusulas rígidas que excluam rascunhos ou lixeira?
8. [ ] Foram utilizados os tipos de dados otimizados (`uuid`, `smallint` para enums/status, `bigint` ou `integer` para moedas em centavos, `gin` para `jsonb`)?
9. [ ] O dicionário de dados foi criado descrevendo a chave primária, os 8 campos padrão e todos os campos específicos da tabela?
10. [ ] A documentação foi salva no diretório correto: `supabase/tables/<nome_da_tabela>.md`?

