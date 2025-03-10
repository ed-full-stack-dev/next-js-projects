import type { Metadata } from "next";
import Header from "../components/layout/header";
import "@/styles/globals.css";
import Footer from "@/components/layout/footer";




export const metadata: Metadata = {
  title: "e-rojas.io | Home",
  description: "Personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-50">
        <div className="max-w-[1400px] mx-auto bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

