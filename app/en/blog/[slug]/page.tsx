import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Share2, Sparkles } from "lucide-react";
import { posts, Post } from "@/data/posts";
import ItFlag from "@/components/icons/ItFlag";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Article Not Found – Alan Mattiassi, PhD" };
  }
  return {
    title: `${post.title} – Alan Mattiassi, PhD`,
    description: post.summary,
  };
}

export default async function SinglePostEnglishPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Format paragraphs
  const paragraphs = post.content
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article className="py-12 sm:py-20 bg-[var(--bg-canvas)] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Navigation & Language Switch Bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/en/blog"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all articles</span>
          </Link>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] transition-colors"
          >
            <ItFlag className="w-3.5 h-2.5 rounded-[1px]" />
            <span>Leggi in Italiano</span>
          </Link>
        </div>

        {/* Post Header */}
        <header className="space-y-4 border-b border-[var(--border-color)] pb-8">
          <div className="flex items-center space-x-2 text-xs text-sky-400 font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
            <span className="text-[var(--text-subtle)]">&bull;</span>
            <span className="text-[var(--text-muted)]">Alan D.A. Mattiassi, PhD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] italic leading-relaxed">
            {post.summary}
          </p>
        </header>

        {/* Post Content */}
        <div className="prose prose-invert max-w-none space-y-4 text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Bottom CTA / Author Box */}
        <div className="pt-8 border-t border-[var(--border-color)] mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-[var(--text-main)]">Alan D.A. Mattiassi, PhD</h3>
            <p className="text-xs text-sky-400">Game Psychologist &bull; Researcher, Executive Trainer, Speaker</p>
            <p className="text-xs text-[var(--text-muted)] max-w-md">
              Supporting schools, universities, enterprises, and game studios in the scientific application of play.
            </p>
          </div>

          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/20 transition-all flex-shrink-0"
          >
            Work with Alan Mattiassi →
          </Link>
        </div>
      </div>
    </article>
  );
}
