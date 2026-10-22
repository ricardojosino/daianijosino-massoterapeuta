import React from "react";
import { Sparkles, Clock, ArrowRight, Wind, Droplet, Thermometer, Check } from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { contactInfo } from "@/data/navigation";

export function ServicesSection() {
  return (
    <section id="servicos" className="box-section bg-background py-20 md:py-28 relative">
      <div className="box-container-boxed">
        {/* Cabeçalho da Seção Editorial */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-section-muted border border-[#E5DFD5] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
            <span>O Atelier de Massoterapia</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-foreground tracking-tight leading-tight">
            Seis Rituais Desenvolvidos para a <span className="italic text-primary">Fisiologia Feminina</span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed max-w-2xl font-light">
            Não aplicamos protocolos mecânicos. Cada terapia é uma experiência sensorial completa, orquestrada com óleos botânicos puros, controle térmico e toques anatômicos precisos.
          </p>
        </div>

        {/* Grade Editorial dos 6 Rituais (2 colunas amplas com respiração visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {servicesData.map((ritual: ServiceItem) => {
            const bookingUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
              ritual.whatsappMessage
            )}`;

            return (
              <article
                key={ritual.id}
                className="group relative flex flex-col justify-between bg-white rounded-3xl border border-[#E8E2D8] p-7 sm:p-9 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Topo: Numeral e Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#EAE4DC] mb-5">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-3xl sm:text-4xl font-light text-primary/40 group-hover:text-primary transition-colors">
                        {ritual.ritualNumber}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-muted-foreground">
                          Ritual Exclusivo
                        </span>
                        <span className="text-xs font-semibold text-primary">
                          {ritual.serviceType}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary-subtle text-foreground/80 border border-border">
                      {ritual.badge}
                    </span>
                  </div>

                  {/* Nome do Ritual & Frase de Efeito */}
                  <h3 className="font-serif text-2xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {ritual.ritualName}
                  </h3>

                  <p className="text-xs sm:text-sm font-serif italic text-primary mt-1 mb-3">
                    &ldquo;{ritual.tagline}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {ritual.description}
                  </p>

                  {/* Tríade de Notas Sensoriais */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-5 pt-4 border-t border-[#EAE4DC]">
                    <div className="flex flex-col gap-0.5 p-2 rounded-xl bg-section-muted/50">
                      <div className="flex items-center gap-1 text-[10px] font-semibold text-primary">
                        <Wind className="size-3" aria-hidden="true" />
                        <span>Aroma</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground leading-tight">
                        {ritual.sensoryNotes.aroma}
                      </span>
                    </div>

                    <div className="flex flex-col gap-0.5 p-2 rounded-xl bg-section-muted/50">
                      <div className="flex items-center gap-1 text-[10px] font-semibold text-primary">
                        <Droplet className="size-3" aria-hidden="true" />
                        <span>Textura</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground leading-tight">
                        {ritual.sensoryNotes.texture}
                      </span>
                    </div>

                    <div className="flex flex-col gap-0.5 p-2 rounded-xl bg-section-muted/50">
                      <div className="flex items-center gap-1 text-[10px] font-semibold text-primary">
                        <Thermometer className="size-3" aria-hidden="true" />
                        <span>Térmica</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground leading-tight">
                        {ritual.sensoryNotes.temperature}
                      </span>
                    </div>
                  </div>

                  {/* Passos e Benefícios */}
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-[11px] font-semibold text-foreground/80 uppercase tracking-wider">
                      Como a sessão se desenrola:
                    </span>
                    <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                      {ritual.ritualSteps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="size-3 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="leading-snug">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Rodapé do Card */}
                <div className="mt-7 pt-5 border-t border-[#EAE4DC] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <Clock className="size-3.5 text-primary" aria-hidden="true" />
                    <span>Duração: {ritual.duration}</span>
                  </div>

                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-4.5 py-2.5 rounded-xl shadow-2xs transition-all duration-200"
                  >
                    <span>Reservar Ritual</span>
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
