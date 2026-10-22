import React from "react";
import { MapPin, Phone, Clock, MessageCircle, Heart, Sparkles } from "lucide-react";
import { navigationItems, contactInfo } from "@/data/navigation";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-section-muted border-t border-border/80 text-foreground pt-14 pb-8">
      <div className="box-container-boxed">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border">
          {/* Coluna 1: Apresentação da Marca (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                Daiani Josino
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
                Massoterapia & Bem-Estar Feminino
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Um santuário de reconexão corporal e serenidade mental. Técnicas integrativas de massoterapia que aliviam dores, desfazem tensões e restauram a sua harmonia vital.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-medium text-foreground/80 bg-white/70 py-1.5 px-3 rounded-full border border-border w-fit mt-1">
              <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
              <span>Atendimento exclusivo e individualizado para mulheres</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
              Links Rápidos
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                    contactInfo.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener"
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                >
                  <span>Agendar Horário</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato & Localização (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
              Atendimento & Contato
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="size-4.5 text-primary shrink-0" aria-hidden="true" />
                <span>{contactInfo.openingHours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4.5 text-primary shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${contactInfo.whatsappNumber}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="size-4.5 text-[#25D366] shrink-0" aria-hidden="true" />
                <a
                  href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                    contactInfo.whatsappQuestionsMessage
                  )}`}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-primary transition-colors font-medium text-foreground"
                >
                  WhatsApp: Tire suas dúvidas
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                {/* Ícone Instagram inline SVG de alta fidelidade */}
                <svg
                  className="size-4.5 text-[#E4405F] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior / Direitos autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Daiani Josino Massoterapia. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1.5">
            <span>Feito com</span>
            <Heart className="size-3.5 text-destructive fill-destructive" aria-hidden="true" />
            <span>para o equilíbrio e bem-estar de mulheres</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
