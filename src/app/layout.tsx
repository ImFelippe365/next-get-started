import './globals.css'
import { Lexend } from 'next/font/google'
import Header from '../components/Header'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={lexend.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
