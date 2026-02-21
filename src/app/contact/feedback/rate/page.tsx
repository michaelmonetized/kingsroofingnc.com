import type { Metadata } from "next";
import { RateWidget } from "./rate-widget";

export const metadata: Metadata = {
  title: "Rate | Kings Roofing, inc.",
  description: "Rate your experience with Kings Roofing. Your feedback is important to us.",
};

export default function RatePage() {
  return <RateWidget />;
}
