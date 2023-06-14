import '../styles/globals.css'
import { Open_Sans } from 'next/font/google'
import Navbar from '../components/Navbar'

const opensans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Promptify App',
  description: 'popular AI prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
