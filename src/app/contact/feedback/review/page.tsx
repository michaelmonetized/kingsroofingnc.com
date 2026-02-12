import type { Metadata } from "next";
import { Layout } from "@/components/layout";

export const metadata: Metadata = {
  title: "Review | Kings Roofing, inc.",
  description: "Leave a review for Kings Roofing on Google, Yelp, or Angi. We appreciate your feedback!",
};

const REVIEW_PLATFORMS = [
  {
    name: "Google",
    url: "https://g.page/r/CQcYBEB-aErZEBM/review",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "Yelp",
    url: "https://www.yelp.com/writeareview/biz/vgRfBz6kiRm4B2_lAfoGMQ?return_url=%2Fbiz%2FvgRfBz6kiRm4B2_lAfoGMQ&review_origin=biz-details-war-button",
    color: "bg-red-500 hover:bg-red-600",
  },
  {
    name: "Angi",
    url: "https://www.angi.com/write-review/16964783",
    color: "bg-green-500 hover:bg-green-600",
  },
];

export default function ReviewPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose a platform to review us on…
          </h1>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto space-y-4">
            {REVIEW_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center text-white font-bold py-4 px-8 rounded-lg transition-colors ${platform.color}`}
              >
                Review us on {platform.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
