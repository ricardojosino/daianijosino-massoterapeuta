export interface SpaceMoment {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  sensoryDetail: string;
  iconName: string;
}

export const spaceData = {
  badge: "A Experiência no Espaço",
  title: "A Jornada do Silêncio em Quatro Momentos",
  subtitle:
    "Não é apenas uma sala com uma maca. É um ambiente desenhado para acalmar a sua amígdala cerebral no instante em que você fecha a porta para o barulho da cidade.",
  moments: [
    {
      number: "01",
      title: "O Pouso & O Chá de Boas-Vindas",
      subtitle: "A transição suave da rua para o seu refúgio",
      description:
        "Você chega, tira os sapatos e se senta em uma poltrona confortável. Servimos uma infusão morna de ervas digestivas e calmantes (capim-cidreira, gengibre e hortelã fresca). Conversamos 10 minutos para compreender o que o seu corpo enfrentou esta semana.",
      sensoryDetail: "Infusão botânica fresca e toalha morna com óleo essencial de lavanda",
      iconName: "Coffee",
    },
    {
      number: "02",
      title: "A Desconexão & A Maca Aquecida",
      subtitle: "O calor que dissolve as couraças musculares",
      description:
        "Você se deita sobre lençóis de algodão acetinado e um lençol térmico regulado a agradáveis 38°C. A penumbra dourada da cromoterapia suave e os sons acústicos de baixa frequência sinalizam ao seu corpo que aqui é seguro descansar.",
      sensoryDetail: "Maca extra-larga de 80cm com espumação viscoelástica e aquecimento suave",
      iconName: "BedDouble",
    },
    {
      number: "03",
      title: "O Toque Consciente & O Silêncio",
      subtitle: "Onde as mãos encontram o nó e a respiração se solta",
      description:
        "Sem conversas desnecessárias ou interrupções. Durante a massagem, há apenas o som da respiração ritmada, o aroma puro dos óleos vegetais aquecidos e a pressão precisa que dissolve nós musculares e drena o cansaço acumulado.",
      sensoryDetail: "Óleos 100% vegetais prensados a frio com certificação de pureza aromaterapêutica",
      iconName: "Flower2",
    },
    {
      number: "04",
      title: "O Retorno Suave & O Despertar",
      subtitle: "Sem pressa para levantar ou voltar à correria",
      description:
        "Ao terminar, você permanece alguns minutos deitada sob o calor. Compressas mornas limpam delicadamente o excesso de óleo. Você se veste com calma e bebe água cristalina filtrada para reidratar os tecidos que foram liberados.",
      sensoryDetail: "Tempo extra de descompressão antes de voltar à sua rotina",
      iconName: "Sparkles",
    },
  ],
  ambianceHighlights: [
    "Isolamento acústico com vedação de ruídos urbanos",
    "Apenas uma cliente por vez — privacidade 100% garantida",
    "Lençóis e toalhas higienizados com lavanderia profissional ecológica",
    "Localização tranquila e segura nos Jardins com fácil estacionamento",
  ],
};
