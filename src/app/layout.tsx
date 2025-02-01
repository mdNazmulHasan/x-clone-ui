import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg mx-auto flex justify-between">
          <div className="col-span-1">LeftBar</div>
          <div className="col-span-1">{children}</div>
          <div className="col-span-1">RightBar</div>
        </div> 
      </body>
    </html>
  );
}
