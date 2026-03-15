import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "DevTeam — Building Modern & Scalable Web Applications",
  description:
    "We are a team of three passionate developers specializing in full-stack web applications, API development, UI/UX design, and cloud deployment.",
  keywords: [
    "web development",
    "full stack",
    "react",
    "next.js",
    "portfolio",
    "developer team",
  ],
  openGraph: {
    title: "DevTeam — Building Modern & Scalable Web Applications",
    description:
      "A team of three developers building modern, scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
