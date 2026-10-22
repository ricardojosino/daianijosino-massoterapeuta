"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, MessageCircle, Sparkles } from "lucide-react";
import { navigationItems, contactInfo } from "@/data/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueio de scroll no body ao abrir menu mobile (regra da skill de arquitetura)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  const whatsappBookingUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    contactInfo.whatsappMessage
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/80 py-3"
          : "bg-white/70 backdrop-blur-xs py-5"
      }`}
    >
      <div className="box-container-boxed flex items-center justify-between">
        {/* Logomarca */}
        <a
          href="#inicio"
          onClick={(e) => handleAnchorClick(e, "#inicio")}
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg p-1"
          aria-label="Ir para o topo da página de Daiani Josino Massoterapia"
        >
          <span className="font-serif text-2xl sm:text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            Daiani Josino
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium -mt-1">
            Massoterapia & Spa
          </span>
        </a>

        {/* HeaderDesktop (>= 1200px) */}
        <nav
          className="hidden xl:flex items-center gap-8"
          aria-label="Navegação principal desktop"
        >
          <ul className="flex items-center gap-7">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 pl-4 border-l border-border">
            <a
              href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                contactInfo.whatsappQuestionsMessage
              )}`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover px-3.5 py-2 rounded-xl transition-colors hover:bg-primary-subtle"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              <span>Dúvidas</span>
            </a>

            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-xl shadow-soft hover:shadow-hover transition-all duration-200 active:scale-98"
            >
              <Calendar className="size-4" aria-hidden="true" />
              <span>Agendar Horário</span>
            </a>
          </div>
        </nav>

        {/* HeaderMobile Toggle (< 1200px) */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-medium px-3 py-2 rounded-xl"
          >
            <Calendar className="size-3.5" aria-hidden="true" />
            <span>Agendar</span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            className="inline-flex items-center justify-center size-10 rounded-xl text-foreground hover:bg-secondary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* HeaderMobile Drawer / Painel Lateral */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-50 xl:hidden bg-background/98 backdrop-blur-lg flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground pb-2 border-b border-border">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              <span>Navegue pelo Espaço</span>
            </div>

            <nav aria-label="Navegação mobile">
              <ul className="flex flex-col gap-3">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className="block text-lg font-medium text-foreground hover:text-primary py-2.5 px-3 rounded-lg hover:bg-primary-subtle transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-border">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium py-3.5 px-4 rounded-xl shadow-soft text-center"
            >
              <Calendar className="size-4" aria-hidden="true" />
              <span>Agendar Sessão no WhatsApp</span>
            </a>

            <a
              href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                contactInfo.whatsappQuestionsMessage
              )}`}
              target="_blank"
              rel="noopener"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-medium py-3 px-4 rounded-xl text-center hover:bg-secondary-hover transition-colors"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              <span>Tirar Dúvidas com a Daiani</span>
            </a>

            <div className="text-center pt-2">
              <p className="text-xs text-muted-foreground">
                {contactInfo.openingHours}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
