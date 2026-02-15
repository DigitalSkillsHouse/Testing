import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components";

export const metadata: Metadata = {
  title: "Blog - Cleaning Tips & Seattle Living",
  description:
    "Cleaning tips, Seattle living advice, and news from Seattle Sparkle Cleaning. Learn how to keep your home clean and when to call the pros.",
  openGraph: {
    title: "Blog | Seattle Sparkle Cleaning",
    description: "Cleaning tips and Seattle area insights from your local house cleaning experts.",
  },
};

const BLOG_POSTS = [
  {
    slug: "how-often-should-you-deep-clean-your-seattle-home",
    title: "How Often Should You Deep Clean Your Seattle Home?",
    excerpt: "A practical guide to scheduling deep cleans in the Pacific Northwest—seasonal tips and when to call the pros.",
    date: "2024-01-15",
  },
  {
    slug: "move-out-cleaning-checklist-seattle-renters",
    title: "Move-Out Cleaning Checklist for Seattle Renters",
    excerpt: "Get your full deposit back with this move-out cleaning checklist used by Seattle property managers.",
    date: "2024-01-08",
  },
  {
    slug: "eco-friendly-cleaning-products-seattle",
    title: "Eco-Friendly Cleaning Products We Use in Seattle Homes",
    excerpt: "Our team's go-to green cleaning products that are safe for kids, pets, and the environment.",
    date: "2023-12-20",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <Hero
        headline="Blog"
        subtext="Cleaning tips, Seattle living, and news from Seattle Sparkle Cleaning."
        showCTA={false}
        variant="page"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800">Latest Posts</h2>
          <ul className="mt-8 space-y-8">
            {BLOG_POSTS.map((post) => (
              <li key={post.slug} className="border-b border-slate-200 pb-8 last:border-0">
                <time className="text-sm text-slate-500" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <h3 className="mt-2 text-xl font-semibold text-slate-800">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-slate-600">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-2 inline-block font-medium text-blue-600 hover:text-blue-700"
                >
                  Read more →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
