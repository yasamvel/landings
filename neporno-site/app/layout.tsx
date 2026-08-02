import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neporno.site"),
  title: "НЕПОРНО - самый безопасный сайт в интернете",
  description:
    "Юмористический лендинг neporno.site: ожидание, разочарование, картошка, котики и никакого контента 18+.",
  keywords: ["neporno", "юмор", "картошка", "котики", "безопасный сайт"],
  authors: [{ name: "neporno.site" }],
  openGraph: {
    title: "НЕПОРНО",
    description: "Вы ожидали совсем другое. Здесь только хорошее настроение.",
    url: "https://neporno.site",
    siteName: "neporno.site",
    images: [
      {
        url: "/potato.png",
        width: 1024,
        height: 1024,
        alt: "Обычная картошка в неоновом свете"
      }
    ],
    locale: "ru_RU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "НЕПОРНО",
    description: "Самый безопасный сайт, который можно открыть в общественном транспорте.",
    images: ["/potato.png"]
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="dark scroll-smooth">
      <body className="bg-background text-white antialiased">
        {/* серьёзно? */}
        {/* всё ещё ищешь? */}
        {/* тут только картошка */}
        {children}
      </body>
    </html>
  );
}
