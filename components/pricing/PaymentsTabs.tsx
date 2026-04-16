"use client";

import { useState, Fragment } from "react";
import { CreditCard, Globe } from "lucide-react";

/* ─── DATA (Card present = Tebi-identiek) ─────────────────────────────────── */

type Row = { name: string; brand: string; rates: string[] };

const cardPresent: Row[] = [
  { name: "Maestro",          brand: "maestro",    rates: ["€0,05", "Card fees *"] },
  { name: "VPay",             brand: "vpay",       rates: ["€0,05", "Card fees *"] },
  { name: "Mastercard Debit", brand: "mastercard", rates: ["€0,05", "0,25%", "Card fees *"] },
  { name: "Mastercard Credit",brand: "mastercard", rates: ["€0,05", "0,25%", "Card fees *"] },
  { name: "Visa Debit",       brand: "visa",       rates: ["€0,05", "0,25%", "Card fees *"] },
  { name: "Visa Credit",      brand: "visa",       rates: ["€0,05", "0,25%", "Card fees *"] },
  { name: "American Express", brand: "amex",       rates: ["€0,05", "2,20%"] },
];

const ecom: Row[] = [
  { name: "iDEAL",                brand: "ideal",      rates: ["€0,25"] },
  { name: "Maestro",              brand: "maestro",    rates: ["€0,10"] },
  { name: "Creditcard (consumer)",brand: "mastercard", rates: ["€0,05", "1,89%"] },
  { name: "Creditcard (zakelijk)",brand: "mastercard", rates: ["€0,05", "2,79%"] },
  { name: "American Express",     brand: "amex",       rates: ["€0,08", "3,10%"] },
  { name: "Bancontact",           brand: "bancontact", rates: ["€0,10", "0,30%"] },
];

/* ─── BRAND LOGOS ─────────────────────────────────────────────────────────── */

function BrandLogo({ brand }: { brand: string }) {
  const box = "w-12 h-8 shrink-0 rounded-lg flex items-center justify-center";

  switch (brand) {
    case "maestro":
      return (
        <svg viewBox="0 0 48 32" className="w-12 h-8 shrink-0">
          <rect width="48" height="32" rx="6" fill="#f7f7f7" stroke="#e5e7eb" />
          <circle cx="19" cy="16" r="8" fill="#ED0006" />
          <circle cx="29" cy="16" r="8" fill="#0099DF" />
          <path d="M24 9.5a8 8 0 0 1 0 13 8 8 0 0 1 0-13z" fill="#6C6BBD" />
        </svg>
      );
    case "mastercard":
      return (
        <svg viewBox="0 0 48 32" className="w-12 h-8 shrink-0">
          <rect width="48" height="32" rx="6" fill="#f7f7f7" stroke="#e5e7eb" />
          <circle cx="19" cy="16" r="8" fill="#ED0006" />
          <circle cx="29" cy="16" r="8" fill="#F9A000" />
          <path d="M24 9.5a8 8 0 0 1 0 13 8 8 0 0 1 0-13z" fill="#FF5E00" />
        </svg>
      );
    case "vpay":
      return (
        <div className={`${box} border border-[#e5e7eb] bg-[#1A1F71]`}>
          <span className="text-white text-[10px] font-bold tracking-wide">VPay</span>
        </div>
      );
    case "visa":
      return (
        <div className={`${box} border border-[#e5e7eb] bg-[#1A1F71]`}>
          <span className="text-white text-xs font-bold italic">VISA</span>
        </div>
      );
    case "amex":
      return (
        <div className={`${box} bg-[#006FCF]`}>
          <span className="text-white text-[5.5px] font-bold leading-tight text-center">
            AMERICAN<br />EXPRESS
          </span>
        </div>
      );
    case "ideal":
      return (
        <div className={`${box} border border-[#e5e7eb] bg-white`}>
          <span className="text-[#CC0066] text-[10px] font-bold">iDEAL</span>
        </div>
      );
    case "bancontact":
      return (
        <div className={`${box} bg-[#005498]`}>
          <span className="text-white text-[7px] font-bold">Bancontact</span>
        </div>
      );
    default:
      return <div className={`${box} border border-[#e5e7eb] bg-[#f9fafb]`} />;
  }
}

/* ─── COMPONENT ───────────────────────────────────────────────────────────── */

export default function PaymentsTabs() {
  const [active, setActive] = useState<"card" | "ecom">("card");
  const rows = active === "card" ? cardPresent : ecom;

  return (
    <div className="bg-[#F9FAFB] rounded-3xl p-7">
      {/* Toggle */}
      <div className="flex items-center gap-1 bg-[#E5E7EB] rounded-full p-1 w-fit mb-6">
        <button
          onClick={() => setActive("card")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
            active === "card"
              ? "bg-white text-[#111827] shadow-sm"
              : "text-[#6B7280] hover:text-[#111827]"
          }`}
        >
          <CreditCard size={15} />
          Card present
        </button>
        <button
          onClick={() => setActive("ecom")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
            active === "ecom"
              ? "bg-white text-[#111827] shadow-sm"
              : "text-[#6B7280] hover:text-[#111827]"
          }`}
        >
          <Globe size={15} />
          ECOM
        </button>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
        <span className="text-[#6B7280] text-sm font-medium">Betaalmethode</span>
        <span className="text-[#6B7280] text-sm font-medium">Tarief</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-[#E5E7EB]">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center justify-between py-4 gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <BrandLogo brand={r.brand} />
              <span className="font-semibold text-[#111827] text-sm sm:text-base">{r.name}</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap justify-end">
              {r.rates.map((part, i) => (
                <Fragment key={i}>
                  {i > 0 && <span className="text-[#6B7280] text-sm">+</span>}
                  <span className="inline-block border border-[#D1D5DB] rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-[#111827] whitespace-nowrap">
                    {part}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div className="mt-5 pt-4 border-t border-[#E5E7EB]">
        <div className="flex items-start gap-2">
          <span className="inline-block border border-[#D1D5DB] rounded-full px-2.5 py-0.5 text-xs font-medium text-[#111827] shrink-0">
            Card fees *
          </span>
          <p className="text-[#6B7280] text-xs leading-relaxed">
            Interchange (uitgevende bank) + scheme fee (Visa &amp; Mastercard).
            Tap to Pay tarieven per transactie: €0,06 voor iOS en €0,03 voor Android.
          </p>
        </div>
      </div>
    </div>
  );
}
