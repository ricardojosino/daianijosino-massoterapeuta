import Link from "next/link";
import { Sparkles, ArrowLeft, MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/navigation";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-28 px-4 bg-gradient-to-b from-section-muted/40 to-background">
      <div className="max-w-md w-full bg-white rounded-2xl border border-border p-8 sm:p-10 text-center shadow-soft flex flex-col items-center">
        <div className="size-16 rounded-full bg-primary-subtle text-primary flex items-center justify-center mb-5">
          <Sparkles className="size-8" aria-hidden="true" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Página não encontrada
        </span>

        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mt-2 mb-3">
          Parece que este caminho mudou de lugar
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
          Não se preocupe. O nosso espaço de relaxamento e acolhimento continua à sua espera na página principal.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-medium text-xs sm:text-sm py-3 px-5 rounded-xl shadow-xs transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span>Voltar ao Início</span>
          </Link>

          <a
            href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
              contactInfo.whatsappQuestionsMessage
            )}`}
            target="_blank"
            rel="noopener"
            className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-hover text-secondary-foreground font-medium text-xs sm:text-sm py-3 px-4 rounded-xl transition-colors"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
