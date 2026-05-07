import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PostHogProvider } from "@/components/posthog-provider";
import { siteConfig } from "@/lib/site-config";
import { MobileCallBar } from "@/components/chrome/mobile-call-bar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
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
      className={`${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-brand-bg-warm text-brand-text font-sans antialiased min-h-screen flex flex-col">
        <PostHogProvider>
          <Nav />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <MobileCallBar />
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}
