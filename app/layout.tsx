import '../styles/globals.css';

export const metadata = {
  title: 'EssentialERP',
  description: 'All in one ERP for SMEs',
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
