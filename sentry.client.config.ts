import * as Sentry from "@sentry/nextjs";
import { buildSentryOptions } from "./src/lib/sentry-options";

Sentry.init({
  ...buildSentryOptions(process.env.NEXT_PUBLIC_SENTRY_DSN),
  integrations: [Sentry.replayIntegration()],
  replaysSessionSampleRate: process.env.NODE_ENV === "production" ? 0.05 : 0,
  replaysOnErrorSampleRate: 1,
});
