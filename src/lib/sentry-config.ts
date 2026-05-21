export function isValidSentryDsn(dsn: string | undefined) {
  return Boolean(dsn && dsn.includes("@") && dsn.includes("sentry.io"));
}

export function sentryEnabled(dsn: string | undefined) {
  return process.env.NODE_ENV === "production" && isValidSentryDsn(dsn);
}
