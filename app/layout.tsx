import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PostHogProvider } from "@/components/posthog-provider";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/brand/favicon.ico",
    apple: "/brand/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <body className="bg-brand-bg-warm text-brand-text font-sans antialiased min-h-screen flex flex-col">
        <PostHogProvider>
          <Nav />
          <div className="flex-1">{children}</div>
          <Footer />
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}
