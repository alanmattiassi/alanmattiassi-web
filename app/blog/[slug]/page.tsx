import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Share2, Sparkles } from "lucide-react";
import { posts, Post } from "@/data/posts";

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
    return { title: "Articolo non trovato – Alan Mattiassi, PhD" };
  }
  return {
    title: `${post.title} – Alan Mattiassi, PhD`,
    description: post.summary,
  };
}

export default async function SinglePostPage({ params }: PostPageProps) {
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
    <article className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna a tutte le notizie</span>
          </Link>
        </div>

        {/* Post Header */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex items-center space-x-2 text-xs text-sky-400 font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-400">Alan D.A. Mattiassi, PhD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 italic leading-relaxed">
            {post.summary}
          </p>
        </header>

        {/* Post Content */}
        <div className="prose prose-invert max-w-none space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Bottom CTA / Author Box */}
        <div className="pt-8 border-t border-slate-800 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-[#0d1424] border border-slate-800">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-white">Alan D.A. Mattiassi, PhD</h3>
            <p className="text-xs text-sky-400">Psicologo del Gioco &bull; Ricercatore, Formatore, Divulgatore</p>
            <p className="text-xs text-slate-400 max-w-md">
              Supporto scuole, università e aziende nell&apos;applicazione scientifica del gioco.
            </p>
          </div>

          <Link
            href="/hire-me-lavora-con-me"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/20 transition-all flex-shrink-0"
          >
            Contatta Alan Mattiassi →
          </Link>
        </div>
      </div>
    </article>
  );
}
