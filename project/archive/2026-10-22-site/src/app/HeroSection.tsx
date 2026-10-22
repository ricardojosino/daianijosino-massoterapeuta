import React from "react";
import { Sparkles, Calendar, MessageCircle, Thermometer, Wind, Shield, Clock } from "lucide-react";
import { contactInfo } from "@/data/navigation";
import { RitualSelector } from "@/components/RitualSelector";

export function HeroSection() {
  const whatsappBookingUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    contactInfo.whatsappMessage
  )}`;

  const whatsappQuestionsUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    contactInfo.whatsappQuestionsMessage
  )}`;

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF7F2]">
      {/* Luzes difusas sutis de fundo */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#EAE2D5]/50 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 left-10 w-[400px] h-[400px] bg-primary-subtle/40 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="box-container-boxed">
        {/* Dobra Superior Editorial Assimétrica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Lado Esquerdo: Tipografia Display de Alto Padrão (7 colunas) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2.5 bg-white/90 border border-[#E5DFD5] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-primary shadow-2xs">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span>Santuário de Bem-Estar Feminino • Jardins, SP</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-normal text-foreground tracking-tight leading-[1.08]">
              O <span className="italic font-normal text-primary">silêncio</span> e o alívio que o seu corpo procura.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light max-w-xl">
              Você passa a semana inteira sustentando o mundo nos ombros. Aqui, você é convidada a soltar. Rituais botânicos de massoterapia conduzidos com presença, precisão anatômica e acolhimento afetuoso.
            </p>

            {/* CTAs com estética de Concierge Privado */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-hover text-white font-medium text-sm sm:text-base px-8 py-4 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <Calendar className="size-4.5" aria-hidden="true" />
                <span>Reservar Minha Sessão</span>
              </a>

              <a
                href={whatsappQuestionsUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-white/80 text-foreground border border-[#E2DBD1] font-medium text-sm sm:text-base px-6 py-4 rounded-xl transition-all duration-200"
              >
                <MessageCircle className="size-4.5 text-[#25D366]" aria-hidden="true" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            {/* Micro-promessas táteis */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-muted-foreground border-t border-[#E8E2D8] w-full">
              <div className="flex items-center gap-2">
                <Thermometer className="size-4 text-primary shrink-0" aria-hidden="true" />
                <span>Maca aquecida em 38°C</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="size-4 text-primary shrink-0" aria-hidden="true" />
                <span>Óleos vegetais prensados a frio</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="size-4 text-primary shrink-0" aria-hidden="true" />
                <span>1 cliente por vez • Privacidade</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Quadro Editorial / Cartão Sensorial de Atmosfera (5 colunas) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white border border-[#E5DFD5] p-7 sm:p-9 shadow-soft">
              {/* Carimbo de Boutique Spa */}
              <div className="flex items-center justify-between pb-6 border-b border-[#EAE4DC]">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
                    Atelier de Terapias
                  </span>
                  <span className="font-serif text-lg font-semibold text-foreground mt-0.5">
                    Daiani Josino
                  </span>
                </div>
                <div className="size-11 rounded-full bg-primary-subtle border border-primary/20 text-primary flex items-center justify-center font-serif text-xs font-semibold">
                  EST. 2018
                </div>
              </div>

              {/* Manifesto em Citação */}
              <div className="py-7 flex flex-col gap-4">
                <p className="font-serif italic text-lg sm:text-xl text-foreground/90 leading-relaxed">
                  “Não existe massagem rápida quando o objetivo é devolver a paz a uma mulher exausta. O toque consciente é um ato de presença.”
                </p>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  — Daiani Josino, Terapeuta Corporal
                </span>
              </div>

              {/* Box de Experiência */}
              <div className="bg-[#FAF7F2] rounded-2xl p-4.5 border border-[#EAE4DC] flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-foreground">Ritual de 60 a 90 minutos</span>
                  <span className="text-primary font-medium flex items-center gap-1">
                    <Clock className="size-3" aria-hidden="true" />
                    Tempo sem pressa
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Início com infusão botânica e escalda-pés morno. Sem conversas paralelas. O seu momento de repouso absoluto.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#EAE4DC] flex items-center justify-between text-xs">
                <span className="text-muted-foreground">São Paulo • Bairro Jardins</span>
                <a
                  href="#servicos"
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                >
                  <span>Explorar rituais</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Componente Interativo no Coração da Página: Seletor de Rituais */}
        <div className="mt-8">
          <RitualSelector />
        </div>
      </div>

      {/* Faixa Poética Contínua / Marquee Ticker */}
      <div className="mt-16 pt-5 pb-5 border-y border-[#E6E0D6] bg-white/70 overflow-hidden select-none">
        <div className="animate-marquee items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
          <span className="flex items-center gap-2">
            <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
            Respiração consciente
          </span>
          <span>•</span>
          <span>Maca aquecida a 38°C</span>
          <span>•</span>
          <span>Aromaterapia com lavanda francesa e bergamota</span>
          <span>•</span>
          <span>Intervalo protegido de 30 minutos entre clientes</span>
          <span>•</span>
          <span>Drenagem manual fisiológica sem dor</span>
          <span>•</span>
          <span>Toalhas felpudas e algodão puro</span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
            Respiração consciente
          </span>
          <span>•</span>
          <span>Maca aquecida a 38°C</span>
          <span>•</span>
          <span>Aromaterapia com lavanda francesa e bergamota</span>
          <span>•</span>
          <span>Intervalo protegido de 30 minutos entre clientes</span>
          <span>•</span>
          <span>Drenagem manual fisiológica sem dor</span>
          <span>•</span>
          <span>Toalhas felpudas e algodão puro</span>
          <span>•</span>
        </div>
      </div>
    </section>
  );
}
