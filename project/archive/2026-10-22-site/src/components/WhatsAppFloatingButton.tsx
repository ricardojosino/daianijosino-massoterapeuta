"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/navigation";

export function WhatsAppFloatingButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    contactInfo.whatsappQuestionsMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Balão sutil de mensagem */}
      <div
        className={`hidden sm:flex items-center bg-white/95 backdrop-blur-sm text-foreground text-xs font-medium px-3.5 py-2 rounded-full shadow-lg border border-border transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-90 translate-x-1"
        }`}
      >
        <span>Dúvidas? Fale comigo agora</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener"
        aria-label="Abrir conversa no WhatsApp com Daiani Josino para tirar dúvidas ou agendar"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366]/40"
      >
        {/* Anel de pulso sutil */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"
          aria-hidden="true"
        />
        <MessageCircle className="size-7 relative z-10" aria-hidden="true" />
        <span className="sr-only">Falar no WhatsApp com Daiani Josino</span>
      </a>
    </div>
  );
}
