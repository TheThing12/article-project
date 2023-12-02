import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Article Projects',
  description: 'Article Website',
}

export default function RootLayout({ children }) {
  return (
  
    <html lang="en">
      <head>
        <title>Articles</title>
        </head>
      <body>{children}</body>
     
    </html>
  
  )
}
