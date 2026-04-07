"use client";

import { useActionState, useState, useRef, useEffect } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { ChevronDown } from "lucide-react";

const zaakOptions = [
  "Restaurant",
  "Café",
  "Koffiezaak",
  "Lunchroom",
  "Fastcasual / afhaal",
  "Bakkerij",
  "Discotheek / club",
  "Hotel",
  "Anders",
];

const inputClass =
  "w-full bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#111827] text-sm outline-none focus:ring-2 focus:ring-[#CC5533] focus:border-[#CC5533] placeholder-[#6B7280]/50 transition-colors";

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContactForm, null);
  const [zaakOpen, setZaakOpen] = useState(false);
  const [zaakValue, setZaakValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setZaakOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (state?.success) {
    return (
      <div className="bg-[#111827] rounded-3xl p-10 text-center">
        <h3 className="font-sans text-2xl font-semibold text-white mb-3">
          Bericht verstuurd!
        </h3>
        <p className="text-white/70 text-sm">
          Bedankt voor je bericht. We reageren binnen één werkdag.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" action={action}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-2">
            Voornaam *
          </label>
          <input
            type="text"
            name="voornaam"
            required
            className={inputClass}
            placeholder="Jan"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-2">
            Achternaam
          </label>
          <input
            type="text"
            name="achternaam"
            className={inputClass}
            placeholder="Jansen"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#111827] mb-2">
          E-mailadres *
        </label>
        <input
          type="email"
          name="email"
          required
          className={inputClass}
          placeholder="jan@mijnzaak.nl"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#111827] mb-2">
          Telefoonnummer
        </label>
        <input
          type="tel"
          name="telefoon"
          className={inputClass}
          placeholder="06 12345678"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#111827] mb-2">
          Type zaak
        </label>
        {/* Hidden native input for form submission */}
        <input type="hidden" name="zaakType" value={zaakValue} />
        {/* Custom dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setZaakOpen(!zaakOpen)}
            className={`${inputClass} flex items-center justify-between text-left ${
              zaakValue ? "text-[#111827]" : "text-[#6B7280]/50"
            }`}
          >
            <span>{zaakValue || "Selecteer..."}</span>
            <ChevronDown
              className={`w-4 h-4 text-[#6B7280] transition-transform ${zaakOpen ? "rotate-180" : ""}`}
            />
          </button>
          {zaakOpen && (
            <div className="absolute z-20 mt-1 w-full bg-white border border-[#E5E7EB] rounded-xl shadow-lg py-1 max-h-60 overflow-y-auto">
              {zaakOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setZaakValue(opt);
                    setZaakOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#F3F4F6] transition-colors ${
                    zaakValue === opt
                      ? "text-[#CC5533] font-medium bg-[#F3F4F6]"
                      : "text-[#111827]"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#111827] mb-2">
          Bericht *
        </label>
        <textarea
          name="bericht"
          rows={5}
          required
          className={`${inputClass} resize-none`}
          placeholder="Vertel ons over jouw zaak en wat je nodig hebt..."
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="dealer"
          value="ja"
          className="mt-0.5 w-5 h-5 rounded border-[#E5E7EB] text-[#CC5533] focus:ring-[#CC5533] accent-[#CC5533]"
        />
        <span className="text-sm text-[#111827]">
          Ik wil graag een Spont Dealer als vast contactpersoon
        </span>
      </label>

      {state?.error && (
        <p className="text-red-600 text-sm">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#CC5533] hover:bg-[#A33818] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-full transition-colors text-sm"
      >
        {pending ? "Versturen..." : "Verstuur bericht"}
      </button>
    </form>
  );
}
