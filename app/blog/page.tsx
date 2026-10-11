"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Newspaper,
  Calendar,
  Search,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { posts, Post } from "@/data/posts";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="py-12 sm:py-20 space-y-16">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <Newspaper className="w-3.5 h-3.5" />
          <span>NOTIZIE &bull; AGGIORNAMENTI &bull; DIVULGAZIONE</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Notizie &amp; Aggiornamenti
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
          Articoli, progetti sul campo, podcast ed eventi
        </p>

        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Tutti gli ultimi sviluppi sulla psicologia del gioco: convegni, convenzioni di tirocinio,
          podcast GiF, report di ricerca e materiali didattici gratuiti.
        </p>
      </section>

      {/* 2. Search & Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[var(--border-color)] pb-6">
          <div className="text-sm text-[var(--text-muted)]">
            Trovati <span className="font-bold text-[var(--text-main)]">{filteredPosts.length}</span> articoli
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-subtle)]" />
            <input
              type="text"
              placeholder="Cerca negli articoli..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all flex flex-col justify-between space-y-4 group shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs text-[var(--accent-primary)] font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-color)]">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-[var(--accent-primary)] hover:underline inline-flex items-center space-x-1"
                >
                  <span>Leggi l&apos;articolo completo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
