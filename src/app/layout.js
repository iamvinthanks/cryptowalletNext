import './globals.css'
import { Inter } from 'next/font/google'
import 'styles/font-awesome.min.css'
import NavBottom from '@/components/navbottom/page';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
      <NavBottom />
        {children}
      </body>
    </html>
  )
}
