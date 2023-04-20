import './globals.css'

export const metadata = {
  title: 'Rinca',
  description: 'Rinca app created using nextjs 13 ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
