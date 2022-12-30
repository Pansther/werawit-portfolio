import { Noto_Sans, Noto_Sans_Thai } from '@next/font/google'

export const notoSans = Noto_Sans({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--noto-sans-font',
})

export const notoSansTH = Noto_Sans_Thai({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--noto-sans-th-font',
})
