import dashAsset from "@/assets/patio-dashboard.png.asset.json";
import mobileAsset from "@/assets/patio-mobile.png.asset.json";
import { Iphone16Pro } from "@/components/Iphone16Pro";

export default function MockupPatioOS() {
  return (
    <div className="relative w-full">
      {/* glow amarelo de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gradient-to-br from-amber-200/40 via-yellow-100/25 to-transparent blur-3xl" />
      </div>

      {/* palco proporcional — mais espaço para o telefone sobrepor */}
      <div className="relative w-full aspect-[6/5] max-w-[680px] mx-auto">

        {/* Dashboard — janela browser, ancorada à esquerda, maior e com leve rotação */}
        <div className="absolute left-0 top-0 w-full z-10 origin-center transition-transform duration-700 ease-out rotate-[-1deg] translate-x-[-6px] hover:rotate-0 hover:translate-x-0">
          <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 shadow-[0_40px_80px_-30px_rgba(30,27,18,0.35)]">
            {/* barra tipo browser */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200/70">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex-1 min-w-0">
                <div className="mx-auto max-w-[55%] h-5 rounded-md bg-white border border-slate-200 text-[10px] text-slate-400 flex items-center justify-center truncate px-2">
                  app.patioos.com.br/dashboard
                </div>
              </div>
            </div>
            <img
              src={dashAsset.url}
              alt="Dashboard Pátio OS"
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Phone — canto inferior direito, sobrepondo com leve rotação */}
        <div className="absolute right-[-2%] bottom-[-6%] w-[32%] sm:w-[30%] z-20 origin-bottom-right transition-transform duration-700 ease-out rotate-[2deg] hover:rotate-0">
          <Iphone16Pro
            width="100%"
            src={mobileAsset.url}
            className="w-full h-auto drop-shadow-[0_35px_60px_rgba(30,27,18,0.35)]"
            aria-label="App Pátio OS no celular"
          />
        </div>

        {/* Badge — 128 OS concluídas (canto superior direito, equilibrando o telefone) */}
        <div className="absolute right-[-4%] sm:right-[-6%] top-[2%] sm:top-[4%] z-30">
          <div className="bg-white rounded-2xl ring-1 ring-black/5 shadow-[0_20px_40px_-12px_rgba(30,27,18,0.25)] pl-2.5 pr-4 py-2 md:pl-3 md:pr-5 md:py-2.5 flex items-center gap-2.5">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 shadow-[0_8px_16px_-4px_rgba(16,185,129,0.5)]">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-lg md:text-2xl font-extrabold text-slate-900 tabular-nums">128</div>
              <div className="text-[9px] md:text-[11px] font-medium text-slate-500">OS concluídas</div>
            </div>
          </div>
        </div>

        {/* Badge — +18% este mês (lado esquerdo, centro) */}
        <div className="absolute left-[-4%] sm:left-[-6%] top-[40%] sm:top-[42%] z-30 hidden sm:block">
          <div className="bg-white rounded-2xl ring-1 ring-black/5 shadow-[0_20px_40px_-12px_rgba(30,27,18,0.25)] pl-3 pr-5 py-2.5 flex items-center gap-2.5">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center shrink-0 shadow-[0_8px_16px_-4px_rgba(251,191,36,0.55)]">
              <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-2xl font-extrabold text-slate-900 tabular-nums">+18%</div>
              <div className="text-[11px] font-medium text-slate-500">este mês</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

