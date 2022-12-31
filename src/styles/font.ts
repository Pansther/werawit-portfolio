import { Noto_Sans, Noto_Sans_Thai, Quicksand } from '@next/font/google'

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

export const quicksandFont = Quicksand({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--quicksand-font',
})
