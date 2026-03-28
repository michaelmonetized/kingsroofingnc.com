import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature") || "";

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error("Webhook signature verification failed:", error);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  // Handle checkout.session.completed
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    console.log("✅ Quote request payment successful:", {
      sessionId: session.id,
      email: session.customer_email,
      metadata: session.metadata,
      amount: session.amount_total,
      paymentStatus: session.payment_status,
    });

    // TODO: Post to Notion CRM database with quote submission
    // TODO: Send confirmation email with next steps
    // For now, just log it
  }

  // Handle payment_intent.payment_failed
  if (event.type === "payment_intent.payment_failed") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;

    console.error("❌ Quote request payment failed:", {
      paymentIntentId: paymentIntent.id,
      error: paymentIntent.last_payment_error?.message,
      metadata: paymentIntent.metadata,
    });

    // TODO: Send failure email to customer
  }

  return NextResponse.json({ received: true });
}
