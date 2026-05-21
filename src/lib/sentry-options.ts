import { isValidSentryDsn, sentryEnabled } from "./sentry-config";

export function buildSentryOptions(dsn: string | undefined) {
  const hasValidDsn = isValidSentryDsn(dsn);

  return {
    dsn: hasValidDsn ? dsn : undefined,
    enabled: sentryEnabled(dsn),
    environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
    release: process.env.VERCEL_GIT_COMMIT_SHA,
    tracesSampleRate: hasValidDsn ? 0.1 : 0,
  };
}
