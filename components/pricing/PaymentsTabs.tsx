"use client";

import { useState } from "react";

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
              <td className="py-3 pr-4 text-[#111827]">{r.method}</td>
              <td className="py-3 text-right font-semibold text-[#111827]">{r.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {active === "pos" && (
        <p className="text-[#6B7280] text-xs mt-4">
          * Cardfees worden bepaald door het kaartnetwerk en variëren per transactie.
        </p>
      )}
    </div>
  );
}
