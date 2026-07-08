import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence, useMotionValue, useSpring } from "motion/react";

import {
  Car, ClipboardCheck, Camera, MessageCircle, Package, Wallet,
  Globe, Bot, Check, ChevronDown, Menu, X, Sparkles, ArrowRight,
  ScanLine, Zap, TrendingUp, ShieldCheck, Clock, Star,
  Wrench, CheckCircle2, KeyRound, BellRing, Search, Droplet, Paintbrush, Eye, Gauge,
  Loader2, FileText,
} from "lucide-react";
import logoAsset from "@/assets/patio-logo.png.asset.json";
import whatsappIconAsset from "@/assets/whatsapp-icon.png.asset.json";
import dashboardAsset from "@/assets/patio-dashboard.png.asset.json";
import oficinaLogo from "@/assets/oficina-logo.png.asset.json";
import salesChart from "@/assets/sales-chart.png.asset.json";
import workshopBanner from "@/assets/workshop-banner.jpg";
import serviceOilChange from "@/assets/service-oil-change.jpg";
import serviceBodywork from "@/assets/service-bodywork.jpg";
import carHondaCivic from "@/assets/car-honda-civic.png.asset.json";
import jeepCompassSilver from "@/assets/jeep-compass-silver.png.asset.json";
import carChevroletOnix from "@/assets/car-chevrolet-onix.png.asset.json";
import carFiatStrada from "@/assets/car-fiat-strada.png.asset.json";
import toyotaCorolla from "@/assets/toyota-corolla.png.asset.json";
import hyundaiHb20 from "@/assets/hyundai-hb20-user.png.asset.json";
import volkswagenGol from "@/assets/volkswagen-gol.png.asset.json";
import jeepCompass from "@/assets/jeep-compass-new.png.asset.json";
import jeepRenegade from "@/assets/jeep-renegade-new.png.asset.json";
import vwPolo from "@/assets/vw-polo.png.asset.json";
import fiatMobi from "@/assets/fiat-mobi.png.asset.json";
import hondaPcx150 from "@/assets/honda-pcx-150.png.asset.json";
import fordEcosport from "@/assets/ford-ecosport.png.asset.json";
import nissanKicks from "@/assets/nissan-kicks.png.asset.json";
import MockupPatioOS from "@/components/MockupPatioOS";
import { PAYMENT_LINKS } from "@/lib/checkout";
import { Iphone16Pro } from "@/components/Iphone16Pro";
import { Confetti } from "@/components/Confetti";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: dashboardAsset.url },
      { name: "twitter:image", content: dashboardAsset.url },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <SectionDivider icon={Car} label="Pátio em tempo real" />
      <Kanban />
      <SectionDivider icon={ClipboardCheck} label="OS digital" />
      <OSDigital />
      <SectionDivider icon={MessageCircle} label="WhatsApp automático" />
      <WhatsappOrcamento />
      <SectionDivider icon={Package} label="Estoque e peças" />
      <Estoque />
      <SectionDivider icon={Wallet} label="Financeiro e PDV" />
      <FinanceiroPDV />
      <SectionDivider icon={Globe} label="Sua vitrine online" />
      <VitrineIA />
      <SectionDivider icon={Star} label="Quem já usa" />
      <Depoimentos />
      <SectionDivider icon={CheckCircle2} label="Planos e preços" />
      <Planos />
      <SectionDivider icon={Search} label="Dúvidas frequentes" />
      <FAQ />
      <SectionDivider icon={KeyRound} label="Comece hoje" />
      <CTAFinal />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- DIVISOR DE SEÇÃO ---------------- */
function SectionDivider({ icon: Icon = Wrench, label }: { icon?: typeof Wrench; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative z-10 -my-8 flex h-16 items-center justify-center gap-3 sm:gap-4 px-6 pointer-events-none"
    >
      {/* Linha esquerda com pulso de energia correndo para fora */}
      <div className="relative flex-1 max-w-[9rem] sm:max-w-[18rem] h-[2px]">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-l from-primary/50 via-border to-transparent"
          style={{ transformOrigin: "right" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
        {inView && (
          <motion.div
            className="absolute top-0 h-[2px] w-10 rounded-full bg-gradient-to-l from-primary to-transparent shadow-[0_0_10px_rgba(245,158,11,0.9)]"
            initial={{ right: "0%", opacity: 0 }}
            animate={{ right: ["0%", "85%"], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.6, delay: 1, ease: "easeInOut" }}
          />
        )}
      </div>

      <motion.div
        className="h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0"
        initial={{ scale: 0 }}
        animate={inView ? { scale: [0, 1.6, 1] } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      />

      {/* Medalhão central com anel tracejado girando */}
      <div className="relative flex items-center justify-center shrink-0">
        <motion.div
          className="absolute h-[4.25rem] w-[4.25rem] rounded-full border border-dashed border-primary/35"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: 360 } : {}}
          transition={{
            opacity: { duration: 0.5, delay: 0.25 },
            scale: { duration: 0.5, delay: 0.25 },
            rotate: { duration: 14, repeat: Infinity, ease: "linear", delay: 0.25 },
          }}
        />
        <motion.div
          className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-surface to-surface-2 border border-border shadow-[var(--shadow-card)] flex items-center justify-center"
          initial={{ scale: 0, rotate: -135, opacity: 0 }}
          animate={inView ? { scale: 1, rotate: 45, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 190, damping: 14, delay: 0.05 }}
        >
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-primary/30"
            animate={{ opacity: [0.8, 0, 0.8], scale: [1, 1.45, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="-rotate-45 flex"
            animate={inView ? { y: [0, -2, 0] } : {}}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <Icon className="h-[1.15rem] w-[1.15rem] text-primary" />
          </motion.div>
        </motion.div>

        {/* Etiqueta anunciando a próxima seção */}
        {label && (
          <motion.span
            className="absolute top-full mt-3.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground whitespace-nowrap"
            initial={{ opacity: 0, y: -6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {label}
          </motion.span>
        )}
      </div>

      <motion.div
        className="h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0"
        initial={{ scale: 0 }}
        animate={inView ? { scale: [0, 1.6, 1] } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      />

      {/* Linha direita com pulso espelhado */}
      <div className="relative flex-1 max-w-[9rem] sm:max-w-[18rem] h-[2px]">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 via-border to-transparent"
          style={{ transformOrigin: "left" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
        {inView && (
          <motion.div
            className="absolute top-0 h-[2px] w-10 rounded-full bg-gradient-to-r from-primary to-transparent shadow-[0_0_10px_rgba(245,158,11,0.9)]"
            initial={{ left: "0%", opacity: 0 }}
            animate={{ left: ["0%", "85%"], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.6, delay: 1, ease: "easeInOut" }}
          />
        )}
      </div>
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-[9999] pointer-events-none transition-[padding] duration-500 ease-out ${scrolled ? "pt-3 px-3 sm:px-6" : "pt-0 px-0"}`}>
      <div
        className={`pointer-events-auto mx-auto flex items-center justify-between text-foreground transition-all duration-500 ease-out will-change-transform ${
          scrolled
            ? "max-w-5xl h-14 px-5 rounded-full border border-border/60 bg-background/75 supports-[backdrop-filter]:bg-background/60 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/[0.04]"
            : "max-w-7xl h-16 px-5 sm:px-8 rounded-none border-b border-border/40 bg-background/70 supports-[backdrop-filter]:bg-background/50 backdrop-blur-xl backdrop-saturate-150"
        }`}
      >
        <a href="#" className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="Pátio OS" className="h-8 w-8" />
          <span className="font-display font-bold text-lg tracking-tight">Pátio OS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#patio" className="hover:text-foreground transition">Pátio</a>
          <a href="#os" className="hover:text-foreground transition">OS digital</a>
          <a href="#planos" className="hover:text-foreground transition">Planos</a>
          <a href="#faq" className="hover:text-foreground transition">Dúvidas</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#planos" className="text-sm text-muted-foreground hover:text-foreground">Entrar</a>
          <a href="#cta" className={`btn-primary btn-shimmer ${scrolled ? "!py-2 !px-4 !text-[0.85rem]" : ""}`}>Testar grátis</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="pointer-events-auto md:hidden mx-auto max-w-5xl mt-2 rounded-2xl border border-border bg-background px-5 py-4 flex flex-col gap-4 shadow-2xl shadow-foreground/15">
          <a href="#patio" onClick={() => setOpen(false)}>Pátio</a>
          <a href="#os" onClick={() => setOpen(false)}>OS digital</a>
          <a href="#planos" onClick={() => setOpen(false)}>Planos</a>
          <a href="#faq" onClick={() => setOpen(false)}>Dúvidas</a>
          <a href="#cta" onClick={() => setOpen(false)} className="btn-primary text-center btn-shimmer">Testar grátis</a>
        </div>
      )}
      <style>{`
        .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:.5rem; padding:.7rem 1.15rem; border-radius:.75rem; background:var(--gradient-amber); color:var(--primary-foreground); font-weight:600; font-size:.9rem; transition:all .2s; box-shadow: 0 8px 24px -8px oklch(0.86 0.17 92 / 0.5); }
        .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 14px 32px -8px oklch(0.86 0.17 92 / 0.65); }
        .btn-ghost { display:inline-flex; align-items:center; justify-content:center; gap:.5rem; padding:.7rem 1.15rem; border-radius:.75rem; background:transparent; color:var(--foreground); font-weight:600; font-size:.9rem; border:1px solid var(--border); transition:all .2s; }
        .btn-ghost:hover { background: var(--surface); border-color: var(--primary); }
        .btn-whatsapp { display:inline-flex; align-items:center; justify-content:center; gap:.5rem; padding:.7rem 1.15rem; border-radius:.75rem; background:#25D366; color:#0b0b0b; font-weight:600; font-size:.9rem; transition:all .2s; }
        .btn-whatsapp:hover { filter: brightness(1.08); }
      `}</style>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-20 pb-14 sm:pt-24 sm:pb-24 md:pt-36 md:pb-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* LEFT — texto */}
          <div className="text-center lg:text-left">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/70 backdrop-blur text-xs text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              7 dias de teste grátis, sem fidelidade e sem cartão
            </motion.div>
            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.02] font-bold"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Pátio organizado, orçamento aprovado no WhatsApp e{" "}
              <span className="text-underline-amber">caixa sob controle</span> tudo numa tela só.
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              O Pátio OS mostra o status de cada carro em tempo real, envia o orçamento por link
              no WhatsApp e fecha o caixa no fim do dia. Sem instalar nada, no celular ou no computador.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3 items-center sm:items-start"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#cta" className="btn-primary text-base px-6 py-3.5 btn-shimmer">
                Quero organizar minha oficina <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#planos" className="btn-ghost text-base px-6 py-3.5">Ver planos</a>
            </motion.div>
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Sem instalar nada</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Configura em 1 dia</span>
              <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Cancela quando quiser</span>
            </motion.div>
          </div>

          {/* RIGHT — mockup notebook + celular puro HTML/CSS */}
          <motion.div
            className="relative w-full pb-10 pr-4 sm:pr-0"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="animate-float">
              <MockupPatioOS />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}


/* ---------------- SECTION HELPERS ---------------- */
function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className="max-w-3xl"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        className="font-display text-3xl md:text-5xl font-bold leading-[1.05]"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >{title}</motion.h2>
      {sub && (
        <motion.p
          className="mt-5 text-lg text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >{sub}</motion.p>
      )}
    </motion.div>
  );
}

/* ---------------- KANBAN ---------------- */
function Kanban() {
  type OS = { id: string; model: string; plate: string; mec: string; client: string; date?: string; price?: string; checklist?: string; image?: string };
  type Col = { title: string; icon: typeof ClipboardCheck; tint: string; dotClass: string; cards: OS[] };

  const columns: Col[] = [
    {
      title: "Avaliação", icon: ClipboardCheck, tint: "bg-info/10", dotClass: "bg-info",
      cards: [
        { id: "053B42", model: "JEEP COMPASS", plate: "PNB7941", mec: "Roberto Martins", client: "Marcos", checklist: "0/1", image: jeepCompass.url },
        { id: "A291C7", model: "FIAT STRADA", plate: "QWE1234", mec: "Carlos Silva", client: "Fernanda", checklist: "0/2", image: carFiatStrada.url },
      ],
    },
    {
      title: "Orçamento", icon: Wallet, tint: "bg-warning/10", dotClass: "bg-warning",
      cards: [
        { id: "B778D1", model: "TOYOTA COROLLA", plate: "RTY5678", mec: "João Paulo", client: "Ricardo", checklist: "1/3", image: toyotaCorolla.url },
        { id: "C112E4", model: "HYUNDAI HB20", plate: "UIO9012", mec: "Carlos Silva", client: "Patrícia", checklist: "0/2", image: hyundaiHb20.url },
      ],
    },
    {
      title: "Peças", icon: Package, tint: "bg-destructive/10", dotClass: "bg-destructive",
      cards: [
        { id: "D334F9", model: "JEEP RENEGADE", plate: "PAS3456", mec: "João Paulo", client: "Lucas", checklist: "2/4", image: jeepRenegade.url },
        { id: "E556A2", model: "CHEVROLET ONIX", plate: "DFG7890", mec: "Roberto Martins", client: "Amanda", checklist: "1/3", image: carChevroletOnix.url },
      ],
    },
    {
      title: "Execução", icon: Zap, tint: "bg-primary/10", dotClass: "bg-primary",
      cards: [
        { id: "F667B3", model: "HONDA CIVIC", plate: "HJK2345", mec: "Carlos Silva", client: "Eduardo", checklist: "3/5", image: carHondaCivic.url },
        { id: "G778C4", model: "VW POLO", plate: "LZX6789", mec: "João Paulo", client: "Juliana", checklist: "2/3", image: vwPolo.url },
        { id: "H889D5", model: "NISSAN KICKS", plate: "CVB0123", mec: "Roberto Martins", client: "Bruno", checklist: "1/2", image: nissanKicks.url },
      ],
    },
    {
      title: "Entrega", icon: Car, tint: "bg-success/10", dotClass: "bg-success",
      cards: [
        { id: "C40F00", model: "FORD ECOSPORT", plate: "OYV4704", mec: "Roberto Martins", client: "Marina", date: "04/07/2026 · 06 de jul.", price: "R$ 740,00", checklist: "1/1", image: fordEcosport.url },
        { id: "E1145A", model: "VOLKSWAGEN GOL", plate: "OCQ4243", mec: "Roberto Martins", client: "Raylisson", date: "03/07/2026 · 06 de jul.", price: "R$ 310,00", checklist: "2/2", image: volkswagenGol.url },
        { id: "892410", model: "HONDA PCX 150", plate: "BCV6189", mec: "Roberto Martins", client: "Kaio Victor", date: "03/07/2026 · 27 de jul.", price: "R$ 340,00", checklist: "2/2", image: hondaPcx150.url },
        
      ],
    },
  ];

  return (
    <section id="patio" className="py-14 sm:py-20 md:py-32">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <SectionHeader
          eyebrow="Pátio em tempo real"
          title={<>Bateu o olho, <span className="text-gradient-amber">sabe o status de cada carro.</span></>}
          sub="Um quadro que mostra a esteira inteira: avaliação, orçamento, peças, execução e entrega. Sem perguntar pra ninguém, sem carro esquecido no fundo do pátio."
        />

        <div className="mt-10 md:mt-14 overflow-x-auto touch-pan-x pb-4 -mx-5 sm:-mx-8 px-5 sm:px-8">
          <div className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] gap-3 min-w-full">
            {columns.map((col, colIdx) => {
              const Icon = col.icon;
              return (
                <motion.div
                  key={col.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: colIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl bg-surface border border-border p-3 flex flex-col min-h-[380px]"
                >
                  <div className={`flex items-center justify-between px-2.5 py-2 rounded-lg ${col.tint} mb-3`}>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-foreground/80" />
                      <h3 className="font-semibold text-sm">{col.title}</h3>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground bg-white/70 rounded-md px-1.5 py-0.5 min-w-6 text-center">{col.cards.length}</span>
                  </div>

                  {col.cards.length === 0 ? (
                    <div className="flex-1 rounded-xl border border-dashed border-border/70 flex items-center justify-center text-xs text-muted-foreground">
                      Sem OS nesta etapa
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {col.cards.map((c, cardIdx) => (
                        <motion.div
                          key={c.id}
                          initial={{ opacity: 0, y: 20, scale: 0.92 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.15 + cardIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          whileHover={{ y: -4, scale: 1.02, boxShadow: "var(--shadow-float)" }}
                          className="rounded-xl bg-white border border-border p-3 shadow-sm hover:border-primary/40 transition-colors cursor-default"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-surface-2 text-muted-foreground border border-border">
                              OS #{c.id}
                            </span>
                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                              <ClipboardCheck className="h-3 w-3" />
                              <span className="font-semibold">{c.checklist}</span>
                            </div>
                          </div>

                          <div className="flex items-start gap-2 mb-2">
                            <div className="min-w-0 flex-1">
                              <div className="font-display font-bold text-sm truncate">{c.model}</div>
                              <div className="text-[11px] text-muted-foreground">Placa: {c.plate}</div>
                            </div>
                             <div className="rounded-lg bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden h-16 w-24">
                              {c.image ? (
                                <img src={c.image} alt={c.model} className="h-full w-full object-contain p-1" />
                              ) : (
                                <Car className="h-6 w-6 text-primary" />
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 text-[11px] mb-1">
                            <span className="h-4 w-4 rounded-full bg-primary/20 text-primary text-[8px] font-bold flex items-center justify-center">RM</span>
                            <span className="text-foreground/80 truncate">{c.mec}</span>
                          </div>
                          <div className="text-[11px] text-muted-foreground mb-2">Cliente: <span className="text-foreground/80">{c.client}</span></div>

                          {c.date && (
                            <div className="flex items-center justify-between pt-2 border-t border-border text-[11px]">
                              <span className="inline-flex items-center gap-1 text-muted-foreground">
                                <Clock className="h-3 w-3" /> {c.date}
                              </span>
                              <span className="font-semibold text-foreground bg-primary/15 px-1.5 py-0.5 rounded">{c.price}</span>
                            </div>
                          )}

                          {!c.date && c.checklist && (
                            <button className="mt-2 w-full rounded-lg bg-surface-2 hover:bg-surface border border-border py-2 text-[11px] font-semibold inline-flex items-center justify-center gap-1.5 text-foreground/80">
                              <ClipboardCheck className="h-3.5 w-3.5" /> Realizar checklist
                            </button>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}


/* ---------------- OS DIGITAL ---------------- */
function OSDigital() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.35 });

  const services = [
    "Troca de óleo e filtro",
    "Alinhamento e balanceamento",
    "Revisão de freios",
    "Diagnóstico eletrônico",
  ];

  // Progressive check-off loop — pauses on complete for celebration
  const [done, setDone] = useState(0);
  const [showSent, setShowSent] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    if (!inView) return;
    setDone(0);
    setShowSent(false);
    setCelebrate(false);
    let n = 0;
    let celebrating = false;
    const id = setInterval(() => {
      if (celebrating) return;
      n = n + 1;
      if (n > services.length) {
        n = 0;
      }
      if (n === services.length) {
        celebrating = true;
        setCelebrate(true);
        setTimeout(() => {
          celebrating = false;
          setCelebrate(false);
          n = 0;
          setDone(0);
        }, 4500);
      }
      setDone(n);
    }, 1200);
    return () => clearInterval(id);
  }, [inView]);

  useEffect(() => {
    if (done === services.length) {
      const t = setTimeout(() => setShowSent(true), 600);
      return () => clearTimeout(t);
    }
    setShowSent(false);
  }, [done]);

  return (
    <section id="os" ref={ref} className="py-14 sm:py-20 md:py-32 bg-surface/40 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader
            eyebrow="OS digital com fotos"
            title={<>Nenhum serviço esquecido, <span className="text-gradient-amber">nenhum arranhão sem registro.</span></>}
            sub="A triagem começa na recepção: aponta a câmera pra placa e o sistema preenche marca, modelo e cliente. Fotos do veículo entrando, checklist do serviço e assinatura digital. Se o cliente reclamar depois, o histórico está lá."
          />
          <ul className="mt-8 space-y-4">
            {[
              { i: ScanLine, t: "OCR de placa", d: "Aponta a câmera, o carro entra cadastrado." },
              { i: Camera, t: "Fotos na entrada", d: "Riscos, amassados e quilometragem registrados." },
              { i: ClipboardCheck, t: "Checklist por serviço", d: "Cada etapa marcada. Nada passa em branco." },
            ].map(({ i: Icon, t, d }, idx) => (
              <motion.li
                key={t}
                className="flex gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.12 }}
              >
                <div className="h-11 w-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{t}</div>
                  <div className="text-muted-foreground text-sm">{d}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* OS animated card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute -inset-8 bg-primary/25 blur-3xl rounded-full -z-0"
            animate={inView ? { opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.05, 0.9] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative rounded-2xl bg-surface border p-6 shadow-[var(--shadow-card)]"
            animate={celebrate ? {
              borderColor: ["oklch(0.86 0.17 92 / 0.3)", "oklch(0.86 0.17 92 / 0.8)", "oklch(0.86 0.17 92 / 0.3)"],
              boxShadow: [
                "0 20px 50px -20px oklch(0.20 0.015 60 / 0.18)",
                "0 20px 60px -15px oklch(0.86 0.17 92 / 0.35)",
                "0 20px 50px -20px oklch(0.20 0.015 60 / 0.18)",
              ],
            } : {}}
            transition={{ duration: 1.2, repeat: celebrate ? Infinity : 0, ease: "easeInOut" }}
            style={{ borderColor: "var(--color-border)" }}
          >
            <Confetti active={celebrate} />
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-xs text-muted-foreground">OS #41562E</div>
                <div className="font-display font-bold text-xl">Jeep Compass</div>
              </div>
              <motion.span
                className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold inline-flex items-center gap-1.5"
                animate={inView ? { opacity: [1, 0.6, 1] } : {}}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Em execução
              </motion.span>
            </div>

            {/* Vehicle summary strip */}
            <div className="flex items-center gap-3 mb-5 p-3 rounded-xl bg-surface-2 border border-border">
              <div className="h-11 w-11 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 overflow-hidden">
                <img src={jeepCompassSilver.url} alt="Jeep Compass" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs text-muted-foreground">Placa · KM entrada</div>
                <div className="font-semibold truncate">RXO-4187 · 48.320 km</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Entrada</div>
                <div className="font-semibold text-sm">08:42</div>
              </div>
            </div>

            {/* Checklist progressive */}
            <div className="space-y-2.5">
              {services.map((s, i) => {
                const isDone = i < done;
                return (
                  <motion.div
                    key={s}
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface-2 border border-border"
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <motion.div
                      className={`h-5 w-5 rounded-md flex items-center justify-center border ${
                        isDone ? "bg-success border-success" : "border-border bg-transparent"
                      }`}
                      animate={isDone ? { scale: [1, 1.25, 1] } : { scale: 1 }}
                      transition={{ duration: 0.35 }}
                    >
                      <AnimatePresence>
                        {isDone && (
                          <motion.span
                            key="c"
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <Check className="h-3.5 w-3.5 text-white" strokeWidth={3.5} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <span className={`text-sm relative ${isDone ? "text-muted-foreground" : "text-foreground"}`}>
                      {s}
                      <motion.span
                        className="absolute left-0 top-1/2 h-px bg-muted-foreground origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isDone ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{ width: "100%" }}
                      />
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="mt-5 pt-4 border-t border-border">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-muted-foreground">Progresso do serviço</span>
                <span className="font-semibold text-ink">
                  {done}/{services.length}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary/70"
                  animate={{ width: `${(done / services.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>

            <AnimatePresence>
              {showSent && (
                <motion.div
                  className="mt-4 flex items-center gap-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 p-3"
                  initial={{ opacity: 0, y: 16, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white"
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.1 }}
                  >
                    <MessageCircle className="h-5 w-5" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-[#128C7E]">Enviado para WhatsApp</div>
                    <div className="text-xs text-[#128C7E]/70">Orçamento enviado ao cliente</div>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.25 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#25D366]" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


/* ---------------- WHATSAPP ORÇAMENTO ---------------- */
function WhatsappOrcamento() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.05 });
  const phoneRef = useRef<HTMLDivElement>(null);
  const phoneInView = useInView(phoneRef, { once: false, amount: 0.45 });

  // Sequência de notificações automáticas — formato real Pátio OS
  const messages = [
    {
      emoji: "👋",
      lines: [
        { text: "Oi, Marina! 👋" },
        { text: "Recebemos seu veículo ", bold: "OYV4704", after: " aqui na oficina. Vamos fazer a avaliação completa e te avisamos assim que o diagnóstico sair." },
      ],
      time: "08:12",
      delay: 0.4,
    },
    {
      emoji: "📋",
      lines: [
        { text: "Oi, Marina!" },
        { text: "O diagnóstico do seu veículo ", bold: "OYV4704", after: " ficou pronto e o ", bold2: "orçamento já está disponível", after2: ". É só revisar e aprovar pelo link abaixo pra gente começar o serviço." },
      ],
      time: "10:47",
      delay: 2.0,
    },
    {
      emoji: "🔧",
      lines: [
        { text: "Oi, Marina!" },
        { text: "Orçamento aprovado! Já iniciamos o serviço no seu ", bold: "OYV4704", after: ". Assim que finalizarmos uma etapa, te avisamos por aqui." },
      ],
      time: "11:15",
      delay: 3.6,
    },
    {
      emoji: "🔑",
      lines: [
        { text: "Oi, Marina!" },
        { text: "Boa notícia: seu ", bold: "OYV4704", after: " está ", bold2: "pronto para retirada", after2: ". Pode passar aqui pra buscar quando quiser." },
      ],
      time: "14:32",
      delay: 5.2,
    },
  ];
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (!phoneInView) {
      setVisible(0);
      return;
    }
    setVisible(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    messages.forEach((m, i) => {
      timers.push(setTimeout(() => {
        setVisible((v) => Math.max(v, i + 1));
      }, m.delay * 1000));
    });
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [phoneInView]);

  return (
    <section className="py-14 sm:py-20 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Phone with WhatsApp */}
        <motion.div
          className="order-2 lg:order-1 relative flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute -inset-8 bg-[#25D366]/20 blur-3xl rounded-full -z-0" />

          {/* Phone frame — iPhone 16 Pro SVG */}
          <div ref={phoneRef} className="relative z-10" style={{ width: 320, height: 640 }}>
            <Iphone16Pro width={320} className="w-full h-full" />
            <div
              className="absolute overflow-hidden flex flex-col"
              style={{
                top: '3.2%',
                left: '7.04%',
                width: '85.99%',
                height: '93.59%',
                borderRadius: 39,
              }}
            >
              {/* Status bar */}
              <div className="flex justify-between items-center px-5 pt-2.5 pb-1 text-white text-[11px] font-semibold shrink-0">
                <span>9:41</span>
                <span className="opacity-0">·</span>
                <span className="flex items-center gap-1 text-[10px]">
                  <span>•••</span>
                  <span>5G</span>
                  <span>▮</span>
                </span>
              </div>

              {/* WhatsApp header */}
              <div className="bg-[#202c33] px-3 py-2 flex items-center gap-2 border-b border-white/5 shrink-0">
                <ArrowRight className="h-4 w-4 text-white/70 rotate-180" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-sm">O</div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-semibold truncate">Oficina do Roberto</div>
                  <div className="text-[#25D366] text-[11px]">online</div>
                </div>
                <div className="flex gap-3 text-white/70">
                  <Camera className="h-4 w-4" />
                  <MessageCircle className="h-4 w-4" />
                </div>
              </div>

              {/* Chat area — WhatsApp dark doodle wallpaper */}
              <div
                className="flex-1 px-3 py-3 space-y-2 overflow-hidden relative"
                style={{
                  backgroundColor: "#0b141a",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.045' stroke-width='1.2'%3E%3Cpath d='M20 30 q10 -12 22 -2 q10 10 -2 20 q-12 8 -22 -2 q-8 -10 2 -16 z'/%3E%3Cpath d='M90 60 l6 -8 l10 4 l-2 10 l-10 4 z'/%3E%3Ccircle cx='160' cy='40' r='10'/%3E%3Cpath d='M195 90 q8 -4 12 4 q4 8 -4 12 q-8 4 -12 -4 q-4 -8 4 -12 z'/%3E%3Cpath d='M40 120 q14 -6 18 8 q4 14 -10 16 q-14 2 -16 -12 q-2 -12 8 -12 z'/%3E%3Cpath d='M120 130 l14 0 l6 12 l-14 8 l-12 -8 z'/%3E%3Cpath d='M190 170 q10 -10 20 0 q10 10 0 20 q-10 10 -20 0 q-10 -10 0 -20 z'/%3E%3Cpath d='M60 200 l10 -6 l12 6 l-2 14 l-14 2 z'/%3E%3Cpath d='M140 210 q8 -8 16 0 q8 8 0 16 q-8 8 -16 0 q-8 -8 0 -16 z'/%3E%3Cpath d='M15 165 l8 -4 l6 8 l-6 8 l-10 -4 z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "240px 240px",
                }}
              >
                <div className="text-center">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#182229] text-white/60 text-[11px]">hoje</span>
                </div>

                <AnimatePresence>
                  {messages.slice(0, visible).map((m, i) => {
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="flex justify-start"
                      >
                        {/* Link-preview card estilo WhatsApp real */}
                        <div className="max-w-[90%] bg-[#202c33] text-white rounded-lg rounded-tl-sm shadow-sm overflow-hidden">
                          {/* Header do link preview */}
                          <div className="bg-[#1a2830] px-2.5 py-1.5 border-l-[3px] border-[#25D366]">
                            <div className="text-[11px] font-semibold text-white leading-tight">Pátio OS Serviços</div>
                            <div className="text-[9px] text-white/60 leading-tight">sistema.patioos.com.br</div>
                          </div>
                          {/* Corpo da mensagem */}
                          <div className="px-2.5 py-1.5">
                            <div className="text-[11px] leading-snug">
                              <span className="mr-1">{m.emoji}</span>
                              {m.lines[0].text}
                            </div>
                            <div className="text-[11px] leading-snug mt-1">
                              {m.lines[1].text}
                              {"bold" in m.lines[1] && m.lines[1].bold && (
                                <span className="font-bold">{m.lines[1].bold}</span>
                              )}
                              {"after" in m.lines[1] && m.lines[1].after}
                              {"bold2" in m.lines[1] && m.lines[1].bold2 && (
                                <span className="font-bold">{m.lines[1].bold2}</span>
                              )}
                              {"after2" in m.lines[1] && m.lines[1].after2}
                            </div>
                            {/* Link tracking */}
                            <div className="mt-1.5 text-[10px] leading-snug">
                              <div className="flex items-center gap-1 text-white/85">
                                <span>🔍</span>
                                <span>Acompanhe sua OS em tempo real:</span>
                              </div>
                              <div className="text-[#53bdeb] underline break-all mt-0.5">
                                sistema.patioos.com.br/p/01e9dfc7...
                              </div>
                            </div>
                            <div className="flex items-center justify-end gap-1 mt-0.5 text-[9px] text-white/60">
                              {m.time}
                              <Check className="h-2.5 w-2.5 text-[#53bdeb]" strokeWidth={3} />
                              <Check className="h-2.5 w-2.5 text-[#53bdeb] -ml-1.5" strokeWidth={3} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

              </div>

              {/* Composer */}
              <div className="bg-[#0b141a] border-t border-white/5 px-3 py-2 flex items-center gap-2 shrink-0">
                <div className="flex-1 rounded-full bg-[#202c33] px-3 py-1.5 text-white/40 text-xs">Mensagem</div>
                <div className="h-8 w-8 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <SectionHeader
            eyebrow="Notificações automáticas"
            title={<>Cada etapa da OS <span className="text-gradient-amber">avisa o cliente sozinha no WhatsApp.</span></>}
            sub="Não é bot, não é IA respondendo. Quando você marca no app que recebeu o carro, iniciou um serviço ou finalizou uma etapa, o Pátio OS dispara uma notificação pronta no WhatsApp do cliente. Ele acompanha tudo em tempo real e para de ligar perguntando 'já ficou?'."
          />
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Você marca, ele avisa", d: "Cada mudança de status no app vira mensagem no WhatsApp." },
              { t: "Modelos prontos", d: "Recebido, em execução, etapa concluída, pronto para retirada." },
              { t: "Sem digitar nada", d: "O app envia com nome do cliente, veículo e OS já preenchidos." },
              { t: "Cliente informado", d: "Menos ligação perguntando, mais tempo dentro da oficina." },
            ].map((x, i)=>(
              <motion.div
                key={x.t}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="rounded-xl bg-surface border border-border p-4 hover:border-primary/40 hover:shadow-[0_8px_24px_-8px_oklch(0.70_0.19_75_/_0.25)] transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <motion.div
                    animate={inView ? { rotate: [0, -12, 12, -8, 8, 0] } : {}}
                    transition={{ duration: 0.9, delay: 0.6 + i * 0.15, ease: "easeInOut" }}
                  >
                    <BellRing className="h-4 w-4 text-primary" />
                  </motion.div>
                  <div className="font-semibold text-sm">{x.t}</div>
                </div>
                <div className="text-sm text-muted-foreground">{x.d}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}


/* ---------------- ESTOQUE ---------------- */
function AnimatedNumber({ value, format = (n: number) => String(n), duration = 0.9 }: { value: number; format?: (n: number) => string; duration?: number }) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);
  useEffect(() => {
    const from = prev.current;
    prev.current = value;
    if (from === value) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);
  return <>{format(display)}</>;
}

function Estoque() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Ciclo de demonstração: IA identifica notas -> concilia -> estoque atualiza
  const mockRef = useRef<HTMLDivElement>(null);
  const mockInView = useInView(mockRef, { once: false, amount: 0.35 });
  const [phase, setPhase] = useState<"idle" | "scanning" | "done">("idle");

  useEffect(() => {
    if (!mockInView) {
      setPhase("idle");
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    let cancelled = false;
    const cycle = () => {
      if (cancelled) return;
      setPhase("idle");
      timers.push(setTimeout(() => setPhase("scanning"), 1600));
      timers.push(setTimeout(() => setPhase("done"), 4600));
      timers.push(setTimeout(cycle, 10800));
    };
    cycle();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [mockInView]);

  const done = phase === "done";
  const scanning = phase === "scanning";

  // Tilt 3D que acompanha o mouse (desktop)
  const tiltXRaw = useMotionValue(0);
  const tiltYRaw = useMotionValue(0);
  const tiltX = useSpring(tiltXRaw, { stiffness: 180, damping: 22 });
  const tiltY = useSpring(tiltYRaw, { stiffness: 180, damping: 22 });
  const handleTilt = (e: { clientX: number; clientY: number; currentTarget: EventTarget & HTMLDivElement }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltYRaw.set(px * 7);
    tiltXRaw.set(-py * 5);
  };
  const resetTilt = () => {
    tiltXRaw.set(0);
    tiltYRaw.set(0);
  };

  return (
    <section className="py-14 sm:py-20 md:py-32 bg-surface/40 border-y border-border" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
        <div>
          <SectionHeader
            eyebrow="Estoque e peças"
            title={<>A peça entra no estoque <span className="text-gradient-amber">direto da nota fiscal.</span></>}
            sub="Chega XML do fornecedor, você importa e pronto: código, descrição, custo e quantidade cadastrados. Quando a peça vai pra OS, a baixa é automática. Fim do caderno, fim da peça 'sumida'."
          />
          <ul className="mt-8 space-y-4">
            {[
              { t: "Importação de XML de NF-e", d: "Sobe a nota, estoque atualizado em segundos." },
              { t: "Cadastro de fornecedores", d: "Histórico de compras, prazo e condição." },
              { t: "Baixa automática na OS", d: "Usou na ordem de serviço, saiu do estoque." },
              { t: "Alerta de estoque mínimo", d: "Você vê o que precisa repor antes de faltar." },
            ].map((x, idx)=>(
              <motion.li
                key={x.t}
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="h-11 w-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{x.t}</div>
                  <div className="text-muted-foreground text-sm">{x.d}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div style={{ perspective: 1400 }} className="relative">
          {/* Glow ambiente atrás do card */}
          <motion.div
            className="absolute -inset-6 rounded-[3rem] blur-3xl -z-10 pointer-events-none"
            animate={done ? { backgroundColor: "rgba(34,197,94,0.18)" } : { backgroundColor: "rgba(245,158,11,0.14)" }}
            transition={{ duration: 0.9 }}
          />
        <motion.div
          ref={mockRef}
          className="relative rounded-2xl bg-surface border border-border shadow-[var(--shadow-card)] overflow-hidden"
          initial={{ opacity: 0, y: 48, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
        >
          <Confetti active={done} />

          {/* Brilho que varre o card no sucesso */}
          <AnimatePresence>
            {done && (
              <motion.div
                className="absolute inset-y-0 w-1/3 pointer-events-none z-40 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{ skewX: -18 }}
                initial={{ left: "-45%", opacity: 0 }}
                animate={{ left: "125%", opacity: [0, 1, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>

          {/* Toolbar tipo janela */}
          <div className="border-b border-border p-3.5 flex items-center justify-between bg-surface-2/60">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-primary/70" />
              <div className="w-3 h-3 rounded-full bg-success/70" />
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-success"
                  animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                ao vivo
              </span>
              <motion.div
                className="px-3 py-1 bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full border border-primary/30"
                animate={scanning ? { scale: [1, 1.06, 1] } : {}}
                transition={{ duration: 0.8, repeat: scanning ? Infinity : 0 }}
              >
                Estoque Inteligente
              </motion.div>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-3 p-4">
            {[
              { label: "Itens totais", num: done ? 1299 : 1284, fmt: (n: number) => n.toLocaleString("pt-BR"), delta: "+15", tint: false },
              { label: "Atenção", num: done ? 10 : 12, fmt: (n: number) => String(n), sub: "baixo estoque", delta: "-2", tint: true },
              { label: "Valor total", num: done ? 43 : 42, fmt: (n: number) => `R$ ${n}k`, underline: true, delta: "+1k", tint: false },
            ].map((kpi, idx) => (
              <motion.div
                key={kpi.label}
                className={`relative p-3 rounded-xl border shadow-sm ${kpi.tint ? "bg-primary/10 border-primary/25" : "bg-surface border-border"}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                {/* Chip de variação quando o estoque atualiza */}
                <AnimatePresence>
                  {done && (
                    <motion.span
                      className="absolute top-1.5 right-1.5 text-[8px] font-bold text-success bg-success/10 border border-success/30 rounded-full px-1.5 py-px"
                      initial={{ opacity: 0, y: 6, scale: 0.5 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.35, delay: 0.35 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {kpi.delta}
                    </motion.span>
                  )}
                </AnimatePresence>
                <p className={`text-[10px] font-semibold uppercase tracking-wide ${kpi.tint ? "text-primary" : "text-muted-foreground"}`}>{kpi.label}</p>
                <div className="flex items-end gap-1 mt-1">
                  <motion.p
                    className={`text-xl font-display font-bold text-foreground tabular-nums ${kpi.underline ? "underline decoration-primary decoration-2 underline-offset-4" : ""}`}
                    animate={done ? { scale: [1, 1.15, 1] } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.12 }}
                  >
                    <AnimatedNumber value={mockInView ? kpi.num : 0} format={kpi.fmt} duration={done ? 0.7 : 1.1} />
                  </motion.p>
                  {kpi.sub && <span className="text-[10px] text-muted-foreground mb-1">{kpi.sub}</span>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Alerta de IA */}
          <motion.div
            className="relative mx-4 mb-4 p-3 rounded-xl border flex items-center justify-between overflow-hidden"
            animate={
              done
                ? { backgroundColor: "rgba(34,197,94,0.08)", borderColor: "rgba(34,197,94,0.35)" }
                : { backgroundColor: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.30)" }
            }
            transition={{ duration: 0.5 }}
          >
            {/* Barra de progresso da conciliação */}
            <motion.div
              className="absolute bottom-0 left-0 h-[3px] bg-primary rounded-full"
              initial={false}
              animate={scanning ? { width: "100%", opacity: 1 } : { width: "0%", opacity: 0 }}
              transition={scanning ? { width: { duration: 2.8, ease: "easeInOut" }, opacity: { duration: 0.15 } } : { duration: 0.3 }}
            />

            {/* Notas fiscais voando para dentro da IA */}
            <AnimatePresence>
              {scanning &&
                [0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-border shadow-md text-[9px] font-semibold text-foreground z-10 pointer-events-none"
                    style={{ top: "50%" }}
                    initial={{ left: "72%", y: "-50%", opacity: 0, scale: 0.9 }}
                    animate={{ left: ["72%", "9%"], y: "-50%", opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.4] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.62, ease: "easeInOut" }}
                  >
                    <FileText className="w-3 h-3 text-primary" />
                    NF-e 00{884 + i}
                  </motion.div>
                ))}
            </AnimatePresence>
            <div className="flex items-center gap-3 min-w-0">
              <motion.div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${done ? "bg-success text-white" : "bg-primary text-primary-foreground"}`}
                animate={
                  scanning
                    ? { rotate: [0, 360] }
                    : { boxShadow: ["0 0 0 0 hsl(var(--primary) / 0.35)", "0 0 0 8px hsl(var(--primary) / 0)", "0 0 0 0 hsl(var(--primary) / 0)"] }
                }
                transition={scanning ? { duration: 1.2, repeat: Infinity, ease: "linear" } : { duration: 2, repeat: Infinity }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={done ? "check" : "sparkles"}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex"
                  >
                    {done ? <Check className="w-4.5 h-4.5" strokeWidth={3} /> : <Sparkles className="w-4.5 h-4.5" />}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground">Importação automática</p>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={phase}
                    className="text-[10px] text-muted-foreground truncate"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {phase === "idle" && "IA identificou 4 novas notas fiscais"}
                    {phase === "scanning" && "Lendo XML e conferindo itens..."}
                    {phase === "done" && "4 notas conciliadas, estoque atualizado ✓"}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
            <motion.button
              className={`px-3 py-1.5 text-[10px] font-bold rounded-lg shadow-sm shrink-0 inline-flex items-center gap-1.5 ${done ? "bg-success text-white" : "bg-primary text-primary-foreground"}`}
              animate={scanning ? { scale: [1, 0.88, 1] } : { scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              {scanning && <Loader2 className="w-3 h-3 animate-spin" />}
              {phase === "idle" && "Conciliar"}
              {phase === "scanning" && "Conciliando..."}
              {phase === "done" && "Concluído"}
            </motion.button>
          </motion.div>

          {/* Tabela */}
          <div className="px-4 pb-4">
            <div className="bg-surface rounded-lg border border-border overflow-hidden relative">
              {/* Scanner que varre a tabela durante a conciliação */}
              <AnimatePresence>
                {scanning && (
                  <motion.div
                    className="absolute inset-x-0 h-12 pointer-events-none z-10 bg-gradient-to-b from-transparent via-primary/15 to-transparent border-b border-primary/40"
                    initial={{ top: "-15%", opacity: 0 }}
                    animate={{ top: ["-15%", "100%"], opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ top: { duration: 1.1, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              <table className="w-full text-left">
                <thead className="bg-surface-2 text-[10px] text-muted-foreground font-semibold">
                  <tr>
                    <th className="px-3 py-2 uppercase tracking-wide">Peça / Código</th>
                    <th className="px-3 py-2 uppercase tracking-wide">Qtd.</th>
                    <th className="px-3 py-2 text-right uppercase tracking-wide">Status</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] text-foreground divide-y divide-border">
                  {[
                    { n: "Amortecedor Dianteiro", r: "REF: 90234-AMD", qty: done ? 9 : 4, status: done ? "normal" : "baixo", restock: 5 },
                    { n: "Pastilha de Freio Cerâmica", r: "REF: 12847-PFC", qty: 18, status: "normal", tint: true },
                    { n: "Filtro de Óleo Sintético", r: "REF: 77122-FOS", qty: done ? 12 : 2, status: done ? "normal" : "critico", restock: 10 },
                    { n: "Óleo 5W30 4L", r: "REF: OL-5W30-4L", qty: 25, status: "normal" },
                  ].map((row, rowIdx) => {
                    const badge =
                      row.status === "normal"
                        ? { label: "Normal", cls: "bg-success/10 text-success border-success/30", dot: "bg-success" }
                        : row.status === "baixo"
                        ? { label: "Baixo", cls: "bg-destructive/10 text-destructive border-destructive/30", dot: "bg-destructive" }
                        : { label: "Crítico", cls: "bg-destructive/15 text-destructive border-destructive/40", dot: "bg-destructive" };
                    return (
                      <motion.tr
                        key={row.r}
                        initial={{ opacity: 0, y: 14 }}
                        animate={
                          inView
                            ? row.restock && done
                              ? { opacity: 1, y: 0, backgroundColor: "rgba(34,197,94,0.10)" }
                              : { opacity: 1, y: 0, backgroundColor: row.tint ? "rgba(245,158,11,0.04)" : "rgba(0,0,0,0)" }
                            : {}
                        }
                        transition={{ duration: 0.45, delay: inView && !done ? 0.5 + rowIdx * 0.1 : rowIdx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <td className="px-3 py-2.5">
                          <span className="font-semibold block text-foreground">{row.n}</span>
                          <span className="text-[9px] text-muted-foreground">{row.r}</span>
                        </td>
                        <td className="px-3 py-2.5 font-mono tabular-nums text-foreground relative">
                          <motion.span
                            className="inline-block"
                            animate={row.restock && done ? { scale: [1, 1.35, 1] } : {}}
                            transition={{ duration: 0.5, delay: 0.15 + rowIdx * 0.12 }}
                          >
                            <AnimatedNumber value={row.qty} format={(n) => String(n).padStart(2, "0")} duration={0.6} />
                          </motion.span>
                          <AnimatePresence>
                            {row.restock && done && (
                              <motion.span
                                className="absolute -top-1 left-8 text-[9px] font-bold text-success"
                                initial={{ opacity: 0, y: 8, scale: 0.6 }}
                                animate={{ opacity: [0, 1, 1], y: [8, -2, -4], scale: 1 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.8, delay: 0.2 + rowIdx * 0.12 }}
                              >
                                +{row.restock}
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </td>
                        <td className="px-3 py-2.5 text-right">
                          <AnimatePresence mode="popLayout" initial={false}>
                            <motion.span
                              key={badge.label}
                              className={`inline-flex items-center px-2 py-0.5 rounded-full font-semibold text-[9px] border ${badge.cls}`}
                              initial={{ scale: 0.5, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.5, opacity: 0 }}
                              transition={{ duration: 0.3, delay: rowIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                              <span className={`w-1 h-1 rounded-full ${badge.dot} mr-1.5`} />
                              {badge.label}
                            </motion.span>
                          </AnimatePresence>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer hint */}
          <div className="px-4 py-3 bg-surface-2/60 border-t border-border flex items-center justify-center gap-4 opacity-70">
            {[8, 12, 8].map((w, i) => (
              <motion.div
                key={i}
                className={`h-1.5 bg-border rounded-full ${w === 12 ? "w-12" : "w-8"}`}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.35, ease: "easeInOut" }}
              />
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINANCEIRO / PDV ---------------- */
function FinanceiroPDV() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Demonstração ao vivo: pagamentos caem via Pix, um a um
  const liveRef = useRef<HTMLDivElement>(null);
  const liveInView = useInView(liveRef, { once: false, amount: 0.3 });
  const [paid, setPaid] = useState(0);

  const payments = [
    { t: "Recebimento OS – GOL 1.0", short: "GOL 1.0", d: "Vence 04/07/2026", v: 310 },
    { t: "Recebimento OS – CELER 1.5FLEX", short: "CELER 1.5FLEX", d: "Vence 04/07/2026", v: 680 },
    { t: "Recebimento OS – PCX 150", short: "PCX 150", d: "Vence 04/07/2026", v: 340 },
  ];

  useEffect(() => {
    if (!liveInView) {
      setPaid(0);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    let cancelled = false;
    const cycle = () => {
      if (cancelled) return;
      setPaid(0);
      timers.push(setTimeout(() => setPaid(1), 2600));
      timers.push(setTimeout(() => setPaid(2), 5200));
      timers.push(setTimeout(() => setPaid(3), 7800));
      timers.push(setTimeout(cycle, 13000));
    };
    cycle();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [liveInView]);

  const sumPaid = payments.slice(0, paid).reduce((a, p) => a + p.v, 0);
  const receivable = 1330 - sumPaid;
  const received = 1575 + sumPaid;
  const open = 3 - paid;
  const brl = (n: number) => `R$ ${n.toLocaleString("pt-BR")},00`;
  const allPaid = paid === 3;

  return (
    <section className="py-14 sm:py-20 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Financeiro e PDV"
          title={<>O caixa fecha <span className="text-gradient-amber">no fim do dia sem planilha.</span></>}
          sub="Tudo que entra e sai passa pelo sistema: PDV integrado, contas a pagar e receber, faturamento por período, comissão de mecânico. No fim do mês você sabe onde ganhou e onde vazou dinheiro."
        />

        {/* 4 KPIs */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            { i: TrendingUp, label: "A receber", num: receivable, sub: open > 0 ? `${open} Cobranças abertas` : "Tudo recebido ✓", good: allPaid, tint: "bg-success/15 text-success" },
            { i: Wallet, label: "A pagar", num: 0, sub: "0 Contas em aberto", good: false, tint: "bg-destructive/15 text-destructive" },
            { i: ShieldCheck, label: "Saldo projetado", num: 1330, sub: "Operação positiva", good: false, tint: "bg-primary/15 text-primary" },
            { i: BellRing, label: "Em atraso", num: receivable, sub: open > 0 ? `${open} Pendências` : "Nenhuma pendência ✓", good: allPaid, tint: "bg-primary/15 text-primary" },
          ].map(({ i: Icon, label, num, sub, good, tint }, idx) => (
            <motion.div
              key={label}
              className="rounded-2xl bg-surface border border-border p-5 hover-lift"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className={`h-9 w-9 rounded-xl flex items-center justify-center ${good ? "bg-success text-white" : tint}`}
                  animate={good ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {good ? <Check className="h-4 w-4" strokeWidth={3} /> : <Icon className="h-4 w-4" />}
                </motion.div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="font-display font-bold text-lg mt-0.5 truncate tabular-nums">
                    <AnimatedNumber value={inView ? num : 0} format={brl} duration={paid > 0 ? 0.7 : 1.2} />
                  </div>
                  <div className={`text-[11px] mt-0.5 ${good ? "text-success font-semibold" : "text-muted-foreground"}`}>{sub}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fluxo + Próximos vencimentos */}
        <div className="mt-5 grid lg:grid-cols-3 gap-5" ref={liveRef}>
          <motion.div
            className="lg:col-span-2 rounded-2xl bg-surface border border-border p-4 sm:p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-semibold">Fluxo da empresa</div>
            <div className="text-xs text-muted-foreground mt-0.5">Resumo rápido do que entra e sai no período.</div>

            <motion.div
              className="mt-5 rounded-xl border p-5 flex items-center justify-between"
              animate={allPaid ? { backgroundColor: "rgba(34,197,94,0.10)", borderColor: "rgba(34,197,94,0.30)" } : { backgroundColor: "rgba(245,158,11,0.10)", borderColor: "rgba(245,158,11,0.20)" }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="text-xs text-muted-foreground">{allPaid ? "Tudo em caixa" : "Saldo previsto"}</div>
                <div className="font-display text-3xl font-bold mt-1 tabular-nums">
                  <AnimatedNumber value={inView ? (allPaid ? received : receivable) : 0} format={(n) => `R$ ${n.toLocaleString("pt-BR")}`} duration={paid > 0 ? 0.7 : 1.2} />
                  <span className="text-xl text-muted-foreground">,00</span>
                </div>
              </div>
              <motion.div
                className={`h-10 w-10 rounded-xl border flex items-center justify-center ${allPaid ? "bg-success text-white border-success" : "bg-surface border-border"}`}
                animate={paid > 0 && !allPaid ? { rotate: [0, -8, 8, 0] } : allPaid ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                {allPaid ? <Check className="h-5 w-5" strokeWidth={3} /> : <Wallet className="h-5 w-5 text-primary" />}
              </motion.div>
            </motion.div>

            <div className="mt-5 space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span>Entradas previstas</span>
                  <span className="text-muted-foreground tabular-nums">
                    <AnimatedNumber value={inView ? receivable : 0} format={brl} duration={0.7} />
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-success rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: inView ? `${(receivable / 1330) * 100}%` : "0%" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-destructive">Saídas previstas</span>
                  <span className="text-muted-foreground">R$ 0,00</span>
                </div>
                <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-destructive rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: inView ? "4%" : "0%" }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-border">
              {[
                { l: "Recebido (caixa)", num: received, c: "text-success" },
                { l: "Pago (realizado)", num: 0, c: "text-destructive" },
                { l: "Caixa líquido", num: received, c: "text-foreground" },
              ].map((k) => (
                <div key={k.l} className="rounded-lg bg-surface-2/60 border border-border p-2 sm:p-3 text-center">
                  <div className="text-[11px] text-muted-foreground">{k.l}</div>
                  <div className={`font-display font-bold text-sm mt-1 tabular-nums ${k.c}`}>
                    <AnimatedNumber value={inView ? k.num : 0} format={brl} duration={paid > 0 ? 0.7 : 1.2} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-2xl bg-surface border border-border p-4 sm:p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Toast de pagamento recebido */}
            <AnimatePresence>
              {paid > 0 && (
                <motion.div
                  key={paid}
                  className="absolute -top-4 right-3 z-20 flex items-center gap-2 rounded-xl bg-white border border-success/40 shadow-[0_8px_24px_-6px_rgba(34,197,94,0.35)] px-3 py-2"
                  initial={{ opacity: 0, y: -16, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.85 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center shrink-0"
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </motion.div>
                  <div>
                    <div className="text-[11px] font-bold text-foreground leading-tight">Pix recebido · {brl(payments[paid - 1].v)}</div>
                    <div className="text-[9px] text-muted-foreground leading-tight">{payments[paid - 1].short} · agora</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="font-semibold">Próximos vencimentos</div>
            <div className="text-xs text-muted-foreground mt-0.5">O que precisa de ação primeiro.</div>
            <div className="mt-5 space-y-4">
              {payments.map((r, idx) => {
                const isPaid = idx < paid;
                return (
                  <motion.div
                    key={r.t}
                    className="flex items-center gap-3"
                    animate={isPaid ? { opacity: 0.85 } : { opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${isPaid ? "bg-success text-white" : "bg-success/15 text-success"}`}
                      animate={isPaid ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ duration: 0.45 }}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={isPaid ? "paid" : "open"}
                          className="flex"
                          initial={{ scale: 0.4, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.4, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isPaid ? <Check className="h-4 w-4" strokeWidth={3} /> : <TrendingUp className="h-4 w-4" />}
                        </motion.span>
                      </AnimatePresence>
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <div className={`text-sm font-medium truncate transition-all duration-300 ${isPaid ? "line-through text-muted-foreground" : ""}`}>{r.t}</div>
                      <div className={`text-[11px] transition-colors duration-300 ${isPaid ? "text-success font-semibold" : "text-muted-foreground"}`}>
                        {isPaid ? "Recebido via Pix ✓" : r.d}
                      </div>
                    </div>
                    <div className={`text-sm font-semibold tabular-nums transition-colors duration-300 ${isPaid ? "text-success" : ""}`}>{brl(r.v)}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Barra de progresso dos recebimentos */}
            <div className="mt-5 pt-4 border-t border-border">
              <div className="flex justify-between text-[11px] text-muted-foreground mb-1.5">
                <span>Recebidos hoje</span>
                <span className="font-semibold tabular-nums">{paid}/3</span>
              </div>
              <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
                <motion.div
                  className="h-full bg-success rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(paid / 3) * 100}%` }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contas do período */}
        <div className="mt-5 rounded-2xl bg-surface border border-border p-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="font-semibold">Contas do período</div>
              <div className="text-xs text-muted-foreground mt-0.5">5 lançamentos encontrados.</div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Tipo", "Categoria", "Mecânico", "Este mês"].map((f) => (
                <div key={f} className="px-3 py-1.5 rounded-lg bg-surface-2 border border-border flex items-center gap-1.5">
                  {f} <ChevronDown className="h-3 w-3" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border">
                  <th className="text-left font-medium py-2.5">Descrição</th>
                  <th className="text-left font-medium py-2.5">Tipo</th>
                  <th className="text-left font-medium py-2.5">Vencimento</th>
                  <th className="text-left font-medium py-2.5">Status</th>
                  <th className="text-right font-medium py-2.5">Valor</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((r, idx) => {
                  const isPaid = idx < paid;
                  return (
                    <motion.tr
                      key={r.t}
                      className="border-b border-border/60 last:border-0"
                      animate={{ backgroundColor: isPaid ? "rgba(34,197,94,0.06)" : "rgba(0,0,0,0)" }}
                      transition={{ duration: 0.5 }}
                    >
                      <td className="py-3">
                        <div className="font-medium">{r.t}</div>
                        <div className="text-[11px] text-muted-foreground">Cliente / OS</div>
                      </td>
                      <td className="py-3">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-success/15 text-success text-xs">
                          <span className="h-1.5 w-1.5 rounded-full bg-success" /> Entrada
                        </span>
                      </td>
                      <td className="py-3 text-muted-foreground">{r.d}</td>
                      <td className="py-3">
                        <AnimatePresence mode="popLayout" initial={false}>
                          <motion.span
                            key={isPaid ? "ok" : "late"}
                            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs ${isPaid ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`}
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          >
                            {isPaid ? <Check className="h-3 w-3" strokeWidth={3} /> : <BellRing className="h-3 w-3" />}
                            {isPaid ? "Recebido" : "Atrasado"}
                          </motion.span>
                        </AnimatePresence>
                      </td>
                      <td className={`py-3 text-right font-semibold tabular-nums ${isPaid ? "text-success" : ""}`}>{brl(r.v)}</td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- VITRINE + IA ---------------- */
function VitrineIA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [range, setRange] = useState<"7" | "30" | "all">("30");
  const metrics = { "7": { v: 8, w: 4, l: 2 }, "30": { v: 38, w: 18, l: 9 }, "all": { v: 142, w: 64, l: 31 } }[range];
  const services = [
    { name: "TROCA DE ÓLEO", Icon: Droplet, tone: "bg-amber-100 text-amber-700", img: serviceOilChange, v: range === "7" ? 5 : range === "30" ? 18 : 48, c: range === "7" ? 3 : range === "30" ? 10 : 24, l: range === "7" ? 2 : range === "30" ? 5 : 12 },
    { name: "FUNILARIA E PINTURA", Icon: Paintbrush, tone: "bg-sky-100 text-sky-700", img: serviceBodywork, v: range === "7" ? 4 : range === "30" ? 14 : 42, c: range === "7" ? 2 : range === "30" ? 8 : 20, l: range === "7" ? 1 : range === "30" ? 4 : 9 },
  ];
  return (
    <section className="py-14 sm:py-20 md:py-32 bg-surface/40 border-y border-border" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Sua vitrine online"
          title={<>Cliente novo te achando e você vendo <span className="text-gradient-amber">exatamente o que funciona.</span></>}
          sub="Cada oficina no Pátio OS ganha uma página pública com serviços, fotos e botão de agendamento no WhatsApp. E um painel de métricas mostra quem viu, quem clicou e quem chamou, por serviço."
        />

        <div className="mt-10 md:mt-14 grid lg:grid-cols-2 gap-6">
          {/* VITRINE ONLINE */}
          <motion.div
            className="rounded-[28px] bg-[#eef1f4] border border-border overflow-hidden hover-lift shadow-xl"
            initial={{ opacity: 0, y: 50, rotateY: -5 }}
            animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <div className="px-3 pt-3">
              <div className="rounded-2xl overflow-hidden bg-neutral-900 relative h-44">
                <img src={workshopBanner} alt="Oficina do Roberto" width={1200} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute left-4 bottom-4 text-white">
                  <div className="text-[10px] font-bold tracking-widest text-primary uppercase">Oficina certificada</div>
                  <div className="font-display font-black text-xl leading-none mt-1">Cuidamos do seu carro<br/>como se fosse nosso.</div>
                </div>
              </div>
            </div>



            <div className="px-6 pt-4 pb-6 relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 rounded-2xl bg-white shadow-lg border border-border flex items-center justify-center">
                <img src={oficinaLogo.url} alt="" className="h-10 w-10" />
              </div>
              <div className="text-center mt-8">
                <div className="font-display font-bold text-xl text-neutral-900">Oficina do Roberto</div>
                <div className="text-xs text-neutral-500 mt-1">Seu carro em boas mãos</div>
              </div>

              <div className="flex items-center gap-2 mt-6 mb-3">
                <div className="font-semibold text-neutral-900 text-sm">Nossos serviços</div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-600 font-semibold">4</span>
              </div>

              <div className="space-y-3">
                {services.slice(0, 3).map((s, i) => (
                  <motion.div
                    key={s.name}
                    className="rounded-2xl bg-white border border-neutral-200 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  >
                    <div className="h-28 relative overflow-hidden">
                      <img src={s.img} alt={s.name} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="font-bold text-neutral-900 text-sm">{s.name}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Óleo + filtro com mão de obra</div>
                      <div className="mt-2 inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600">
                        <MessageCircle className="h-3 w-3" /> Consulta
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-100">
                        <div className="text-xs font-semibold text-neutral-900">Consulte-nos</div>
                        <motion.button
                          className="text-xs font-bold px-4 py-2 rounded-full bg-neutral-900 text-white"
                          whileHover={{ scale: 1.05 }}
                        >
                          Agendar
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* MÉTRICAS */}
          <motion.div
            className="rounded-2xl bg-white border border-border p-6 hover-lift shadow-xl"
            initial={{ opacity: 0, y: 50, rotateY: 5 }}
            animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="h-9 w-9 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-neutral-900">Desempenho por serviço</div>
                <div className="text-xs text-neutral-500">Quem viu, clicou e chamou no WhatsApp em cada serviço.</div>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              {([["7", "7 dias"], ["30", "30 dias"], ["all", "Tudo"]] as const).map(([k, label]) => (
                <button
                  key={k}
                  onClick={() => setRange(k)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition ${
                    range === k ? "bg-neutral-900 text-white border-neutral-900" : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {[
                { Icon: Eye, label: "VISITAS", value: metrics.v, tone: "bg-neutral-100 text-neutral-700", num: "text-neutral-900" },
                { Icon: MessageCircle, label: "WHATSAPP", value: metrics.w, tone: "bg-emerald-100 text-emerald-700", num: "text-neutral-900" },
                { Icon: CheckCircle2, label: "LEADS", value: metrics.l, tone: "bg-amber-100 text-amber-700", num: "text-emerald-600" },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  className="rounded-2xl border border-neutral-200 p-3.5 bg-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  <div className={`h-7 w-7 rounded-lg flex items-center justify-center ${m.tone}`}>
                    <m.Icon className="h-3.5 w-3.5" />
                  </div>
                  <motion.div
                    className={`font-display font-black text-3xl mt-2 leading-none ${m.num}`}
                    key={`${range}-${m.label}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {m.value}
                  </motion.div>
                  <div className="text-[10px] font-bold text-neutral-500 tracking-wider mt-1.5">{m.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-[10px] font-bold text-neutral-500 tracking-widest pb-2.5 border-b border-neutral-100">
                <span>SERVIÇO</span>
                <div className="flex gap-5 pr-1 items-center">
                  <Eye className="h-3.5 w-3.5" />
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                </div>
              </div>
              <div className="divide-y divide-neutral-100">
                {services.map((s, i) => (
                  <motion.div
                    key={s.name}
                    className="flex items-center py-3.5 group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className={`h-9 w-9 rounded-xl flex items-center justify-center mr-3 shrink-0 ${s.tone}`}>
                      <s.Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
                    </div>
                    <div className="flex-1 text-[13px] font-bold text-neutral-900 truncate tracking-tight">{s.name}</div>
                    <div className="flex gap-5 text-sm font-bold text-neutral-700 pr-1 tabular-nums">
                      <span className="w-5 text-right">{s.v}</span>
                      <span className="w-5 text-right">{s.c}</span>
                      <span className={`w-5 text-right ${s.l > 0 ? "text-emerald-600" : "text-neutral-300"}`}>{s.l}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-neutral-500">
              <span className="inline-flex items-center gap-1.5"><Eye className="h-3 w-3" /> visualizações</span>
              <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3 w-3 text-amber-500" /> cliques no card</span>
              <span className="inline-flex items-center gap-1.5"><MessageCircle className="h-3 w-3 text-emerald-600" /> chamadas no WhatsApp</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DEPOIMENTOS ---------------- */
function usePerPage() {
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 768) setPerPage(1);
      else if (w < 1024) setPerPage(2);
      else setPerPage(3);
    };
    calc();
    window.addEventListener("resize", calc, { passive: true });
    return () => window.removeEventListener("resize", calc);
  }, []);
  return perPage;
}

function Depoimentos() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const items = [
    { n: "Roberto Martins", c: "São Paulo, SP", t: "Antes o cliente demorava 2 dias pra aprovar orçamento. Agora aprova no WhatsApp em 20 minutos. Faturei 30% a mais no primeiro mês." },
    { n: "Ana Paula Ferreira", c: "Belo Horizonte, MG", t: "Joguei fora o caderno de peças. Importa o XML da nota, tá tudo lá. Não sumo mais com filtro nem com pastilha." },
    { n: "Lucas Costa", c: "Curitiba, PR", t: "O caixa fechava sempre com diferença. Hoje o PDV é integrado, sei quanto entrou por serviço, por peça e por mecânico." },
    { n: "João Paulo", c: "Rio de Janeiro, RJ", t: "Minha oficina era uma bagunça de papel. Agora tudo digital, o cliente acompanha pelo celular e eu durmo tranquilo." },
    { n: "Carlos Silva", c: "Salvador, BA", t: "A vitrine da Pátio trouxe 15 carros novos no primeiro mês. O pessoal agenda pelo WhatsApp e eu só preparo o orçamento." },
    { n: "Patrícia Mendes", c: "Porto Alegre, RS", t: "Consegui ver que um mecânico demorava 3x mais que os outros. Ajustei a equipe e a produtividade subiu 40%." },
    { n: "Marcos Oliveira", c: "Goiânia, GO", t: "Antes perdia cliente porque esquecia de ligar. Agora o sistema manda lembrete automático e minha taxa de retorno dobrou." },
    { n: "Fernanda Lima", c: "Recife, PE", t: "Meu marido e eu usamos juntos. Ele no pátio, eu no financeiro. Tudo sincronizado, sem planilha no Google Drive." },
    { n: "Eduardo Ribeiro", c: "Fortaleza, CE", t: "O controle de garantia era um pesadelo. Hoje rastreio cada peça pelo número de série. Reclamação caiu pra quase zero." },
  ];

  // Duplicate for seamless infinite loop
  const loop = [...items, ...items];

  return (
    <section className="py-14 sm:py-20 md:py-32 overflow-hidden" ref={sectionRef}>
      <style>{`
        @keyframes depo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .depo-track {
          animation: depo-marquee 60s linear infinite;
          will-change: transform;
        }
        .depo-mask {
          -webkit-mask-image: linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%);
                  mask-image: linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%);
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Quem já usa"
          title={<>Donos de oficina falando de <span className="text-gradient-amber">resultado, não de sistema.</span></>}
        />
      </div>

      <motion.div
        className="mt-10 md:mt-14 depo-mask"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="depo-track flex gap-5 w-max">
          {loop.map((i, idx) => (
            <figure
              key={idx}
              className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl bg-surface border border-border p-6 flex flex-col"
            >
              <div className="flex gap-0.5 text-primary mb-4">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary" />
                ))}
              </div>
              <blockquote className="text-foreground/95 leading-relaxed flex-1 text-[15px]">
                "{i.t}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-amber flex items-center justify-center font-bold text-primary-foreground text-sm">
                  {i.n.split(" ").map((x) => x[0]).slice(0, 2).join("")}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm truncate">{i.n}</div>
                  <div className="text-xs text-muted-foreground truncate">{i.c}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- PLANOS ---------------- */
function Planos() {
  const [annual, setAnnual] = useState(true);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const startCheckout = (plan: string) => {
    setCheckoutError(null);
    const url = PAYMENT_LINKS[plan]?.[annual ? "year" : "month"];
    if (!url) {
      setCheckoutError("Não foi possível abrir o pagamento agora. Tente de novo em instantes ou chame a gente no WhatsApp.");
      return;
    }
    setLoadingPlan(plan);
    window.location.href = url;
  };
  const plans = [
    {
      name: "START", tag: "Pra começar", highlight: false,
      mensal: 149, anual: 1490,
      desc: "Ideal para oficinas que estão dando os primeiros passos no digital.",
      features: [
        { label: "Até 2 usuários", included: true },
        { label: "1 unidade", included: true },
        { label: "OS, estoque e financeiro", included: true },
        { label: "OCR de placa: 100/mês", included: true },
        { label: "Suporte por e-mail", included: true },
        { label: "Assistente com IA", included: false },
        { label: "Disparos WhatsApp", included: false },
        { label: "Auto Vitrine", included: false },
        { label: "Pixel na vitrine", included: false },
      ],
    },
    {
      name: "PRO", tag: "Popular", highlight: true,
      mensal: 297, anual: 2970,
      desc: "Ideal para oficinas em crescimento que querem automatizar e escalar.",
      features: [
        { label: "Até 5 usuários", included: true },
        { label: "1 unidade", included: true },
        { label: "OS, estoque e financeiro", included: true },
        { label: "Assistente com IA", included: true },
        { label: "OCR de placa: 500/mês", included: true },
        { label: "Disparos WhatsApp: 1.000/mês", included: true },
        { label: "Auto Vitrine (agendamento + cardápio)", included: true },
        { label: "Pixel na vitrine (Meta/Google)", included: true },
        { label: "Suporte prioritário", included: true },
      ],
    },
    {
      name: "MAX", tag: "Sem limites", highlight: false,
      mensal: 497, anual: 4970,
      desc: "Ideal para oficinas estruturadas que querem crescer com processos avançados e máxima eficiência.",
      features: [
        { label: "Usuários ilimitados", included: true },
        { label: "2 unidades", included: true },
        { label: "OS, estoque e financeiro", included: true },
        { label: "Assistente com IA", included: true },
        { label: "OCR de placa: ilimitado", included: true },
        { label: "Disparos WhatsApp: 5.000/mês", included: true },
        { label: "Auto Vitrine (agendamento + cardápio)", included: true },
        { label: "Pixel na vitrine (Meta/Google)", included: true },
        { label: "Suporte: grupo WhatsApp + dedicado", included: true },
      ],
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="planos" className="py-14 sm:py-20 md:py-32 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Flexibilidade e recursos sob medida para cada oficina
          </h2>

          {/* Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Mensal</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-8 rounded-full transition-colors"
              style={{ backgroundColor: annual ? "oklch(0.72 0.17 85)" : "oklch(0.85 0.01 80)" }}
              aria-label="Alternar entre mensal e anual"
            >
              <span
                className="absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow transition-transform"
                style={{ transform: annual ? "translateX(24px)" : "translateX(0)" }}
              />
            </button>
            <span className={`text-sm font-medium transition ${annual ? "text-foreground" : "text-muted-foreground"}`}>Anual</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: "oklch(0.97 0.02 90)", color: "oklch(0.72 0.17 85)" }}>
              Economize 30%
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 md:mt-14 grid lg:grid-cols-3 gap-6">
          {plans.map((p, pIdx) => {
            const price = annual ? Math.round(p.anual / 12) : p.mensal;
            const totalAnual = p.anual;
            return (
              <motion.div
                key={p.name}
                className={`relative rounded-3xl border p-6 sm:p-8 flex flex-col hover-lift ${
                  p.highlight
                    ? "border-plan-coral/30"
                    : "border-gray-200"
                }`}
                style={p.highlight ? { backgroundColor: "oklch(0.97 0.02 90)" } : { backgroundColor: "#fff" }}
                initial={{ opacity: 0, y: 60, scale: 0.94 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + pIdx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: "var(--shadow-float)" }}
              >
                {/* Badge */}
                {p.highlight && (
                  <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "oklch(0.97 0.02 90)", color: "oklch(0.72 0.17 85)", border: "1px solid oklch(0.85 0.04 88)" }}>
                    <Zap className="h-3 w-3" /> Popular
                  </div>
                )}

                <div className="text-sm font-semibold text-foreground">{p.name}</div>

                {/* Preço */}
                <div className="mt-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-medium" style={{ color: "oklch(0.70 0.01 80)" }}>R$</span>
                    <span
                      className="font-display text-5xl font-bold tracking-tight"
                      style={{ color: p.highlight ? "oklch(0.72 0.17 85)" : "oklch(0.18 0.015 60)" }}
                    >
                      {price.toLocaleString("pt-BR")}
                    </span>
                    <span
                      className="text-base font-medium ml-1"
                      style={{ color: p.highlight ? "oklch(0.72 0.17 85)" : "oklch(0.55 0.01 70)" }}
                    >
                      /mês
                    </span>
                  </div>
                  <div className="text-sm mt-1" style={{ color: "oklch(0.55 0.01 70)" }}>
                    {annual ? (
                      <>R$ {totalAnual.toLocaleString("pt-BR")} cobrado anualmente</>
                    ) : (
                      <>R$ {p.mensal.toLocaleString("pt-BR")} cobrado mensalmente</>
                    )}
                  </div>
                </div>

                {/* Descrição */}
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 70)" }}>
                  {p.desc}
                </p>

                {/* Features */}
                <div className="mt-8">
                  <div className="text-sm font-semibold text-foreground mb-4">O que está incluído:</div>
                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li key={f.label} className="flex gap-3 text-sm">
                        <span
                          className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: f.included ? "oklch(0.72 0.17 85)" : "oklch(0.85 0.01 80)",
                          }}
                        >
                          {f.included ? (
                            <Check className="h-3 w-3 text-white" strokeWidth={3} />
                          ) : (
                            <X className="h-3 w-3" style={{ color: "oklch(0.55 0.01 70)" }} strokeWidth={3} />
                          )}
                        </span>
                        <span
                          className={f.included ? "" : "line-through"}
                          style={{ color: f.included ? "oklch(0.35 0.01 60)" : "oklch(0.55 0.01 70)" }}
                        >
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botão */}
                <button
                  onClick={() => startCheckout(p.name)}
                  disabled={loadingPlan !== null}
                  className={`mt-auto text-center inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold transition hover:opacity-90 btn-shimmer disabled:opacity-60 disabled:cursor-wait ${
                    p.highlight
                      ? "text-white"
                      : p.name === "START"
                        ? "text-foreground"
                        : "border text-foreground hover:bg-gray-50"
                  }`}
                  style={
                    p.highlight
                      ? { backgroundColor: "oklch(0.72 0.17 85)" }
                      : p.name === "START"
                        ? { backgroundColor: "oklch(0.95 0.01 90)" }
                        : { borderColor: "oklch(0.85 0.01 80)" }
                  }
                >
                  {loadingPlan === p.name ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" style={{ color: p.highlight ? "#fff" : "oklch(0.72 0.17 85)" }} />
                      Abrindo pagamento...
                    </>
                  ) : (
                    <>
                      Quero começar agora
                      <ArrowRight
                        className="h-4 w-4"
                        style={{ color: p.highlight ? "#fff" : "oklch(0.72 0.17 85)" }}
                      />
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        {checkoutError && (
          <motion.p
            className="mt-6 text-center text-sm text-destructive font-medium"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {checkoutError}
          </motion.p>
        )}
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const faqs = [
    { q: "Tem fidelidade ou multa se eu cancelar?", a: "No plano mensal, não tem fidelidade nenhuma. Cancela quando quiser, sem multa, sem burocracia. No plano anual, se desistir, devolvemos os meses não usados." },
    { q: "Serve pra uma oficina pequena, de 2 ou 3 pessoas?", a: "Serve sim. O plano Start foi feito pra isso: até 2 usuários e uma unidade, com OS, estoque e financeiro completos. Muita oficina começa com 2 e cresce dentro do sistema." },
    { q: "Precisa instalar algo no computador?", a: "Não. O Pátio OS abre no navegador, no celular, tablet ou computador. Também dá pra instalar como aplicativo (PWA) e usar como se fosse app nativo, com atalho na tela." },
    { q: "Preciso entender de tecnologia pra usar?", a: "Não. Foi feito com dono de oficina, não com programador. As telas seguem o fluxo do dia a dia: recebe o carro, faz orçamento, executa, cobra. Se souber usar WhatsApp, usa o Pátio OS." },
    { q: "Funciona no celular?", a: "Funciona no celular, tablet e computador. O mecânico atualiza a OS no celular, você fecha o caixa no computador, tudo em tempo real na mesma tela." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-14 sm:py-20 md:py-32" ref={ref}>
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader eyebrow="Dúvidas comuns" title={<>Perguntas que <span className="text-gradient-amber">todo dono faz.</span></>} />
        <div className="mt-12 space-y-3">
          {faqs.map((f,i)=>(
            <motion.div
              key={i}
              className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <button onClick={()=>setOpen(open===i?null:i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-semibold pr-4 text-foreground">{f.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ChevronDown className="h-5 w-5 text-primary shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open===i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA FINAL ---------------- */
function CTAFinal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="cta" className="py-14 sm:py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.05]"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Pátio organizado, orçamento aprovado no WhatsApp e <span className="text-gradient-amber">caixa sob controle.</span>
        </motion.h2>
        <motion.p
          className="mt-6 text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Comece hoje. Sem fidelidade, sem cartão, sem instalar nada.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href="#"
            className="btn-primary text-base px-6 py-3.5 animate-pulse-glow btn-shimmer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Quero começar agora <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp text-base px-6 py-3.5"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <MessageCircle className="h-5 w-5" /> Falar com a gente
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- FLOATING WHATSAPP ---------------- */
function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] block w-14 h-14 rounded-full shadow-[0_8px_32px_-8px_rgba(37,211,102,0.55)]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={whatsappIconAsset.url} alt="WhatsApp" className="w-14 h-14 rounded-full block" />
      <span className="sr-only">Falar no WhatsApp</span>
    </motion.a>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <footer className="border-t border-border bg-surface/40 py-14" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          className="grid md:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logoAsset.url} alt="Pátio OS" className="h-9 w-9" />
              <span className="font-display font-bold text-lg">Pátio OS</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Gestão em tempo real pra oficinas mecânicas e centros automotivos do Brasil.
            </p>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4">Produto</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#planos" className="hover:text-foreground">Planos</a></li>
              <li><a href="#faq" className="hover:text-foreground">Dúvidas</a></li>
              <li><a href="#cta" className="hover:text-foreground">Começar</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4">Legal</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Termos de uso</a></li>
              <li><a href="#" className="hover:text-foreground">Privacidade</a></li>
              <li><a href="#" className="hover:text-foreground">Contato</a></li>
            </ul>
          </div>
        </motion.div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Pátio OS · patioos.com.br</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground">YouTube</a>
            <a href="#" className="hover:text-foreground">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
