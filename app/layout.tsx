import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import VisualInspector from "@/components/VisualInspector";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://alanmattiassi.com"),
  title: "Alan Mattiassi, PhD – Psicologo del Gioco",
  description:
    "Sito ufficiale di Alan Mattiassi, PhD: Psicologo del Gioco. Psicologo, ricercatore, formatore e divulgatore. Ricerca evidence-based, corsi di Game-Based Learning per docenti e scuole, formazione aziendale e consulenza sul game design.",
  keywords: [
    "Alan Mattiassi",
    "Psicologo del Gioco",
    "Game-Based Learning",
    "Gamification",
    "Didattica Ludica",
    "Psicologia Sperimentale",
    "Neuroscienze Cognitive",
    "Serious Games",
    "Quoziente Strategico",
    "mcSQ",
    "PMPVG",
    "Universal Game Design for Learning",
  ],
  authors: [{ name: "Alan D.A. Mattiassi, PhD" }],
  creator: "Alan Mattiassi",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://alanmattiassi.com",
    title: "Alan Mattiassi, PhD – Psicologo del Gioco",
    description:
      "Psicologo, ricercatore, formatore e divulgatore. Ricerca scientifica evidence-based, Game-Based Learning e consulenza strategica sul gioco.",
    siteName: "Alan Mattiassi, PhD",
    images: [
      {
        url: "/images/profiloam.jpg",
        width: 1200,
        height: 630,
        alt: "Alan D.A. Mattiassi, PhD - Psicologo del Gioco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan Mattiassi, PhD – Psicologo del Gioco",
    description: "Psicologo, ricercatore, formatore e divulgatore.",
    images: ["/images/profiloam.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" data-theme="light-clean" className="light" suppressHydrationWarning>
      <head>
        {/* Anti-flicker theme hydration script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('am_theme');
                  var theme = saved || 'light-clean';
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme.startsWith('dark')) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-sky-500 selection:text-white">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <VisualInspector />
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
