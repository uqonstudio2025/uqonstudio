import type {
  Metadata,
  Viewport,
} from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

import {
  Footer,
} from "@/components/footer";

import {
  Navbar,
} from "@/components/layout/navbar";

import {
  defaultMetadata,
  defaultViewport,
} from "@/lib/seo";

/* ==========================================================================
   Fonts
   ========================================================================== */

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

/* ==========================================================================
   SEO
   ========================================================================== */

export const metadata: Metadata =
  defaultMetadata;

export const viewport: Viewport =
  defaultViewport;

/* ==========================================================================
   Types
   ========================================================================== */

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

/* ==========================================================================
   Component
   ========================================================================== */

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}

          min-h-screen

          bg-background

          text-foreground

          antialiased
        `}
      >
        {/* =======================================================
            Skip Link
        ======================================================= */}

        <a
          href="#main-content"
          className="
            sr-only

            focus:not-sr-only

            focus:fixed

            focus:left-6

            focus:top-6

            focus:z-[999]

            rounded-lg

            bg-primary

            px-4

            py-2

            font-medium

            text-primary-foreground

            shadow-lg
          "
        >
          Skip to content
        </a>

        {/* =======================================================
            Background
        ======================================================= */}

        <div
          aria-hidden
          className="
            pointer-events-none

            fixed

            inset-0

            -z-50

            overflow-hidden
          "
        >
          <div
            className="
              absolute

              left-1/2

              top-0

              h-[700px]

              w-[700px]

              -translate-x-1/2

              rounded-full

              bg-primary/10

              blur-[160px]
            "
          />

          <div
            className="
              absolute

              bottom-0

              right-0

              h-[420px]

              w-[420px]

              rounded-full

              bg-blue-500/5

              blur-[160px]
            "
          />
        </div>

        {/* =======================================================
            Navbar
        ======================================================= */}

        <Navbar />

        {/* =======================================================
            Main
        ======================================================= */}

        <main
          id="main-content"
          className="
            relative

            isolate

            overflow-x-clip

            pt-28
          "
        >
          {children}
        </main>

        {/* =======================================================
            Footer
        ======================================================= */}

        <Footer />
      </body>
    </html>
  );
}