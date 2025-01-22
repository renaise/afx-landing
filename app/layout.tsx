export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-['Helvetica_Now',Helvetica,Arial,sans-serif] bg-black text-white antialiased uppercase">
        {children}
      </body>
    </html>
  )
}



import './globals.css'