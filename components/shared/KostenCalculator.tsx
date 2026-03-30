"use client";

import { useState } from "react";

type Model = "lightspeed" | "tebi";

interface Props {
  model: Model;
  concurrentNaam: string;
}

function fmt(n: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export default function KostenCalculator({ model, concurrentNaam }: Props) {
  const [omzet, setOmzet] = useState(30000);
  const [transacties, setTransacties] = useState(2500);
  const [pctDebit, setPctDebit] = useState(85);
  const [pctCredit, setPctCredit] = useState(15);
  const [lsPlan, setLsPlan] = useState<"Basic" | "Core" | "Pro">("Core");

  const debitFrac = pctDebit / 100;
  const creditFrac = pctCredit / 100;

  // ─── Spont ───────────────────────────────────────────────────────────────────
  const spontSoftware = 59;
  const spontDebit = transacties * debitFrac * 0.085;
  const spontCredit = omzet * creditFrac * 0.0189;
  const spontTotaal = spontSoftware + spontDebit + spontCredit;

  // ─── Concurrent ──────────────────────────────────────────────────────────────
  let concSoftware = 0;
  let concDebit = 0;
  let concCredit = 0;

  if (model === "lightspeed") {
    const planPrijs = { Basic: 89, Core: 159, Pro: 249 }[lsPlan];
    concSoftware = planPrijs;
    concDebit = omzet * debitFrac * 0.014;
    concCredit = omzet * creditFrac * 0.028;
  } else {
    // Tebi
    concSoftware = Math.max(0, Math.ceil((omzet - 10000) / 10000)) * 20;
    concDebit = transacties * debitFrac * 0.05 + omzet * debitFrac * 0.002;
    concCredit = transacties * creditFrac * 0.05 + omzet * creditFrac * (0.0025 + 0.003);
  }

  const concTotaal = concSoftware + concDebit + concCredit;
  const besparing = concTotaal - spontTotaal;
  const besparingPct = concTotaal > 0 ? (besparing / concTotaal) * 100 : 0;

  const spontWint = besparing > 0;

  return (
    <div className="bg-[#F6F3EE] rounded-3xl p-8 md:p-10">
      <h3 className="font-serif text-xl font-semibold text-[#1A1714] mb-2">
        Reken het zelf uit
      </h3>
      <p className="text-[#5C5550] text-sm mb-8">
        Vul je situatie in en zie wat je per maand betaalt bij {concurrentNaam} versus Spont.
      </p>

      {/* ─── Inputs ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-[#5C5550] uppercase tracking-wider">
            Omzet per maand
          </span>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5C5550] text-sm">€</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={omzet}
              onChange={(e) => setOmzet(Number(e.target.value))}
              className="w-full bg-white border border-[#EBE8E3] rounded-xl pl-8 pr-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:ring-2 focus:ring-[#CC5533]/30"
            />
          </div>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-[#5C5550] uppercase tracking-wider">
            Transacties per maand
          </span>
          <input
            type="number"
            min={0}
            step={100}
            value={transacties}
            onChange={(e) => setTransacties(Number(e.target.value))}
            className="w-full bg-white border border-[#EBE8E3] rounded-xl px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:ring-2 focus:ring-[#CC5533]/30"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-[#5C5550] uppercase tracking-wider">
            % Debitbetalingen (PIN)
          </span>
          <div className="relative">
            <input
              type="number"
              min={0}
              max={100}
              value={pctDebit}
              onChange={(e) => {
                const v = Math.min(100, Number(e.target.value));
                setPctDebit(v);
                setPctCredit(100 - v);
              }}
              className="w-full bg-white border border-[#EBE8E3] rounded-xl px-4 pr-8 py-3 text-sm text-[#1A1714] focus:outline-none focus:ring-2 focus:ring-[#CC5533]/30"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C5550] text-sm">%</span>
          </div>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-[#5C5550] uppercase tracking-wider">
            % Creditbetalingen
          </span>
          <div className="relative">
            <input
              type="number"
              min={0}
              max={100}
              value={pctCredit}
              onChange={(e) => {
                const v = Math.min(100, Number(e.target.value));
                setPctCredit(v);
                setPctDebit(100 - v);
              }}
              className="w-full bg-white border border-[#EBE8E3] rounded-xl px-4 pr-8 py-3 text-sm text-[#1A1714] focus:outline-none focus:ring-2 focus:ring-[#CC5533]/30"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C5550] text-sm">%</span>
          </div>
        </label>

        {model === "lightspeed" && (
          <label className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="text-xs font-semibold text-[#5C5550] uppercase tracking-wider">
              Lightspeed plan
            </span>
            <div className="flex gap-3">
              {(["Basic", "Core", "Pro"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setLsPlan(p)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                    lsPlan === p
                      ? "bg-[#1A1714] text-white border-[#1A1714]"
                      : "bg-white text-[#5C5550] border-[#EBE8E3] hover:border-[#1A1714]"
                  }`}
                >
                  {p} — €{p === "Basic" ? 89 : p === "Core" ? 159 : 249}
                </button>
              ))}
            </div>
          </label>
        )}
      </div>

      {/* ─── Resultaten ─── */}
      <div className="rounded-2xl overflow-hidden border border-[#EBE8E3]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#1A1714] text-white">
              <th className="text-left px-5 py-3 font-medium text-white/60 w-2/5">Kostenpost</th>
              <th className="text-right px-5 py-3 font-semibold">Spont</th>
              <th className="text-right px-5 py-3 font-medium text-white/80">{concurrentNaam}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-5 py-3 text-[#5C5550]">Software / abonnement</td>
              <td className="px-5 py-3 text-right text-[#1A1714] font-medium">{fmt(spontSoftware)}</td>
              <td className="px-5 py-3 text-right text-[#5C5550]">{fmt(concSoftware)}</td>
            </tr>
            <tr className="bg-[#FCF9F4]">
              <td className="px-5 py-3 text-[#5C5550]">Debetbetalingen</td>
              <td className="px-5 py-3 text-right text-[#1A1714] font-medium">{fmt(spontDebit)}</td>
              <td className="px-5 py-3 text-right text-[#5C5550]">{fmt(concDebit)}</td>
            </tr>
            <tr className="bg-white">
              <td className="px-5 py-3 text-[#5C5550]">Creditbetalingen</td>
              <td className="px-5 py-3 text-right text-[#1A1714] font-medium">{fmt(spontCredit)}</td>
              <td className="px-5 py-3 text-right text-[#5C5550]">{fmt(concCredit)}</td>
            </tr>
            <tr className="bg-[#1A1714]">
              <td className="px-5 py-4 text-white font-semibold">Totaal per maand</td>
              <td className="px-5 py-4 text-right text-white font-bold text-base">{fmt(spontTotaal)}</td>
              <td className="px-5 py-4 text-right text-white/80 font-semibold">{fmt(concTotaal)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ─── Conclusie ─── */}
      <div
        className={`mt-5 rounded-2xl px-6 py-4 flex items-center justify-between gap-4 ${
          spontWint ? "bg-[#2D4B3F]/10" : "bg-[#F6F3EE]"
        }`}
      >
        <p className="text-sm text-[#5C5550]">
          {spontWint ? (
            <>
              Met deze instellingen bespaar je{" "}
              <strong className="text-[#2D4B3F]">{fmt(besparing)} per maand</strong> met Spont.
            </>
          ) : (
            <>
              Met deze instellingen is {concurrentNaam}{" "}
              <strong className="text-[#1A1714]">{fmt(-besparing)} per maand</strong> goedkoper.
              {model === "tebi" && omzet < 30000 && (
                <span className="text-[#5C5550]">
                  {" "}Bij hogere omzet of meer creditbetalingen wint Spont.
                </span>
              )}
            </>
          )}
        </p>
        {spontWint && (
          <span className="shrink-0 bg-[#2D4B3F] text-white text-sm font-bold px-4 py-1.5 rounded-full">
            {Math.round(besparingPct)}% goedkoper
          </span>
        )}
      </div>
    </div>
  );
}
