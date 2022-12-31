import { notoSansTH } from 'styles/font'

import styles from './index.module.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={notoSansTH.className}>
      <head />
      <body className={styles.body}>{children}</body>
    </html>
  )
}
