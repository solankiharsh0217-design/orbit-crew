import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundGlow from "@/components/BackgroundGlow";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "OrbitCrew — High-Conversion Websites & AI Text/Voice Agents",
  description: "Transform low-converting websites into 24/7 revenue engines. We build high-conversion Next.js websites and deploy AI text & voice agents connected directly to your mobile numbers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-[#a8a8a8]">
        <SmoothScroll>
          <div className="page-container relative bg-black min-h-screen text-[#a8a8a8]">
            <BackgroundGlow />
            <div className="page-content pt-[60px] relative z-1">
              <Header />
              <main className="home relative min-h-[calc(100vh-200px)]">
                {children}
              </main>
              <Footer />
            </div>
            <CookieBanner />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
