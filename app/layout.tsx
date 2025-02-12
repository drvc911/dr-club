import '@/app/globals.css'
import { chakraPetch } from './fonts'
import { ContactPopupProvider } from '@/components/contact-popup-provider'

export const metadata = {
  title: 'DR Volleyball Club',
  description: 'Dedicated to developing volleyball players of all skill levels',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${chakraPetch.variable}`}>
      <body className="font-chakra uppercase tracking-widest">
        <ContactPopupProvider>
          {children}
        </ContactPopupProvider>
      </body>
    </html>
  )
}



import './globals.css'