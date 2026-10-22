"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Clock, Wind, Thermometer, Droplet, Check } from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { contactInfo } from "@/data/navigation";

export function RitualSelector() {
  const [selectedId, setSelectedId] = useState<string>(servicesData[0].id);

  const currentService: ServiceItem =
    servicesData.find((s) => s.id === selectedId) || servicesData[0];

  const bookingUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    `Olá Daiani! Fiz a consulta no seu site e meu corpo está pedindo o ritual "${currentService.ritualName}" (${currentService.serviceType}). Como podemos agendar?`
  )}`;

  return (
    <div className="w-full bg-[#F5F1EB] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#E5DFD5] shadow-soft">
      {/* Cabeçalho do Seletor */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-white/90 border border-border px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary mb-3 shadow-2xs">
          <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
          <span>Consulta Rápida de Bem-Estar</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
          O que o seu corpo está pedindo hoje?
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 leading-relaxed">
          Selecione a sensação predominante na sua rotina esta semana e descubra o protocolo desenhado exatamente para o seu momento:
        </p>
      </div>

      {/* Botões / Pílulas de Estado Sensorial */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {servicesData.map((service) => {
          const isSelected = service.id === selectedId;
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => setSelectedId(service.id)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isSelected
                  ? "bg-primary text-white border-primary shadow-md scale-[1.01]"
                  : "bg-white text-foreground hover:bg-white/90 border-[#E8E2D8] hover:border-primary/40"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider ${
                    isSelected ? "text-white/80" : "text-primary"
                  }`}
                >
                  Sensação {service.ritualNumber}
                </span>
                <span
                  className={`size-2 rounded-full ${
                    isSelected ? "bg-white" : "bg-primary/30"
                  }`}
                />
              </div>

              <span className="font-medium text-sm leading-snug">
                {service.feelingLabel}
              </span>

              <span
                className={`text-[11px] leading-relaxed line-clamp-2 mt-1 ${
                  isSelected ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                {service.feelingDescription}
              </span>
            </button>
          );
        })}
      </div>

      {/* Painel do Ritual Recomendado Revelado */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DFD5] shadow-hover transition-all duration-500 animate-in fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo: Detalhes do Ritual (7 colunas) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-serif text-3xl font-light text-primary/50">
                {currentService.ritualNumber}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary-subtle text-foreground/80 border border-border">
                {currentService.badge}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium ml-auto">
                <Clock className="size-3.5 text-primary" aria-hidden="true" />
                <span>{currentService.duration}</span>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                {currentService.ritualName}
              </h4>
              <p className="text-xs sm:text-sm font-medium text-primary mt-1">
                {currentService.serviceType}
              </p>
            </div>

            <p className="text-sm text-foreground/90 leading-relaxed font-serif italic border-l-2 border-primary/40 pl-3.5 py-0.5">
              &ldquo;{currentService.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {currentService.description}
            </p>

            {/* Tríade de Notas Sensoriais */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-border/80">
              <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-section-muted/60">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                  <Wind className="size-3.5" aria-hidden="true" />
                  <span>Aroma Botânico</span>
                </div>
                <span className="text-[11px] text-muted-foreground leading-tight">
                  {currentService.sensoryNotes.aroma}
                </span>
              </div>

              <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-section-muted/60">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                  <Droplet className="size-3.5" aria-hidden="true" />
                  <span>Textura do Toque</span>
                </div>
                <span className="text-[11px] text-muted-foreground leading-tight">
                  {currentService.sensoryNotes.texture}
                </span>
              </div>

              <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-section-muted/60">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                  <Thermometer className="size-3.5" aria-hidden="true" />
                  <span>Temperatura</span>
                </div>
                <span className="text-[11px] text-muted-foreground leading-tight">
                  {currentService.sensoryNotes.temperature}
                </span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Passos do Ritual & Ação de Concierge (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-section-muted/40 rounded-2xl p-6 sm:p-7 border border-[#EAE4DC] h-full gap-6">
            <div className="flex flex-col gap-3.5">
              <span className="text-xs uppercase font-semibold tracking-wider text-foreground/80">
                Como acontece a sua sessão:
              </span>

              <ol className="flex flex-col gap-3 text-xs text-muted-foreground">
                {currentService.ritualSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="size-5 rounded-full bg-white border border-border text-primary font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-2 pt-3 border-t border-border flex flex-col gap-1.5">
                <span className="text-[11px] font-semibold text-foreground/80 uppercase tracking-wider">
                  Resultados esperados:
                </span>
                {currentService.benefits.slice(0, 2).map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="size-3 text-primary shrink-0" aria-hidden="true" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-hover text-white font-medium text-sm py-3.5 px-6 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <span>Reservar Este Ritual com a Daiani</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <p className="text-[10px] text-center text-muted-foreground mt-2">
                Atendimento individual e exclusivo nos Jardins com horário marcado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
