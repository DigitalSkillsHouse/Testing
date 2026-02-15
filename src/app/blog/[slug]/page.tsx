import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components";

const BLOG_POSTS: Record<
  string,
  { title: string; excerpt: string; date: string; content: string }
> = {
  "how-often-should-you-deep-clean-your-seattle-home": {
    title: "How Often Should You Deep Clean Your Seattle Home?",
    excerpt: "A practical guide to scheduling deep cleans in the Pacific Northwest.",
    date: "2024-01-15",
    content: `
      <p>Seattle's climate—mild and often damp—can mean more dust, mold concerns, and buildup over time. So how often should you schedule a deep clean?</p>
      <h3>Recommendations</h3>
      <p>Many Seattle homeowners deep clean once or twice a year: once in spring and again in fall. That aligns with seasonal changes and helps with allergens and grime that accumulate.</p>
      <h3>When to Deep Clean Sooner</h3>
      <p>Consider a deep clean after a move-in, after renovations, before or after hosting a big event, or if you've been too busy for regular cleaning for a while. It's a great reset.</p>
      <h3>After a Deep Clean</h3>
      <p>Once your home is thoroughly cleaned, regular house cleaning (weekly or bi-weekly) can maintain the results and keep your space consistently fresh.</p>
      <p>Need a deep clean in Seattle? <a href="/contact">Get a free quote</a> from Seattle Sparkle Cleaning.
    `,
  },
  "move-out-cleaning-checklist-seattle-renters": {
    title: "Move-Out Cleaning Checklist for Seattle Renters",
    excerpt: "Get your full deposit back with this move-out cleaning checklist.",
    date: "2024-01-08",
    content: `
      <p>Moving out of a Seattle apartment? A thorough move-out cleaning is one of the best ways to get your full deposit back. Here's a checklist that matches what most Seattle landlords expect.</p>
      <h3>Kitchen</h3>
      <p>Clean inside and outside of oven, fridge, and microwave. Wipe down cabinets (inside and out), countertops, and sink. Sweep and mop floors.</p>
      <h3>Bathrooms</h3>
      <p>Scrub toilet, tub/shower, and sink. Clean mirrors and wipe down counters. Mop floors and remove any soap scum or hard water stains.</p>
      <h3>All Rooms</h3>
      <p>Vacuum and mop floors, dust surfaces and baseboards, clean windowsills, and remove any nails or adhesive. Empty closets and sweep/vacuum inside.</p>
      <p>Don't have time to do it yourself? Our <a href="/services/move-out-cleaning">move-out cleaning service</a> covers everything on this list—and we'll work from your landlord's checklist too.
    `,
  },
  "eco-friendly-cleaning-products-seattle": {
    title: "Eco-Friendly Cleaning Products We Use in Seattle Homes",
    excerpt: "Green cleaning products that are safe for kids, pets, and the environment.",
    date: "2023-12-20",
    content: `
      <p>At Seattle Sparkle Cleaning, we care about the health of your home and the planet. Here are some of the eco-friendly products and practices we use.</p>
      <h3>All-Purpose Cleaners</h3>
      <p>We use plant-based, non-toxic all-purpose cleaners that cut through grease and grime without harsh chemicals. Safe for kids and pets when used as directed.</p>
      <h3>Glass & Surfaces</h3>
      <p>Streak-free glass cleaner and surface sprays that are free from ammonia and other harsh ingredients. They work great on stainless steel and granite too.</p>
      <h3>Your Products Welcome</h3>
      <p>If you have allergies or prefer specific brands, we're happy to use your supplies. Just let us know when you book.</p>
      <p>Ready for a clean that's kind to your home and the environment? <a href="/contact">Contact us</a> for a quote.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Seattle Sparkle Cleaning Blog`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Hero
        headline={post.title}
        subtext={formattedDate}
        showCTA={false}
        variant="page"
      />

      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content.trim() }}
          />
          <p className="mt-10">
            <Link href="/blog" className="font-medium text-blue-600 hover:text-blue-700">
              ← Back to Blog
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
