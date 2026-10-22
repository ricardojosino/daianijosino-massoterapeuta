---
title: "Skill Page Privacy & RGPD Compliance"
description: "Padrão arquitetural e diretrizes jurídicas para implementação de aviso de cookies, gestão de dados dinâmicos e Política de Privacidade em conformidade com o RGPD de Portugal em qualquer site"
---

# Skill: Página de Privacidade, Consentimento de Cookies & RGPD (Portugal/UE)

Esta skill estabelece o padrão arquitetural, visual e jurídico para implementar a conformidade com o **Regulamento Geral sobre a Proteção de Dados (RGPD / Regulamento UE 2016/679)** e a legislação portuguesa (**Lei n.º 58/2019 e CNPD**) em qualquer site ou aplicação web.

Ela foi desenhada para ser **100% genérica e reutilizável**, funcionando para qualquer tipo de negócio (SaaS, E-commerce, Site Institucional, Prestadores de Serviços, Portfólios ou Landing Pages) através do **desacoplamento total dos dados dinâmicos**.

---

## 1. DESACOPLAMENTO DE DADOS DINÂMICOS (`src/data/privacyData.ts`)

Nunca coloque dados institucionais, contactos ou listas de cookies diretamente no código JSX ou hardcoded no texto. Toda e qualquer informação que possa variar de empresa para empresa deve residir em um arquivo de dados dedicado.

### 1.1 Modelo e Tipagem (`src/data/privacyData.ts`)
Crie ou configure o arquivo com a seguinte estrutura TypeScript:

```typescript
export interface CookieItem {
  name: string;
  provider: string;
  purpose: string;
  category: "necessary" | "analytics" | "marketing";
  duration: string;
}

export interface PrivacyData {
  company: {
    brandName: string;         // Nome comercial / Marca (ex: "Minha Empresa")
    legalName: string;         // Razão social / Entidade jurídica (ex: "Minha Empresa, Lda.")
    taxNumber: string;         // NIF / NIPC em Portugal (ex: "PT 123 456 789")
    address: string;           // Morada / Sede física (ex: "Avenida da Liberdade, Lisboa, Portugal")
    country: string;           // País de jurisdição principal (ex: "Portugal")
  };
  contacts: {
    privacyEmail: string;      // E-mail oficial para direitos RGPD (ex: "privacidade@dominio.pt")
    supportEmail: string;      // E-mail de apoio ao cliente (ex: "suporte@dominio.pt")
    dpoContact?: string;       // Encarregado de Proteção de Dados (opcional se não aplicável)
  };
  website: {
    name: string;              // Nome do website
    url: string;               // URL principal (ex: "https://dominio.pt")
    lastUpdated: string;       // Mês e ano da última revisão (ex: "Maio de 2026")
  };
  businessModel: "institutional" | "saas" | "ecommerce" | "services" | "lead_generation";
  supervisoryAuthority: {
    name: string;              // "Comissão Nacional de Proteção de Dados (CNPD)"
    website: string;           // "https://www.cnpd.pt"
    address: string;           // "Av. D. Carlos I, 134 - 1.º, 1200-651 Lisboa, Portugal"
  };
  cookies: CookieItem[];
}

export const privacyData: PrivacyData = {
  company: {
    brandName: "Nome da Marca",
    legalName: "Entidade Legal, Lda.",
    taxNumber: "PT 000 000 000",
    address: "Rua Exemplo, n.º 123, Lisboa, Portugal",
    country: "Portugal",
  },
  contacts: {
    privacyEmail: "privacidade@dominio.pt",
    supportEmail: "contacto@dominio.pt",
  },
  website: {
    name: "Nome do Site",
    url: "https://dominio.pt",
    lastUpdated: "Maio de 2026",
  },
  businessModel: "services", // Alterne conforme o caso
  supervisoryAuthority: {
    name: "Comissão Nacional de Proteção de Dados (CNPD)",
    website: "https://www.cnpd.pt",
    address: "Av. D. Carlos I, 134 - 1.º, 1200-651 Lisboa, Portugal",
  },
  cookies: [
    {
      name: "cookie_consent",
      provider: "Próprio",
      purpose: "Armazena a preferência de consentimento de cookies do utilizador.",
      category: "necessary",
      duration: "1 ano",
    },
    {
      name: "session_token",
      provider: "Próprio",
      purpose: "Garante a segurança e autenticação da sessão do utilizador.",
      category: "necessary",
      duration: "Sessão",
    },
    {
      name: "_ga, _gid",
      provider: "Google Analytics (se aplicável)",
      purpose: "Estatísticas anónimas de navegação para melhoria de desempenho.",
      category: "analytics",
      duration: "13 meses",
    },
  ],
};
```

---

## 2. COMPONENTE ISOLADO DE CONSENTIMENTO DE COOKIES (`CookieBanner.tsx`)

O aviso de cookies deve ser um componente isolado e não bloqueante, com design discreto, suave e elegante, posicionado no canto inferior da tela.

### 2.1 Requisitos de Comportamento
1. **Verificação Prévia**: Ao montar o componente no cliente, verificar no `localStorage` a existência da chave de consentimento.
2. **Layout Discreto**: Flutuante (`fixed bottom-4 left-4 z-50 max-w-sm`), cantos arredondados, leve efeito de desfoque de fundo (`backdrop-blur-md`), borda sutil e sombra suave.
3. **Ação "Entendi" / "Aceitar"**: Gravar no `localStorage` a chave de consentimento (`localStorage.setItem("cookie_consent", "true")`) e fechar o banner com transição suave.
4. **Link Direto**: Botão ou link direto para a página `/privacidade`.
5. **Bloqueio de Scripts**: Scripts analíticos e de marketing não devem ser carregados antes do consentimento explícito.

### 2.2 Código Padrão do Componente (`src/components/CookieBanner.tsx`)
```tsx
'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { privacyData } from "@/data/privacyData";

const STORAGE_KEY = `${privacyData.company.brandName.toLowerCase().replace(/\s+/g, '_')}_cookie_consent`;

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) {
        setIsVisible(true);
      }
    } catch {
      // Falha segura se localStorage estiver bloqueado pelo navegador
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        accepted: true,
        timestamp: new Date().toISOString(),
      }));
    } catch (e) {
      console.error("Erro ao guardar consentimento:", e);
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          role="region"
          aria-label="Aviso de Cookies e Privacidade"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 z-50 max-w-sm w-[calc(100vw-2rem)] pointer-events-none"
        >
          <div className="bg-zinc-900/95 backdrop-blur-md text-zinc-100 p-5 rounded-2xl shadow-2xl border border-zinc-800/60 pointer-events-auto flex flex-col gap-4">
            <p className="text-xs sm:text-sm font-light leading-relaxed text-zinc-300">
              Utilizamos cookies essenciais para garantir o correto funcionamento do site e ferramentas de análise para melhorar a sua experiência. Para mais detalhes, consulte a nossa{" "}
              <Link
                href="/privacidade"
                className="underline underline-offset-2 hover:text-white font-medium transition-colors text-brand"
              >
                Política de Privacidade
              </Link>.
            </p>

            <div className="flex items-center justify-between gap-3 pt-1">
              <Link
                href="/privacidade"
                className="text-xs text-zinc-400 hover:text-zinc-200 underline transition-colors"
              >
                Saber mais
              </Link>
              <button
                onClick={handleAccept}
                className="cursor-pointer bg-white hover:bg-zinc-100 text-zinc-900 font-semibold px-5 py-2 text-xs rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Entendi
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
```

---

## 3. PÁGINA DE PRIVACIDADE (`src/app/privacidade/page.tsx`)

A página de privacidade deve ser um Server Component com SEO otimizado, importando o conteúdo e os dados dinâmicos.

### 3.1 Estrutura de Arquivos Recomendada
```
src/app/privacidade/
├── page.tsx            # Server Component com Metadata e Layout
└── Content.tsx         # Renderização estilizada da política com os dados dinâmicos
```

### 3.2 Metadata SEO Obrigatória em `page.tsx`
```tsx
import type { Metadata } from 'next';
import Content from './Content';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { privacyData } from '@/data/privacyData';

export const metadata: Metadata = {
  title: `Política de Privacidade | ${privacyData.company.brandName}`,
  description: `Conheça a Política de Privacidade e Tratamento de Dados da ${privacyData.company.brandName} em conformidade com o RGPD em Portugal.`,
  alternates: {
    canonical: '/privacidade',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans flex flex-col justify-between">
      <Navbar />
      <div className="grow">
        <Content data={privacyData} />
      </div>
      <Footer />
    </main>
  );
}
```

---

## 4. TEXTO MÍNIMO VIÁVEL (TMV) EM CONFORMIDADE COM O RGPD (PORTUGAL / UE)

Abaixo encontra-se o template jurídico completo do Texto Mínimo Viável (TMV), redigido em conformidade estrita com o **RGPD (Regulamento UE 2016/679)**, a **Lei n.º 58/2019 de Portugal** e as diretrizes da **CNPD**.

Os marcadores `{data.campo}` devem ser interpolados dinamicamente com os valores de `src/data/privacyData.ts`.

---

```markdown
# Política de Privacidade e Tratamento de Dados

**Última atualização:** {data.website.lastUpdated}

A **{data.company.legalName}** (doravante designada por **"{data.company.brandName}"**, "nós" ou "nosso"), com sede em {data.company.address} e NIF/NIPC {data.company.taxNumber}, assume o compromisso de proteger a privacidade e os dados pessoais de todos os utilizadores, clientes e parceiros do website {data.website.url}.

A presente Política de Privacidade regula o tratamento de dados pessoais realizado no âmbito da utilização do nosso website e serviços, em estrito cumprimento com o **Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento UE 2016/679)** e a **Lei n.º 58/2019, de 8 de agosto** (legislação nacional de execução do RGPD em Portugal).

---

## 1. Responsável pelo Tratamento dos Dados

Para efeitos da legislação aplicável de proteção de dados, a entidade Responsável pelo Tratamento (Data Controller) é:
- **Denominação:** {data.company.legalName}
- **Marca:** {data.company.brandName}
- **NIF/NIPC:** {data.company.taxNumber}
- **Sede:** {data.company.address}
- **E-mail de Contacto para Privacidade:** {data.contacts.privacyEmail}
- **E-mail de Apoio Geral:** {data.contacts.supportEmail}

---

## 2. Dados Pessoais que Recolhemos

Recolhemos apenas os dados estritamente necessários para a execução dos nossos serviços e melhoria contínua da experiência de navegação:

1. **Dados de Identificação e Contacto:** Nome completo, endereço de correio eletrónico, número de telefone e dados de faturação (NIF e morada fiscal, quando aplicável para compra ou prestação de serviço).
2. **Dados de Navegação e Técnicos:** Endereço IP anonimizado, tipo de navegador, sistema operativo, páginas visitadas, tempo de permanência e identificadores recolhidos via cookies estritamente necessários.
3. **Dados de Mensagens e Comunicações:** Conteúdos e anexos remetidos através dos nossos formulários de contacto, pedidos de suporte ou canais diretos de comunicação.

---

## 3. Finalidades e Bases Legais do Tratamento (Artigo 6.º do RGPD)

Tratamos os seus dados pessoais com base nos seguintes fundamentos jurídicos:

| Finalidade do Tratamento | Base Legal Aplicável (RGPD) |
| :--- | :--- |
| **Prestação do Serviço e Gestão de Conta:** Execução do contrato de fornecimento de serviço ou diligências pré-contratuais a pedido do utilizador. | Artigo 6.º, n.º 1, alínea b) |
| **Emissão de Faturas e Cumprimento Fiscal:** Cumprimento de obrigações legais impostas pela Autoridade Tributária e Aduaneira em Portugal. | Artigo 6.º, n.º 1, alínea c) |
| **Atendimento de Contactos e Suporte:** Diligências pré-contratuais ou interesse legítimo em responder a esclarecimentos e prestar assistência. | Artigo 6.º, n.º 1, alíneas b) e f) |
| **Cookies Analíticos e Comunicações de Marketing:** Apenas mediante consentimento prévio, livre, específico, informado e inequívoco do utilizador. | Artigo 6.º, n.º 1, alínea a) |
| **Segurança e Prevenção de Fraude:** Interesse legítimo em salvaguardar a integridade, resiliência e estabilidade da nossa plataforma digital. | Artigo 6.º, n.º 1, alínea f) |

---

## 4. O Nosso Papel no Tratamento de Dados (Para Plataformas e Softwares)

*(Nota: Se o seu website for um software/SaaS onde utilizadores gerem dados de terceiros, mantenha esta cláusula. Caso seja um site institucional tradicional, esta secção pode ser simplificada.)*

1. **Quanto aos Dados dos Nossos Utilizadores e Clientes Diretos:** A **{data.company.brandName}** atua na qualidade de **Responsável pelo Tratamento (Data Controller)**.
2. **Quanto aos Dados Inseridos pelos Utilizadores na Plataforma (Dados de Terceiros):** A **{data.company.brandName}** atua estritamente como **Subcontratante (Data Processor)**. O utilizador contratante atua como Responsável pelo Tratamento dos dados que insere, cabendo-lhe garantir a legitimidade da recolha e a obtenção de consentimento prévio. A **{data.company.brandName}** nunca utiliza nem cede esses dados para fins comerciais próprios.

---

## 5. Prazo de Conservação dos Dados

Os dados pessoais são conservados apenas durante o período estritamente necessário para cumprir as finalidades para as quais foram recolhidos:

- **Dados de Contacto e Mensagens:** Conservados até à resolução definitiva do pedido e por um período adicional máximo de 12 meses.
- **Dados de Contas de Utilizador:** Conservados enquanto a conta permanecer ativa e pelo período acordado contratualmente após o seu cancelamento.
- **Dados Fiscais e de Faturação:** Conservados pelo prazo legal obrigatório de **10 (dez) anos**, nos termos do Código do IRC e da legislação fiscal portuguesa em vigor.
- **Dados de Navegação / Cookies:** Pelo prazo definido na tabela de cookies ou até à eliminação manual pelo utilizador no seu navegador.

---

## 6. Destinatários e Transferência de Dados

Não vendemos, alugamos nem comercializamos dados pessoais a terceiros. Os seus dados apenas poderão ser partilhados com:
1. **Prestadores de Serviços Essenciais (Subcontratantes):** Empresas de infraestrutura em nuvem, alojamento web, processamento de pagamentos ou envio de e-mails transacionais que cumprem integralmente o RGPD.
2. **Autoridades Judiciais ou Regulatórias:** Sempre que exigido por obrigação legal ou ordem judicial válida.

**Localização dos Servidores:** Os dados são armazenados preferencialmente em servidores localizados na **União Europeia**. Caso ocorra alguma transferência para países terceiros fora do Espaço Económico Europeu (EEE), garantimos a aplicação de salvaguardas adequadas, como as Cláusulas Contratuais-Tipo (SCCs) da Comissão Europeia.

---

## 7. Direitos dos Titulares dos Dados (Artigos 15.º a 22.º do RGPD)

Nos termos do RGPD, assistem-lhe os seguintes direitos fundamentais:

- **Direito de Acesso:** Obter confirmação de que os seus dados são tratados e aceder a uma cópia dos mesmos.
- **Direito de Retificação:** Solicitar a correção imediata de dados incorretos ou desatualizados.
- **Direito ao Apagamento ("Direito a ser Esquecido"):** Solicitar a eliminação dos seus dados quando já não forem necessários para a finalidade inicial ou quando retirar o consentimento, ressalvadas as obrigações legais de arquivo fiscal.
- **Direito à Limitação do Tratamento:** Solicitar o congelamento temporário do tratamento dos seus dados em determinadas circunstâncias legais.
- **Direito de Portabilidade:** Receber os seus dados num formato estruturado, de uso corrente e de leitura automática.
- **Direito de Oposição:** Opor-se a tratamentos baseados no interesse legítimo da empresa ou para efeitos de marketing direto.
- **Direito de Revogar o Consentimento:** Retirar a qualquer momento o consentimento concedido anteriormente, sem comprometer a licitude do tratamento efetuado até essa data.

### Como Exercer os Seus Direitos
Para exercer qualquer um destes direitos, basta enviar um pedido escrito acompanhado de prova razoável da sua identidade para:
👉 **E-mail:** {data.contacts.privacyEmail}
👉 **Morada Postal:** {data.company.address}

Os pedidos serão respondidos de forma gratuita no prazo máximo de **30 (trinta) dias**, salvo em casos de complexidade excecional devidamente justificada.

---

## 8. Segurança da Informação

Implementamos medidas técnicas e organizativas rigorosas para proteger os seus dados contra acessos não autorizados, perdas, destruição ou alterações acidentais:
- Comunicações encriptadas através de protocolo seguro **HTTPS / TLS**.
- Armazenamento em bases de dados seguras com controlo de acessos restrito e autenticado.
- Monitorização e backups periódicos de integridade de dados.

---

## 9. Política e Tabela de Cookies

O nosso website utiliza cookies para otimizar o funcionamento da página.

### O que são Cookies?
Cookies são pequenos ficheiros de texto guardados no seu computador ou dispositivo móvel através do navegador de internet.

### Cookies Utilizados no Website:
{Tabela gerada dinamicamente a partir de data.cookies}

| Nome | Fornecedor | Categoria | Finalidade | Duração |
| :--- | :--- | :--- | :--- | :--- |
| **cookie_consent** | Próprio | Necessário | Grava a confirmação de consentimento de cookies. | 1 ano |
| **session_token** | Próprio | Necessário | Gestão de sessão e segurança de navegação. | Sessão |

### Como Desativar ou Gerir Cookies:
Pode a qualquer momento configurar o seu navegador de internet para recusar ou apagar cookies:
- **Google Chrome:** Definições > Privacidade e Segurança > Cookies de terceiros.
- **Mozilla Firefox:** Opções > Privacidade e Segurança > Cookies e dados de sites.
- **Apple Safari:** Preferências > Privacidade > Bloquear todos os cookies.
- **Microsoft Edge:** Definições > Permissões do site > Cookies e dados de sites.

A desativação de cookies estritamente necessários pode comprometer algumas funcionalidades essenciais da plataforma.

---

## 10. Direito de Reclamação à Autoridade de Controlo

Sem prejuízo de qualquer outro recurso administrativo ou judicial, caso considere que o tratamento dos seus dados viola as normas do RGPD ou da lei portuguesa, tem o direito de apresentar uma reclamação formal à autoridade nacional de controlo:

🏛️ **{data.supervisoryAuthority.name}**
- **Website:** [{data.supervisoryAuthority.website}]({data.supervisoryAuthority.website})
- **Morada:** {data.supervisoryAuthority.address}
- **Telefone:** (+351) 213 928 400
- **E-mail:** geral@cnpd.pt

---

## 11. Alterações a Esta Política de Privacidade

Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento para refletir eventuais alterações legais, regulamentares ou operacionais. A versão em vigor será sempre a publicada nesta página, com indicação da respetiva data de atualização.
```

---

## 5. OBRIGATORIEDADE DE LINKS E CHECKLIST RGPD PARA QUALQUER SITE

Toda a implementação de novas páginas ou sites deve cumprir este checklist antes de ser considerada concluída:

1. [ ] **Banner de Consentimento:** O componente `CookieBanner.tsx` está presente em todas as rotas e não volta a abrir após o clique em "Entendi".
2. [ ] **Link no Rodapé:** O link para `/privacidade` consta de forma permanente e visível no componente `Footer.tsx`.
3. [ ] **Formulários de Contacto e Envio de Dados:**
    - Possuem um texto ou checkbox com link direto para `/privacidade`.
    - A checkbox de consentimento está **desmarcada por padrão** (o utilizador deve marcá-la voluntariamente — princípio do *opt-in*).
4. [ ] **Dados Desacoplados:** O arquivo `src/data/privacyData.ts` está preenchido com a entidade legal, NIF, morada e e-mails corretos do projeto em questão.
5. [ ] **Prazos de Faturação:** Informa o prazo obrigatório de 10 anos de retenção de dados fiscais segundo o direito português.
6. [ ] **Menção à CNPD:** O texto legal contém o nome e o link oficial da Comissão Nacional de Proteção de Dados de Portugal.
7. [ ] **Responsável vs Subcontratante:** O modelo de negócio do site (se é SaaS, institucional ou prestador) está devidamente refletido na secção 4 da política.
