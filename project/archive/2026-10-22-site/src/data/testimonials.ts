export interface TestimonialItem {
  id: string;
  quoteTitle: string;
  story: string;
  author: string;
  authorContext: string;
  ritualChosen: string;
  timeAsClient: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "relato-mariana",
    quoteTitle: "Pela primeira vez em meses, minha cabeça parou de zumbir de tensão.",
    story:
      "Trabalho com litígios no direito corporativo e tenho dois filhos pequenos. Eu vivia com os dentes cerrados por bruxismo e os ombros na altura das orelhas. Na primeira sessão com a Daiani, quando a maca aquecida e aquele aroma de bergamota me envolveram, comecei a chorar de alívio sem nem perceber. O toque dela é diferente: não é mecânico, tem presença. Faz 6 meses que virou meu compromisso inegociável de toda quinzena.",
    author: "Mariana Vasconcellos",
    authorContext: "41 anos, Advogada & Mãe",
    ritualChosen: "O Ritual do Silêncio + Terapêutica",
    timeAsClient: "Cliente há 6 meses",
  },
  {
    id: "relato-beatriz",
    quoteTitle: "A sensação de que meu corpo ganhou espaço interno para respirar.",
    story:
      "Como arquiteta, passo horas sentada desenhando na prancheta ou em obras inspecionando pisos. Minha lombar travava com frequência. A Daiani encontrou exatamente a raiz do problema no músculo piriforme e no diafragma. A massagem com velas quentes foi uma das sensações mais acolhedoras da minha vida. Você sai do espaço com a postura alinhada e leve como pluma.",
    author: "Beatriz Mendonça",
    authorContext: "35 anos, Arquiteta Urbanista",
    ritualChosen: "O Fogo & A Cera Quente + Liberação",
    timeAsClient: "Cliente há 1 ano",
  },
  {
    id: "relato-camila",
    quoteTitle: "O cuidado mais carinhoso e seguro que recebi durante toda a minha gravidez.",
    story:
      "Entrei no 7º mês com as pernas inchadas, dor aguda no ciático e noites em claro. Eu tinha muito receio de qualquer massagem durante a gestação. A Daiani me explicou com paciência cada posicionamento, usou travesseiros anatômicos perfeitos e óleos seguros. Pude dormir duas horas seguidas de pura paz depois do atendimento. Recomendo para toda grávida que conheço.",
    author: "Camila Ribeiro",
    authorContext: "32 anos, Gestora & Mãe do Bento",
    ritualChosen: "O Abraço Gravídico (Pré-Natal)",
    timeAsClient: "Cliente há 8 meses",
  },
];
