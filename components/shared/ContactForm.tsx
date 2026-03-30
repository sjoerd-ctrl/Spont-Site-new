"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContactForm, null);

  if (state?.success) {
    return (
      <div className="bg-[#2D4B3F] rounded-3xl p-10 text-center">
        <h3 className="font-serif text-2xl font-semibold text-white mb-3">
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
          <label className="block text-sm font-medium text-[#1A1714] mb-2">
            Voornaam *
          </label>
          <input
            type="text"
            name="voornaam"
            required
            className="w-full bg-white rounded-2xl px-5 py-3.5 text-[#1A1714] text-sm outline-none focus:ring-2 focus:ring-[#CC5533] placeholder-[#5C5550]/50"
            placeholder="Jan"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1A1714] mb-2">
            Achternaam
          </label>
          <input
            type="text"
            name="achternaam"
            className="w-full bg-white rounded-2xl px-5 py-3.5 text-[#1A1714] text-sm outline-none focus:ring-2 focus:ring-[#CC5533] placeholder-[#5C5550]/50"
            placeholder="Jansen"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1A1714] mb-2">
          E-mailadres *
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full bg-white rounded-2xl px-5 py-3.5 text-[#1A1714] text-sm outline-none focus:ring-2 focus:ring-[#CC5533] placeholder-[#5C5550]/50"
          placeholder="jan@mijnzaak.nl"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1A1714] mb-2">
          Type zaak
        </label>
        <select
          name="zaakType"
          className="w-full bg-white rounded-2xl px-5 py-3.5 text-[#1A1714] text-sm outline-none focus:ring-2 focus:ring-[#CC5533]"
        >
          <option value="">Selecteer...</option>
          <option>Restaurant</option>
          <option>Café</option>
          <option>Koffiezaak</option>
          <option>Lunchroom</option>
          <option>Fastcasual / afhaal</option>
          <option>Bakkerij</option>
          <option>Discotheek / club</option>
          <option>Hotel</option>
          <option>Anders</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1A1714] mb-2">
          Bericht *
        </label>
        <textarea
          name="bericht"
          rows={5}
          required
          className="w-full bg-white rounded-2xl px-5 py-3.5 text-[#1A1714] text-sm outline-none focus:ring-2 focus:ring-[#CC5533] placeholder-[#5C5550]/50 resize-none"
          placeholder="Vertel ons over jouw zaak en wat je nodig hebt..."
        />
      </div>

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
