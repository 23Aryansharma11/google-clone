import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "C/Footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google",
  description: "Your favorite search engine.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon?.png" type="image/png" sizes="any" />
      </head>
      <body className={inter.className}>{children}
      <Footer />
      </body>
    </html>
  );
}
