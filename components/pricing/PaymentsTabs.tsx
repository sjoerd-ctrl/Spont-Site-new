"use client";

import { useState } from "react";

const pos = [
  { method: "Debit / pin", rate: "€0,085 / tx" },
  { method: "Creditcard (consumer)", rate: "1,89%" },
  { method: "Creditcard (zakelijk)", rate: "2,79%" },
  { method: "American Express", rate: "€0,05 + 2,20%" },
  { method: "Bancontact", rate: "€0,06 + 0,30%" },
];

const ecom = [
  { method: "Maestro", rate: "€0,10 / tx" },
  { method: "iDEAL", rate: "€0,25 / tx" },
  { method: "Creditcard (consumer)", rate: "€0,05 + 1,89%" },
  { method: "Creditcard (zakelijk)", rate: "€0,05 + 2,79%" },
  { method: "American Express", rate: "€0,08 + 3,10%" },
  { method: "Bancontact", rate: "€0,10 + 0,30%" },
];

export default function PaymentsTabs() {
  const [active, setActive] = useState<"pos" | "ecom">("pos");
  const rows = active === "pos" ? pos : ecom;

  return (
    <div className="bg-[#F6F3EE] rounded-3xl p-7">
      {/* Toggle */}
      <div className="flex items-center gap-1 bg-[#EBE8E3] rounded-full p-1 w-fit mb-6">
        <button
          onClick={() => setActive("pos")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
            active === "pos"
              ? "bg-white text-[#1A1714] shadow-sm"
              : "text-[#5C5550] hover:text-[#1A1714]"
          }`}
        >
          Kassa (POS)
        </button>
        <button
          onClick={() => setActive("ecom")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
            active === "ecom"
              ? "bg-white text-[#1A1714] shadow-sm"
              : "text-[#5C5550] hover:text-[#1A1714]"
          }`}
        >
          Online bestellen (ECOM)
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#EBE8E3]">
            <th className="text-left text-[#5C5550] font-medium pb-3 pr-4">Betaalmethode</th>
            <th className="text-right text-[#5C5550] font-medium pb-3">Tarief</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#EBE8E3]">
          {rows.map((r) => (
            <tr key={r.method}>
              <td className="py-3 pr-4 text-[#1A1714]">{r.method}</td>
              <td className="py-3 text-right font-semibold text-[#1A1714]">{r.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
