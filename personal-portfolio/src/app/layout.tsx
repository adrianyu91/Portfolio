import type { Metadata } from "next";
import "./globals.css";

// Font setup (optional)
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// ✅ Export metadata at the top level
export const metadata: Metadata = {
  title: "Adrian Yu | Portfolio",
  description: "Adrian Yu - Computer Engineering Student & Full-Stack Developer",
  openGraph: {
    title: "Adrian Yu | Portfolio",
    description: "Check out my personal portfolio showcasing projects, skills, and more.",
    url: "https://adrian-yu.vercel.app",
    images: [
      {
        url: "/portfolio.png",  // your static image
        width: 1200,
        height: 630,
        alt: "Adrian Yu Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Yu | Portfolio",
    description: "Check out my personal portfolio showcasing projects, skills, and more.",
    images: ["/portfolio.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (
                  localStorage.theme === 'dark' ||
                  (!('theme' in localStorage) && !window.matchMedia('(prefers-color-scheme: light)').matches)
                ) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch(_) {}
            `,
          }}
        />
      {/* Favicon setup */}
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
