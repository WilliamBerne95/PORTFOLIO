import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio de William Berne',
  description: 'Bienvenue sur mon portfolio!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <div className="min-h-screen bg-[#121212] pt-24">
          {children}
      </div>
      </body>
      <Footer />
    </html>
  )
}
