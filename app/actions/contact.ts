"use server";

import { Resend } from "resend";

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
  const telefoon = formData.get("telefoon") as string;
  const zaakType = formData.get("zaakType") as string;
  const dealer = formData.get("dealer") === "ja";
  const bericht = formData.get("bericht") as string;

  if (!voornaam || !email || !bericht) {
    return { success: false, error: "Vul alle verplichte velden in." };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Spont Website <noreply@spont.nl>",
      to: "info@spont.nl",
      replyTo: email,
      subject: `Contactformulier: ${voornaam} ${achternaam} — ${zaakType || "Niet opgegeven"}${dealer ? " [Dealer gewenst]" : ""}`,
      html: `
        <h2>Nieuw bericht via het contactformulier</h2>
        <p><strong>Naam:</strong> ${voornaam} ${achternaam}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${telefoon ? `<p><strong>Telefoon:</strong> ${telefoon}</p>` : ""}
        <p><strong>Type zaak:</strong> ${zaakType || "Niet opgegeven"}</p>
        <p><strong>Dealer gewenst:</strong> ${dealer ? "Ja" : "Nee"}</p>
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
