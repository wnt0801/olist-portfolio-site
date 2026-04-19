import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "万南天 | 数据分析作品集",
  description: "用于求职展示的数据分析主页，包含项目亮点、分析方法与核心能力。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
