export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "O Espaço", href: "#espaco" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export const contactInfo = {
  phone: "+55 (11) 99999-8888",
  whatsappNumber: "5511999998888",
  whatsappMessage: "Olá Daiani! Gostaria de informações para agendar uma sessão de massoterapia.",
  whatsappQuestionsMessage: "Olá Daiani! Tenho algumas dúvidas sobre os atendimentos e gostaria de conversar.",
  instagram: "@daianijosino.massoterapia",
  instagramUrl: "https://instagram.com",
  address: "Rua das Flores, 120 - Sala 42, Jardins, São Paulo - SP",
  openingHours: "Segunda a Sexta: 08:00 às 20:00 | Sábado: 08:00 às 14:00",
};
