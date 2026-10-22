import React from "react";
import { Sparkles, CheckCircle2, ShieldCheck, Heart } from "lucide-react";
import { aboutData } from "@/data/about";
import { contactInfo } from "@/data/navigation";

export function AboutSection() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    "Olá Daiani! Li sua carta no site e me identifiquei muito. Gostaria de agendar um horário com você."
  )}`;

  return (
    <section id="sobre" className="box-section bg-[#FAF7F2] relative py-20 md:py-28 border-b border-[#E8E2D8]">
      <div className="box-container-boxed">
        {/* Bloco Central da Carta Aberta */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 md:p-16 border border-[#E5DFD5] shadow-soft relative overflow-hidden">
          {/* Marca d'água sutil de carimbo botânico */}
          <div
            className="absolute -top-10 -right-10 w-60 h-60 rounded-full border border-primary/10 flex items-center justify-center pointer-events-none select-none text-primary/5 font-serif text-8xl"
            aria-hidden="true"
          >
            DJ
          </div>

          {/* Cabeçalho da Carta */}
          <div className="flex flex-col items-start gap-4 pb-10 border-b border-[#EAE4DC]">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
              <span>{aboutData.badge}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between w-full gap-2">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
                {aboutData.letterHeader}
              </h2>
              <span className="text-xs uppercase font-medium tracking-wider text-muted-foreground shrink-0">
                {aboutData.dateStamp}
              </span>
            </div>

            <p className="font-serif italic text-lg sm:text-xl text-primary leading-relaxed max-w-2xl">
              &ldquo;{aboutData.letterSubtitle}&rdquo;
            </p>
          </div>

          {/* Corpo da Carta (Parágrafos Humanizados) */}
          <div className="py-10 flex flex-col gap-6 text-foreground/80 font-normal leading-[1.8] text-base sm:text-lg">
            {aboutData.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:text-primary first-letter:mr-2.5 first-letter:float-left first-letter:leading-none" : ""}>
                {p}
              </p>
            ))}
          </div>

          {/* Assinatura e Promessa */}
          <div className="pt-8 border-t border-[#EAE4DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col">
              <span className="font-serif text-3xl italic text-foreground tracking-wide font-normal">
                {aboutData.signature}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                Terapeuta Corporal & Massoterapeuta Integrativa
              </span>
            </div>

            {/* Carimbo de Compromisso com o Tempo */}
            <div className="bg-[#FAF7F2] border border-[#E5DFD5] rounded-2xl p-4 flex items-center gap-3 text-xs text-foreground max-w-sm">
              <ShieldCheck className="size-5 text-primary shrink-0" aria-hidden="true" />
              <span className="leading-snug">{aboutData.ritualPromise}</span>
            </div>
          </div>

          {/* Credenciais & Estatísticas na Base da Carta */}
          <div className="mt-12 pt-8 border-t border-[#EAE4DC] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Estatísticas (5 colunas) */}
            <div className="md:col-span-5 grid grid-cols-3 gap-4 text-center border-b md:border-b-0 md:border-r border-[#EAE4DC] pb-6 md:pb-0 md:pr-6">
              {aboutData.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-normal text-primary">
                    {stat.number}
                  </span>
                  <span className="text-[10px] text-muted-foreground leading-tight mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Formação e Botão de Contato (7 colunas) */}
            <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                {aboutData.credentials.map((cred, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-primary shrink-0" aria-hidden="true" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-5 py-3 rounded-xl transition-colors shrink-0 shadow-xs"
              >
                <Heart className="size-3.5" aria-hidden="true" />
                <span>Conversar com a Daiani</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
