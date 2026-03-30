"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const voornaam = formData.get("voornaam") as string;
  const achternaam = formData.get("achternaam") as string;
  const email = formData.get("email") as string;
  const zaakType = formData.get("zaakType") as string;
  const bericht = formData.get("bericht") as string;

  if (!voornaam || !email || !bericht) {
    return { success: false, error: "Vul alle verplichte velden in." };
  }

  try {
    await resend.emails.send({
      from: "Spont Website <noreply@spont.nl>",
      to: "info@spont.nl",
      replyTo: email,
      subject: `Contactformulier: ${voornaam} ${achternaam} — ${zaakType || "Niet opgegeven"}`,
      html: `
        <h2>Nieuw bericht via het contactformulier</h2>
        <p><strong>Naam:</strong> ${voornaam} ${achternaam}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Type zaak:</strong> ${zaakType || "Niet opgegeven"}</p>
        <hr />
        <p>${bericht.replace(/\n/g, "<br />")}</p>
      `,
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Er ging iets mis bij het versturen. Probeer het later opnieuw.",
    };
  }
}
