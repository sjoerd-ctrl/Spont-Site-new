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

function Toggle({
  label,
  sublabel,
  value,
  onChange,
}: {
  label: string;
  sublabel?: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between bg-white border border-[#E5E7EB] rounded-xl px-4 py-3">
      <div>
        <p className="text-sm font-medium text-[#111827]">{label}</p>
        {sublabel && <p className="text-xs text-[#6B7280]">{sublabel}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ml-4 ${
          value ? "bg-[#111827]" : "bg-[#E5E7EB]"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
            value ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

const LS_INCLUDED: Record<"Basic" | "Core" | "Pro", number> = {
  Basic: 1,
  Core: 2,
  Pro: 3,
};
const LS_PLAN_PRICE: Record<"Basic" | "Core" | "Pro", number> = {
  Basic: 89,
  Core: 159,
  Pro: 249,
};

export default function KostenCalculator({ model, concurrentNaam }: Props) {
  const [omzet, setOmzet] = useState(30000);
  const [transacties, setTransacties] = useState(2500);
  const [pctDebit, setPctDebit] = useState(85);
  const [pctCredit, setPctCredit] = useState(15);
  const [lsPlan, setLsPlan] = useState<"Basic" | "Core" | "Pro">("Core");
  const [aantalDevices, setAantalDevices] = useState(2);
  const [heeftQR, setHeeftQR] = useState(false);
  const [heeftKiosk, setHeeftKiosk] = useState(false);
  const [heeftOnline, setHeeftOnline] = useState(false);

  const debitFrac = pctDebit / 100;
  const creditFrac = pctCredit / 100;

  // ─── Spont — alles inbegrepen ──────────────────────────────────────────────
  const spontSoftware = 59;
  const spontDebit = transacties * debitFrac * 0.085;
  const spontCredit = omzet * creditFrac * 0.0189;
  const spontTotaal = spontSoftware + spontDebit + spontCredit;

  // ─── Lightspeed ────────────────────────────────────────────────────────────
  let concSoftware = 0;
  let concDebit = 0;
  let concCredit = 0;
  let concExtraDevices = 0;
  let concQR = 0;
  let concKiosk = 0;
  let concOnline = 0;

  if (model === "lightspeed") {
    concSoftware = LS_PLAN_PRICE[lsPlan];
    const extraDevices = Math.max(0, aantalDevices - LS_INCLUDED[lsPlan]);
    concExtraDevices = extraDevices * 49;
    concQR = heeftQR ? 49 : 0;
    concKiosk = heeftKiosk ? 49 : 0;
    concOnline = 0; // Lightspeed includes online ordering in paid plans
    concDebit = omzet * debitFrac * 0.014;
    concCredit = omzet * creditFrac * 0.028;
  } else {
    // Tebi
    concSoftware = Math.max(0, Math.ceil((omzet - 10000) / 10000)) * 20;
    concDebit = transacties * debitFrac * 0.05 + omzet * debitFrac * 0.002;
    concCredit = transacties * creditFrac * 0.05 + omzet * creditFrac * (0.0025 + 0.003);
  }

  const concTotaal = concSoftware + concExtraDevices + concQR + concKiosk + concOnline + concDebit + concCredit;
  const besparing = concTotaal - spontTotaal;
  const besparingPct = concTotaal > 0 ? (besparing / concTotaal) * 100 : 0;
  const spontWint = besparing > 0;

  const isLS = model === "lightspeed";

  return (
    <div className="bg-[#F9FAFB] rounded-3xl p-8 md:p-10">
      <h3 className="font-sans text-xl font-semibold text-[#111827] mb-2">
        Reken het zelf uit
      </h3>
      <p className="text-[#6B7280] text-sm mb-8">
        Vul je situatie in en zie wat je per maand betaalt bij {concurrentNaam} versus Spont.
      </p>

      {/* ─── Basis inputs ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Omzet per maand</span>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-sm">€</span>
            <input
              type="number" min={0} step={1000} value={omzet}
              onChange={(e) => setOmzet(Number(e.target.value))}
              className="w-full bg-white border border-[#E5E7EB] rounded-xl pl-8 pr-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#CC5533]/30"
            />
          </div>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Transacties per maand</span>
          <input
            type="number" min={0} step={100} value={transacties}
            onChange={(e) => setTransacties(Number(e.target.value))}
            className="w-full bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#CC5533]/30"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">% Debitbetalingen (PIN)</span>
          <div className="relative">
            <input
              type="number" min={0} max={100} value={pctDebit}
              onChange={(e) => { const v = Math.min(100, Number(e.target.value)); setPctDebit(v); setPctCredit(100 - v); }}
              className="w-full bg-white border border-[#E5E7EB] rounded-xl px-4 pr-8 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#CC5533]/30"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-sm">%</span>
          </div>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">% Creditbetalingen</span>
          <div className="relative">
            <input
              type="number" min={0} max={100} value={pctCredit}
              onChange={(e) => { const v = Math.min(100, Number(e.target.value)); setPctCredit(v); setPctDebit(100 - v); }}
              className="w-full bg-white border border-[#E5E7EB] rounded-xl px-4 pr-8 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#CC5533]/30"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-sm">%</span>
          </div>
        </label>

        {/* Lightspeed plan keuze */}
        {isLS && (
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Lightspeed plan</span>
            <div className="flex gap-3">
              {(["Basic", "Core", "Pro"] as const).map((p) => (
                <button
                  key={p} onClick={() => setLsPlan(p)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                    lsPlan === p
                      ? "bg-[#111827] text-white border-[#111827]"
                      : "bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#111827]"
                  }`}
                >
                  {p} — €{LS_PLAN_PRICE[p]}
                  <span className="block text-[10px] font-normal opacity-60">{LS_INCLUDED[p]} licentie{LS_INCLUDED[p] > 1 ? "s" : ""} incl.</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Verkooppunten */}
        {isLS && (
          <label className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
              Aantal verkooppunten / devices
              <span className="ml-2 normal-case font-normal text-[#CC5533]">
                {aantalDevices > LS_INCLUDED[lsPlan]
                  ? `+${aantalDevices - LS_INCLUDED[lsPlan]} extra × €49 = €${(aantalDevices - LS_INCLUDED[lsPlan]) * 49}/mnd bij ${concurrentNaam}`
                  : `${LS_INCLUDED[lsPlan] - aantalDevices + (aantalDevices <= LS_INCLUDED[lsPlan] ? 0 : 0)} inbegrepen in plan`}
              </span>
            </span>
            <div className="flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3">
              <button
                type="button"
                onClick={() => setAantalDevices(Math.max(1, aantalDevices - 1))}
                className="w-8 h-8 rounded-full bg-[#F9FAFB] flex items-center justify-center text-lg font-semibold text-[#111827] hover:bg-[#E5E7EB] transition-colors"
              >−</button>
              <span className="flex-1 text-center text-lg font-semibold text-[#111827]">{aantalDevices}</span>
              <button
                type="button"
                onClick={() => setAantalDevices(aantalDevices + 1)}
                className="w-8 h-8 rounded-full bg-[#F9FAFB] flex items-center justify-center text-lg font-semibold text-[#111827] hover:bg-[#E5E7EB] transition-colors"
              >+</button>
            </div>
          </label>
        )}
      </div>

      {/* ─── Modules / opties ─── */}
      {isLS && (
        <div className="mb-8">
          <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-3">
            Welke modules gebruik je?
            <span className="ml-2 normal-case font-normal text-[#111827]">Inbegrepen bij Spont — extra kosten bij {concurrentNaam}</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Toggle
              label="QR-bestellen"
              sublabel={heeftQR ? `+€49/mnd bij ${concurrentNaam}` : "Niet actief"}
              value={heeftQR}
              onChange={setHeeftQR}
            />
            <Toggle
              label="Kiosken"
              sublabel={heeftKiosk ? `+€49/mnd bij ${concurrentNaam}` : "Niet actief"}
              value={heeftKiosk}
              onChange={setHeeftKiosk}
            />
            <Toggle
              label="Online bestellen"
              sublabel="Inbegrepen bij beide"
              value={heeftOnline}
              onChange={setHeeftOnline}
            />
          </div>
        </div>
      )}

      {/* ─── Resultaten tabel ─── */}
      <div className="rounded-2xl overflow-hidden border border-[#E5E7EB]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#111827] text-white">
              <th className="text-left px-5 py-3 font-medium text-white/60 w-2/5">Kostenpost</th>
              <th className="text-right px-5 py-3 font-semibold">Spont</th>
              <th className="text-right px-5 py-3 font-medium text-white/80">{concurrentNaam}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-5 py-3 text-[#6B7280]">Software / abonnement</td>
              <td className="px-5 py-3 text-right text-[#111827] font-medium">{fmt(spontSoftware)}</td>
              <td className="px-5 py-3 text-right text-[#6B7280]">{fmt(concSoftware)}</td>
            </tr>
            {isLS && concExtraDevices > 0 && (
              <tr className="bg-[#FFFFFF]">
                <td className="px-5 py-3 text-[#6B7280]">Extra verkooppunten ({aantalDevices - LS_INCLUDED[lsPlan]} × €49)</td>
                <td className="px-5 py-3 text-right text-[#111827] font-medium">Inbegrepen</td>
                <td className="px-5 py-3 text-right text-[#6B7280]">{fmt(concExtraDevices)}</td>
              </tr>
            )}
            {isLS && heeftQR && (
              <tr className="bg-white">
                <td className="px-5 py-3 text-[#6B7280]">QR-bestellen</td>
                <td className="px-5 py-3 text-right text-[#111827] font-medium">Inbegrepen</td>
                <td className="px-5 py-3 text-right text-[#6B7280]">{fmt(concQR)}</td>
              </tr>
            )}
            {isLS && heeftKiosk && (
              <tr className={heeftQR ? "bg-[#FFFFFF]" : "bg-white"}>
                <td className="px-5 py-3 text-[#6B7280]">Kiosken</td>
                <td className="px-5 py-3 text-right text-[#111827] font-medium">Inbegrepen</td>
                <td className="px-5 py-3 text-right text-[#6B7280]">{fmt(concKiosk)}</td>
              </tr>
            )}
            <tr className="bg-[#FFFFFF]">
              <td className="px-5 py-3 text-[#6B7280]">Debetbetalingen</td>
              <td className="px-5 py-3 text-right text-[#111827] font-medium">{fmt(spontDebit)}</td>
              <td className="px-5 py-3 text-right text-[#6B7280]">{fmt(concDebit)}</td>
            </tr>
            <tr className="bg-white">
              <td className="px-5 py-3 text-[#6B7280]">Creditbetalingen</td>
              <td className="px-5 py-3 text-right text-[#111827] font-medium">{fmt(spontCredit)}</td>
              <td className="px-5 py-3 text-right text-[#6B7280]">{fmt(concCredit)}</td>
            </tr>
            <tr className="bg-[#111827]">
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
          spontWint ? "bg-[#111827]/10" : "bg-[#F9FAFB]"
        }`}
      >
        <p className="text-sm text-[#6B7280]">
          {spontWint ? (
            <>
              Met deze instellingen bespaar je{" "}
              <strong className="text-[#111827]">{fmt(besparing)} per maand</strong> met Spont.
            </>
          ) : (
            <>
              Met deze instellingen is {concurrentNaam}{" "}
              <strong className="text-[#111827]">{fmt(-besparing)} per maand</strong> goedkoper.
              {model === "tebi" && omzet < 30000 && (
                <span className="text-[#6B7280]">
                  {" "}Bij hogere omzet of meer creditbetalingen wint Spont.
                </span>
              )}
            </>
          )}
        </p>
        {spontWint && (
          <span className="shrink-0 bg-[#111827] text-white text-sm font-bold px-4 py-1.5 rounded-full">
            {Math.round(besparingPct)}% goedkoper
          </span>
        )}
      </div>
    </div>
  );
}
