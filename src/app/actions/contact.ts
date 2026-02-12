"use server";

import { Resend } from "resend";
import { COMPANY } from "@/lib/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactState {
  success?: boolean;
  error?: string;
}

export async function submitContact(
  _prevState: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const area = formData.get("area") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  // Basic validation
  if (!name || !email || !phone || !message) {
    return { error: "Please fill in all required fields." };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "Kings Roofing <notify@uncap.us>",
      to: [COMPANY.email],
      replyTo: email,
      subject: `New Quote Request from ${name}${area ? ` - ${area}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #102a43; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Quote Request</h1>
            <p style="margin: 10px 0 0; opacity: 0.8;">Kings Roofing, Inc.</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #102a43; margin-top: 0;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              ${area ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Area:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${area}</td>
              </tr>
              ` : ""}
              ${service ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Service:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${service}</td>
              </tr>
              ` : ""}
            </table>
            
            <h3 style="color: #102a43; margin-top: 30px;">Message</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="background: #f97316; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">
              Reply directly to this email to respond to the customer.
            </p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send message. Please call us directly." };
  }
}
