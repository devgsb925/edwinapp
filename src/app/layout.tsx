import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "EdWin",
  description: "Modern School System",
  icons: [{ rel: "icon", url:"https://utfs.io/f/70d60a55-2b63-43aa-b193-91ea2a9a31ba-gd5sdn.png"}],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}
