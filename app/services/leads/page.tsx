"use client";
import Link from "next/link";

export default function LeadsPage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Lead Analysis Service</h1>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Analyze and manage your business leads efficiently using AI insights and call data.
      </p>

      <Link
        href="/signup?service=lead"
        className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-orange-700 transition-all"
      >
        Sign Up for Lead Analysis
      </Link>
    </div>
  );
}






