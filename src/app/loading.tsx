export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="h-12 bg-gray-700 rounded-lg mb-4 w-3/4" />
          <div className="h-6 bg-gray-700 rounded mb-3 w-full" />
          <div className="h-6 bg-gray-700 rounded mb-8 w-2/3" />
          <div className="flex gap-4">
            <div className="h-12 w-40 bg-gray-600 rounded-lg" />
            <div className="h-12 w-40 bg-gray-600 rounded-lg" />
          </div>
        </div>
      </div>
      {/* Content skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="h-8 bg-gray-200 rounded mb-6 w-1/3" />
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-5 bg-gray-200 rounded w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
