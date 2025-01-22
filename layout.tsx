export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black antialiased">{children}</body>
    </html>
  )
}

