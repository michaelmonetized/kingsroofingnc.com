"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Escape HTML to prevent XSS in email templates
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitQuoteForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const area = formData.get("area") as string;

  if (!name || !email || !phone || !message) {
    return { success: false, error: "All fields are required" };
  }

  // Escape all user input before inserting into HTML
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message);
  const safeArea = escapeHtml(area || "Not specified");

  try {
    await resend.emails.send({
      from: "Kings Roofing <notify@uncap.us>",
      to: ["kingshaywood@gmail.com"],
      replyTo: email,
      subject: `New Quote Request from ${safeName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Service Area:</strong> ${safeArea}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send message" };
  }
}
