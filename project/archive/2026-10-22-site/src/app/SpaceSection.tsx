import React from "react";
import { Sparkles, Coffee, BedDouble, Flower2, ShieldCheck } from "lucide-react";
import { spaceData, SpaceMoment } from "@/data/space";

export function SpaceSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Coffee":
        return <Coffee className="size-6 text-primary" aria-hidden="true" />;
      case "BedDouble":
        return <BedDouble className="size-6 text-primary" aria-hidden="true" />;
      case "Flower2":
        return <Flower2 className="size-6 text-primary" aria-hidden="true" />;
      case "Sparkles":
        return <Sparkles className="size-6 text-primary" aria-hidden="true" />;
      default:
        return <Sparkles className="size-6 text-primary" aria-hidden="true" />;
    }
  };

  return (
    <section id="espaco" className="box-section bg-[#FAF7F2] py-20 md:py-28 relative border-y border-[#E8E2D8]">
      <div className="box-container-boxed">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-[#E5DFD5] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 shadow-2xs">
            <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
            <span>{spaceData.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-foreground tracking-tight leading-tight">
            {spaceData.title}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed max-w-2xl font-light">
            {spaceData.subtitle}
          </p>
        </div>

        {/* Linha do Tempo Visual dos 4 Momentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {spaceData.moments.map((moment: SpaceMoment) => (
            <div
              key={moment.number}
              className="bg-white rounded-3xl p-7 border border-[#E5DFD5] shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cabeçalho do Momento */}
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE4DC] mb-5">
                  <span className="font-serif text-3xl font-light text-primary/40">
                    {moment.number}
                  </span>
                  <div className="size-11 rounded-xl bg-primary-subtle flex items-center justify-center shrink-0">
                    {getIcon(moment.iconName)}
                  </div>
                </div>

                <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-primary block mb-1">
                  {moment.subtitle}
                </span>

                <h3 className="font-serif text-xl font-semibold text-foreground leading-snug mb-3">
                  {moment.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {moment.description}
                </p>
              </div>

              {/* Detalhe Sensorial na Base */}
              <div className="mt-6 pt-4 border-t border-[#EAE4DC]">
                <span className="text-[10px] uppercase font-semibold text-foreground/80 block mb-1">
                  Detalhe sensorial:
                </span>
                <p className="text-[11px] text-primary/90 font-medium leading-tight">
                  {moment.sensoryDetail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Destaques de Hospitalidade & Biossegurança */}
        <div className="mt-14 bg-white rounded-3xl border border-[#E5DFD5] p-8 sm:p-10 shadow-soft">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-xl text-center lg:text-left">
              <span className="text-xs uppercase font-semibold tracking-wider text-primary">
                Hospitalidade & Conforto
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Um casulo protegido contra os ruídos da metrópole
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Localizado em uma rua arborizada e silenciosa no bairro dos Jardins em São Paulo, o espaço foi construído para que o seu cérebro receba apenas sinais de calma, calor e acolhimento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto shrink-0">
              {spaceData.ambianceHighlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#FAF7F2] border border-[#E5DFD5] rounded-xl p-3 flex items-center gap-2.5 text-xs text-foreground/90 font-medium"
                >
                  <ShieldCheck className="size-4 text-primary shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
