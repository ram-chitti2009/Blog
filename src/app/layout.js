import { Geist, Geist_Mono, Roboto} from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import CookiesProviderWrapper from "./components/cookies-provider";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{

    default: "Next 14 Blog",
    template: "%s | Next 14 Blog",
    
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} ${roboto.variable} antialiased`}
      >
        <CookiesProviderWrapper>
          <main className="mt-12">
            <Header/>
            {children}
          </main>
        </CookiesProviderWrapper>
      </body>
    </html>
  );
}
