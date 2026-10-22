import React from "react";
import { Sparkles, Quote, Heart } from "lucide-react";
import { testimonialsData, TestimonialItem } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="box-section bg-background py-20 md:py-28 relative">
      <div className="box-container-boxed">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-section-muted border border-[#E5DFD5] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
            <span>Diários de Cuidado</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-foreground tracking-tight leading-tight">
            Vozes Reais de Mulheres que Encontraram <span className="italic text-primary">o Seu Ponto de Paz</span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed max-w-2xl font-light">
            Não são avaliações genéricas de internet. São relatos de advogadas, mães, arquitetas e gestoras sobre como o toque consciente restaurou a leveza de seus corpos.
          </p>
        </div>

        {/* Grade Editorial dos Diários (3 colunas amplas com tipografia literary) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item: TestimonialItem) => (
            <article
              key={item.id}
              className="relative flex flex-col justify-between bg-white rounded-3xl border border-[#E8E2D8] p-8 shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div>
                {/* Ícone de Citação Editorial */}
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE4DC] mb-5">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">
                    {item.timeAsClient}
                  </span>
                  <Quote className="size-5 text-primary/30" aria-hidden="true" />
                </div>

                {/* Título da Citação */}
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground leading-snug mb-4">
                  “{item.quoteTitle}”
                </h3>

                {/* História Completa */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                  {item.story}
                </p>
              </div>

              {/* Informações da Autora */}
              <div className="mt-8 pt-5 border-t border-[#EAE4DC] flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-base font-semibold text-foreground">
                    {item.author}
                  </span>
                  <Heart className="size-3.5 text-accent fill-accent" aria-hidden="true" />
                </div>
                <span className="text-xs text-muted-foreground">
                  {item.authorContext}
                </span>
                <span className="text-[11px] text-primary font-medium mt-1">
                  Ritual: {item.ritualChosen}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
