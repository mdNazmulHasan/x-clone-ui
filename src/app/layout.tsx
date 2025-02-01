import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg mx-auto flex justify-between">
          <div className="px-2 xsm:px-4 2xl:px-8 bg-red-200 h-screen">
            <LeftBar />
          </div>
          <div className="flex-1 bg-green-200 h-screen">{children}</div>
          <div className="hidden lg:flex ml-4 md:ml-8 bg-blue-200 h-screen">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
