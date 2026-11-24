import Navbar from "@/components/navbar";
import { SmoothScroller } from "@/components/smooth-scroller";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | ${DATA.headline}`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Mohammad Fayas Khan",
    "Fayas Khan",
    "AI Systems Engineer",
    "Machine Learning",
    "Deep Learning",
    "Agentic AI",
    "PyTorch",
    "FastAPI",
    "ESP32",
    "Robotics",
    "LPU",
    "Computer Science",
    "Full-Stack Developer",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  openGraph: {
    title: `${DATA.name} | ${DATA.headline}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DATA.avatarUrl,
        width: 800,
        height: 800,
        alt: DATA.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} | ${DATA.headline}`,
    description: DATA.description,
    images: [DATA.avatarUrl],
    creator: "@MohammadFayasKhan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TooltipProvider delayDuration={0}>
            <SmoothScroller>
              <div className="max-w-4xl mx-auto py-10 sm:py-16 px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </SmoothScroller>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
