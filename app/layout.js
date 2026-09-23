import "./globals.css";


export const metadata = {
  title: "Shopping List",
  description: "Assignment for CPRG 306 A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
