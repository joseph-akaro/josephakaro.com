import "./globals.css";


export const metadata = {
  title: "Joseph Akaro",
  description: "I build robust, scalable and secure backend system with the latest Tech Stack such as Nextjs, Nodejs and Python Flask",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
