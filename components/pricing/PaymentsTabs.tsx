"use client";

import { useState } from "react";

const logos: Record<string, string> = {
  Maestro: "/images/payments/maestro.svg",
  vPay: "/images/payments/vpay.svg",
  "Mastercard Debit": "/images/payments/mastercard.svg",
  "VISA Debit": "/images/payments/visa.svg",
  Bancontact: "/images/payments/bancontact.png",
  "Creditcard (consumer)": "/images/payments/mastercard.svg",
  "Creditcard (zakelijk)": "/images/payments/mastercard.svg",
  "American Express": "/images/payments/amex.svg",
  iDEAL: "/images/payments/maestro.svg",
};

const pos = [
  { method: "Maestro", rate: "€0,085" },
  { method: "vPay", rate: "€0,085" },
  { method: "Mastercard Debit", rate: "€0,05 + 0,25% + Cardfees*" },
  { method: "VISA Debit", rate: "€0,05 + 0,25% + Cardfees*" },
  { method: "Bancontact", rate: "€0,06 + 0,30%" },
  { method: "Creditcard (consumer)", rate: "1,89%" },
  { method: "Creditcard (zakelijk)", rate: "2,79%" },
  { method: "American Express", rate: "€0,05 + 2,20%" },
];

const ecom = [
  { method: "Maestro", rate: "€0,10" },
  { method: "iDEAL", rate: "€0,25" },
  { method: "Creditcard (consumer)", rate: "€0,05 + 1,89%" },
  { method: "Creditcard (zakelijk)", rate: "€0,05 + 2,79%" },
  { method: "American Express", rate: "€0,08 + 3,10%" },
  { method: "Bancontact", rate: "€0,10 + 0,30%" },
];

export default function PaymentsTabs() {
  const [active, setActive] = useState<"pos" | "ecom">("pos");
  const rows = active === "pos" ? pos : ecom;

  return (
    <div className="bg-[#F9FAFB] rounded-3xl p-7">
      {/* Toggle */}
      <div className="flex items-center gap-1 bg-[#E5E7EB] rounded-full p-1 w-fit mb-6">
        <button
          onClick={() => setActive("pos")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
            active === "pos"
              ? "bg-white text-[#111827] shadow-sm"
              : "text-[#6B7280] hover:text-[#111827]"
          }`}
        >
          Kassa (POS)
        </button>
        <button
          onClick={() => setActive("ecom")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
            active === "ecom"
              ? "bg-white text-[#111827] shadow-sm"
              : "text-[#6B7280] hover:text-[#111827]"
          }`}
        >
          Online bestellen (ECOM)
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#E5E7EB]">
            <th className="text-left text-[#6B7280] font-medium pb-3 pr-4">Betaalmethode</th>
            <th className="text-right text-[#6B7280] font-medium pb-3">Tarief</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E5E7EB]">
          {rows.map((r) => (
            <tr key={r.method}>
              <td className="py-3 pr-4 text-[#111827]">
                <span className="flex items-center gap-3">
                  {logos[r.method] && (
                    <img
                      src={logos[r.method]}
                      alt={r.method}
                      className="h-6 w-9 object-contain rounded"
                    />
                  )}
                  {r.method}
                </span>
              </td>
              <td className="py-3 text-right font-semibold text-[#111827]">{r.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Kaartkosten uitleg */}
      <div className="mt-6 bg-[#EBE8E3] rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <span className="shrink-0 text-xs font-semibold text-[#111827] border border-[#111827] rounded-full px-3 py-1.5 self-start">
            Kaartkosten*
          </span>
          <div className="text-sm text-[#3D3A36] leading-relaxed">
            <p>
              Interchange (uitvoerende bank) + scheme fee (Visa &amp; Mastercard)
              <br />
              Voor meer informatie over kaartkosten, zie{" "}
              <a href="https://www.mastercard.nl/nl-nl/vision/wie-zijn-wij/interchange.html" target="_blank" rel="noopener noreferrer" className="underline">
                deze uitleg
              </a>.
            </p>
            <p className="mt-3">
              Tap to Pay-transactiekosten: €0,06 per transactie op iOS en €0,03 per transactie op Android.
              <br />
              Voor meer informatie over Tap to Pay, bezoek{" "}
              <a href="/features" className="underline">
                Tap to Pay
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
