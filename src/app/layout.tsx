import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Amerta",
  description: "Amerta's Personal Space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="overflow-hidden"
        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        {children}
        <Analytics /> 
        <SpeedInsights />
        
      </body>
    </html>
  );
}