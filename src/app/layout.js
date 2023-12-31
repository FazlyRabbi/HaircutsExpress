import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Dashboard || HairCutt Expresss",
  description: "Generated by create next app",
  manifest: "/manifest.webmanifest",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;700&family=DM+Sans:wght@400;700&display=swap"
        />
      </Head>
      <body >{children}</body>
    </html>
  );
}
