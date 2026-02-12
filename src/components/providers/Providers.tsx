"use client";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Client-side providers wrapper
 * 
 * Add providers here as needed:
 * - PostHog analytics
 * - Theme provider
 * - Toast notifications
 * - etc.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
    </>
  );
}
