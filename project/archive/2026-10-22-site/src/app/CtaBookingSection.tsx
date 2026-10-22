import React from "react";
import { Calendar, MessageCircle, MapPin, Clock, Sparkles, Shield } from "lucide-react";
import { contactInfo } from "@/data/navigation";

export function CtaBookingSection() {
  const whatsappBookingUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    contactInfo.whatsappMessage
  )}`;

  const whatsappQuestionsUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    contactInfo.whatsappQuestionsMessage
  )}`;

  return (
    <section id="contato" className="box-section bg-[#FAF7F2] py-20 md:py-28 relative">
      <div className="box-container-boxed">
        {/* Caixa Nobre de Concierge Spa */}
        <div className="relative rounded-3xl bg-[#374D3F] text-white p-8 sm:p-14 md:p-16 shadow-hover overflow-hidden">
          {/* Elementos Orgânicos de Luz Suave */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#D8CBBF] mb-6 border border-white/15">
              <Sparkles className="size-3.5 text-[#D8CBBF]" aria-hidden="true" />
              <span>Concierge Privado de Agendamento</span>
            </div>

            {/* Título de Hospitalidade */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight text-white">
              Permita-se esta pausa. <span className="italic text-[#D8CBBF]">O seu corpo</span> agradecerá a cada respiração.
            </h2>

            {/* Subtítulo */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 mt-5 leading-relaxed max-w-2xl font-light">
              Nenhum horário é compartilhado. Você terá a sala inteira reservada para você, com maca aquecida a 38°C, toalhas mornas e um chá botânico preparado na hora.
            </p>

            {/* Ações em Destaque */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-9 w-full sm:w-auto">
              {/* Botão Primário */}
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#2B3E32] hover:bg-[#F5F1EB] font-medium text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="size-4.5 text-[#2B3E32]" aria-hidden="true" />
                <span>Reservar Minha Sessão</span>
              </a>

              {/* Botão Secundário para Dúvidas */}
              <a
                href={whatsappQuestionsUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base px-7 py-4 rounded-xl border border-white/25 backdrop-blur-xs transition-all duration-200"
              >
                <MessageCircle className="size-4.5 text-[#D8CBBF]" aria-hidden="true" />
                <span>Tirar Dúvidas com a Daiani</span>
              </a>
            </div>

            {/* Informações de Apoio */}
            <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-xs text-white/70">
              <div className="flex items-center justify-center gap-2">
                <Clock className="size-4 text-[#D8CBBF] shrink-0" aria-hidden="true" />
                <span>{contactInfo.openingHours}</span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <MapPin className="size-4 text-[#D8CBBF] shrink-0" aria-hidden="true" />
                <span>{contactInfo.address}</span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Shield className="size-4 text-[#D8CBBF] shrink-0" aria-hidden="true" />
                <span>Atendimento 100% individual e seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
