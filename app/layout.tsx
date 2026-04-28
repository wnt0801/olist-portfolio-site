import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://www.wannantian.com";
const SITE_NAME = "万南天 · 数据分析作品集";
const SITE_DESCRIPTION =
  "金融工程专业学生，聚焦业务数据分析方向。围绕 SQL、Python 与 Power BI 打造的项目作品集，包含 Olist 电商经营分析、取消风险逻辑回归建模、A 股行业轮动量化研究三个完整项目。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | 万南天",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "万南天",
    "Wan Nantian",
    "数据分析作品集",
    "业务数据分析",
    "data analyst portfolio",
    "SQL",
    "Python",
    "Power BI",
    "Olist",
    "逻辑回归",
    "A 股行业轮动",
    "金融工程",
  ],
  authors: [{ name: "万南天 (Wan Nantian)", url: SITE_URL }],
  creator: "万南天",
  publisher: "万南天",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "万南天 · 数据分析作品集",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
  themeColor: "#ffffff",
};

// 结构化数据：告诉搜索引擎"这是一个人 + 一份简历型作品集"
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "万南天",
  alternateName: "Wan Nantian",
  url: SITE_URL,
  jobTitle: "Data Analyst (求职中)",
  description: SITE_DESCRIPTION,
  knowsAbout: [
    "SQL",
    "Python",
    "Power BI",
    "数据分析",
    "业务数据分析",
    "逻辑回归",
    "金融工程",
  ],
  sameAs: [
    "https://github.com/wnt0801",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased" style={{ colorScheme: "light" }}>
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          id="json-ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
