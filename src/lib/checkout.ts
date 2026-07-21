// Destino do checkout, por plano e intervalo.
//
// Antes daqui saíam links `bill_` diretos da AbacatePay. O problema: cada link
// daquele é UMA assinatura. Quando o primeiro visitante paga, ele vira a
// assinatura daquela pessoa e quem clicar depois cai num link morto. Os links
// antigos também apontavam pros produtos de trial de 7 dias, já substituídos.
//
// Agora aponta pra página de assinatura no nosso domínio, que gera um pagamento
// novo a cada visitante. De quebra:
//   - captura o lead antes do cartão (quem desiste no pagamento a gente já tem)
//   - leva o nome da oficina, senão a conta nasce como "Minha Oficina"
//   - registra o aceite dos Termos com IP e data na nossa base
//   - o trial de 14 dias vem do produto configurado no backend, não daqui

const BASE = "https://admin.patioos.com.br/assinar";

const SLUG: Record<string, string> = {
  START: "start",
  PRO: "pro",
  MAX: "max",
};

export const PAYMENT_LINKS: Record<string, { month: string; year: string }> = Object.fromEntries(
  Object.entries(SLUG).map(([plano, slug]) => [
    plano,
    {
      month: `${BASE}?plano=${slug}&ciclo=mensal`,
      year: `${BASE}?plano=${slug}&ciclo=anual`,
    },
  ]),
);
