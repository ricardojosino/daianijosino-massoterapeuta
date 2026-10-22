export interface ServiceItem {
  id: string;
  ritualNumber: string;
  ritualName: string;
  serviceType: string;
  tagline: string;
  feelingMatchId: string;
  feelingLabel: string;
  feelingDescription: string;
  description: string;
  sensoryNotes: {
    aroma: string;
    texture: string;
    temperature: string;
  };
  ritualSteps: [string, string, string];
  benefits: string[];
  duration: string;
  badge: string;
  whatsappMessage: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "relaxante-aromaterapia",
    ritualNumber: "01",
    ritualName: "O Ritual do Silêncio",
    serviceType: "Massagem Relaxante com Aromaterapia Botânica",
    tagline: "Para quem sente a mente acelerada, o peito apertado e o sono fragmentado.",
    feelingMatchId: "mente-exausta",
    feelingLabel: "Mente acelerada & Esgotamento mental",
    feelingDescription: "Para quem não consegue desligar os pensamentos, sente o peito pesado e precisa desacelerar o sistema nervoso.",
    description:
      "Uma coreografia lenta de deslizamentos profundos, contínuos e sem interrupções bruscas. Desenvolvida para retirar o corpo do estado de alerta crônico e conduzi-lo às ondas cerebrais de repouso restaurador através de toques suaves e respiração sincronizada.",
    sensoryNotes: {
      aroma: "Lavanda Francesa pura, Bergamota e notas de Cedro",
      texture: "Óleo vegetal de semente de uva aquecido, acetinado e leve",
      temperature: "Toalhas mornas no início e lençol térmico em 38°C",
    },
    ritualSteps: [
      "Boas-vindas aromática com inalação guiada e respiração diafragmática",
      "Deslizamentos longos da cervical aos pés, dissolvendo o cortisol",
      "Fechamento com compressa quente nos olhos e toalhas térmicas nas têmporas",
    ],
    benefits: [
      "Desaceleração imediata do sistema nervoso simpático",
      "Indução a noites de sono profundo e reparador",
      "Sensação de flutuação e esvaziamento do ruído mental",
    ],
    duration: "60 ou 90 min",
    badge: "Assinatura do Espaço",
    whatsappMessage: "Olá Daiani! Sinto minha mente muito acelerada e gostaria de agendar o Ritual do Silêncio (Massagem Relaxante).",
  },
  {
    id: "massagem-terapeutica",
    ritualNumber: "02",
    ritualName: "A Descompressão Profunda",
    serviceType: "Massagem Terapêutica & Desativação de Trigger Points",
    tagline: "Para quem carrega nos ombros, pescoço e lombar o peso de semanas difíceis.",
    feelingMatchId: "tensao-muscular",
    feelingLabel: "Dores agudas, pescoço travado & Nós nas costas",
    feelingDescription: "Para quem sente os ombros rígidos como pedra, dor lombar ao sentar ou queimação na cervical.",
    description:
      "A anatomia a serviço do alívio real. Focamos diretamente nas fáscias enrijecidas e nos pontos-gatilho onde o estresse se cristaliza. Manobras firmes e conscientes que desfazem os nós musculares sem violência, respeitando o limite do seu corpo.",
    sensoryNotes: {
      aroma: "Alecrim selvagem, Eucalipto glóbulo e Menta piperita",
      texture: "Bálsamo terapêutico de arnica e copaíba amazônica",
      temperature: "Pedras vulcânicas ou compressas quentes para amaciar o tecido antes da pressão",
    },
    ritualSteps: [
      "Mapeamento tátil das contraturas e verificação de amplitude articular",
      "Descompressão miofascial e pressão sustentada nos pontos de dor",
      "Alongamento passivo assistido e soltura da cintura escapular",
    ],
    benefits: [
      "Alívio duradouro de dores de cabeça tensionais e enxaquecas",
      "Devolução da mobilidade livre de pescoço, ombros e coluna",
      "Liberação da rigidez acumulada em horas de tela e postura de trabalho",
    ],
    duration: "60 ou 80 min",
    badge: "Alívio Focal",
    whatsappMessage: "Olá Daiani! Estou com muitas dores nas costas e pescoço e gostaria de agendar a Descompressão Profunda (Terapêutica).",
  },
  {
    id: "drenagem-linfatica",
    ritualNumber: "03",
    ritualName: "A Linfática Esculpida",
    serviceType: "Drenagem Linfática Manual de Alta Precisão",
    tagline: "Para o corpo que se sente pesado, retido e intoxicado pelo ritmo da rotina.",
    feelingMatchId: "corpo-pesado",
    feelingLabel: "Corpo inchado, peso nas pernas & Retenção hídrica",
    feelingDescription: "Para pernas pesadas ao fim do dia, retenção de líquidos pré-menstrual ou necessidade de detox corporal.",
    description:
      "Longe de massagens agressivas com dor desnecessária: a verdadeira drenagem é uma carícia fisiológica rítmica e precisa. Estimulamos as principais estações ganglionares, redirecionando o excesso de líquidos intersticiais e estimulando a filtragem natural.",
    sensoryNotes: {
      aroma: "Capim-limão orgânico, Toranja rosa e Cipreste italiano",
      texture: "Creme fluido hipoalergênico biocompatível com toque aveludado",
      temperature: "Ambiente fresco com conforto nos membros inferiores",
    },
    ritualSteps: [
      "Bombeamento manual e abertura dos gânglios (supraclaviculares e inguinais)",
      "Manobras circulares suaves e rítmicas nas pernas, abdômen e braços",
      "Drenagem facial gentil para desinchar bolsas oculares e contornos",
    ],
    benefits: [
      "Redução visível de medidas e sensação de leveza imediata nas pernas",
      "Ativação do retorno venoso e da imunidade natural",
      "Combate ao cansaço corporal crônico provocado pelo edema",
    ],
    duration: "60 min",
    badge: "Leveza & Detox",
    whatsappMessage: "Olá Daiani! Gostaria de agendar a Linfática Esculpida (Drenagem Manual) para desinchaço corporal.",
  },
  {
    id: "candle-massage",
    ritualNumber: "04",
    ritualName: "O Fogo & A Cera Quente",
    serviceType: "Candle Massage com Manteiga de Karité e Óleos Nobres",
    tagline: "Um casulo térmico para a mulher que precisa de aconchego, calor e restauração.",
    feelingMatchId: "autocuidado-luxo",
    feelingLabel: "Necessidade de afeto, acolhimento térmico & Pausa sensorial",
    feelingDescription: "Para quem sente frio interno, carência de descanso genuíno e quer uma experiência sensorial inesquecível.",
    description:
      "A chama de velas cosméticas 100% vegetais funde uma rica manteiga morna a 38,5°C. O óleo aquecido é derramado com suavidade sobre a pele, criando uma película nutritiva enquanto o calor penetra nas camadas mais profundas dos músculos, dissolvendo qualquer tensão residual.",
    sensoryNotes: {
      aroma: "Ylang-ylang floral, Baunilha de Madagascar e Flor de Laranjeira",
      texture: "Manteiga de karité pura e óleo de amêndoas doces aquecidos",
      temperature: "Calor envolvente contínuo a 38,5°C",
    },
    ritualSteps: [
      "Aquecimento da sala com luz de velas e difusão de óleos florais calmantes",
      "Fio contínuo de óleo morno sobre as costas, braços e pernas com manobras lentas",
      "Absorção cutânea profunda com pele extraordinariamente aveludada",
    ],
    benefits: [
      "Relaxamento térmico instantâneo das fibras musculares",
      "Nutrição e hidratação profunda da pele com ativos nobres",
      "Experiência multissensorial de puro acolhimento e afeto",
    ],
    duration: "60 ou 80 min",
    badge: "Experiência de Luxo",
    whatsappMessage: "Olá Daiani! Gostaria de vivenciar o ritual com velas quentes (Candle Massage).",
  },
  {
    id: "liberacao-miofascial",
    ritualNumber: "05",
    ritualName: "A Dança dos Meridianos",
    serviceType: "Shiatsu Integrativo & Restauração Postural",
    tagline: "Para quem busca realinhamento postural, flexibilidade e desbloqueio energético.",
    feelingMatchId: "postura-energia",
    feelingLabel: "Corpo rígido, falta de ar & Sobrecarga postural",
    feelingDescription: "Para quem passa o dia curvada sobre computadores ou sente a energia do corpo travada e bloqueada.",
    description:
      "Inspirado na medicina oriental e na biomecânica ocidental. Aplicamos pressões digitais precisas nos meridianos de acupuntura combinadas com trações suaves da coluna e soltura do diafragma. Devolve a respiração livre e a sensação de que o corpo ganhou espaço interno.",
    sensoryNotes: {
      aroma: "Sândalo terroso, Olíbano sagrado e Gengibre fresco",
      texture: "Atendimento com pouquíssimo atrito, priorizando a sustentação de pontos",
      temperature: "Maca acolchoada com temperatura neutra e aconchegante",
    },
    ritualSteps: [
      "Palpação dos trajetos energéticos e identificação de bloqueios",
      "Pressão profunda com polegares e palmas ao longo da coluna vertebral",
      "Abertura torácica com liberação do músculo diafragma",
    ],
    benefits: [
      "Restauração do fluxo de vitalidade e ânimo corporal",
      "Descompressão dos discos intervertebrais e melhora postural",
      "Respiração mais profunda e alívio do aperto no peito",
    ],
    duration: "60 min",
    badge: "Equilíbrio Oriental",
    whatsappMessage: "Olá Daiani! Gostaria de agendar o Shiatsu Integrativo (A Dança dos Meridianos).",
  },
  {
    id: "massagem-gestante",
    ritualNumber: "06",
    ritualName: "O Abraço Gravídico",
    serviceType: "Protocolo Especializado para Gestantes & Pós-Parto",
    tagline: "O refúgio seguro para acolher o corpo que gera vida em todas as transformações.",
    feelingMatchId: "gestacao",
    feelingLabel: "Gestante / Mãe recente (lombar sobrecarregada & inchaço)",
    feelingDescription: "Para a futura mãe a partir da 12ª semana com pés inchados, peso pélvico e noites mal dormidas.",
    description:
      "A gestação exige técnica impecável e segurança absoluta. Em decúbito lateral com travesseiros anatômicos que abraçam a barriga, realizamos manobras drenantes leves nas pernas e descompressão suave da lombar e do quadril, proporcionando conforto inestimável.",
    sensoryNotes: {
      aroma: "Camomila romana e Tangerina doce (100% seguros para a gestação)",
      texture: "Óleo de jojoba puro, neutro e biocompatível",
      temperature: "Conforto térmico ameno com almofadas de apoio lombar",
    },
    ritualSteps: [
      "Acomodação lateral protegida com travesseiro de corpo ergonômico",
      "Drenagem lenta e suave de pés, tornozelos e pernas fatigadas",
      "Massagem calmante nos ombros e no couro cabeludo para induzir o repouso",
    ],
    benefits: [
      "Alívio das dores no ciático, na lombar e na articulação sacroilíaca",
      "Combate ao edema gestacional sem pressão perigosa",
      "Momento íntimo de calma transmitido diretamente ao bebê",
    ],
    duration: "60 min",
    badge: "Maternidade Segura",
    whatsappMessage: "Olá Daiani! Sou gestante e gostaria de agendar uma sessão do Abraço Gravídico.",
  },
];
