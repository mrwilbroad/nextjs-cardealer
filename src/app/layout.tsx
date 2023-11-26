import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "swiper/swiper-bundle.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navigation from "./_components/Navigation";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "car-dealer",
  description: "Search for all latest car and request your favourite car ",
  authors:{
    name: "mrwilbroad",
    url: "https://github.com/mrwilbroad",
    
  },
  creator: "mrwilbroad",
  publisher : "mrwilbroad mark",
  keywords: ['car', 'car-dealer',"Buying car ",'Dar es salam car',"Tanzania Car",
"Bei ya Magari ","tanzania Car dealer"],
formatDetection: {
  telephone: true,
  
}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
