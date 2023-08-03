import { Noto_Serif_SC } from '@next/font/google'
const notoSerifSC = Noto_Serif_SC({
  weight: ['400'],
  // TODO: Google Fonts does not embed the subsets in the comments of CSS files,
  // so Next.js needs a new way to find available subsets.
  // subsets: ['chinese-simplified'],
  subsets: ['latin'],
  variable: '--font-noto-serif-sc',
})

export default function RootLayout({ children }) {
  return (
    <html className={`${notoSerifSC.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  )
}
