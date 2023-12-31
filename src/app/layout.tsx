import Link from 'next/link'
import './globals.css'
import styles from './layout.module.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 사이트 입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href = '/contact' >Contact</Link>
            <Link href = '/products' >Products</Link>
            <Link href = '/about' >About us</Link>
          </nav>
        </header>
        {children}
        </body>
    </html>
  )
}
