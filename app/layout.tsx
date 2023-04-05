import './globals.css'

export const metadata = {
  title: 'Notionly',
  description: 'Unleash the power of Notion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
