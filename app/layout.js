import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aadhyantha Academy",
  description:
    "Join us for yoga, meditation, chess and more at our calming heaven.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive" // Ensures the script loads after the page becomes interactive
          src="https://www.googletagmanager.com/gtag/js?id=G-GWDN4BCB36"
        />

        {/* Initialize Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive" // Ensure the code runs after the script is loaded
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GWDN4BCB36');
          `,
          }}
        />
      </head>

      <body className={`${montserrat.className} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
