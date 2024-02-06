import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_providers/auth";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSW Barber",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
        <body className={`${inter.className} dark`}>
          <AuthProvider>
            {children}
            <Footer />
          </AuthProvider>
        </body>
    </html>
  );
}
