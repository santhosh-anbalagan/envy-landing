import { Footer, Layout, Navbar } from "@/components";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Envy",
  description:
    "Sharing a lifestyle is not just living life, it’s about building life together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/images/tab-icon.png"/>
        <link rel="icon" href="/images/tab-icon.png"/>
        <link href='https://fonts.googleapis.com/css?family=Caveat' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Graduate' rel='stylesheet' />
      </head>
      <body className={roboto.className}>
        <Layout>
          <Navbar/>
          {children}
          <Footer/>
        </Layout>
      </body>
    </html>
  );
}
