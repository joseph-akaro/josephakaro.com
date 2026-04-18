import "./globals.css";

export const metadata = {
  title: "Akaro Softwares",
  description: "Websites that help businesses grow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
        {children}
      </body>
    </html>
  );
}
