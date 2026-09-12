import "./globals.css";


export const metadata = {
  title: "CPRG 306 A",
  description: "Assignment for CPRG 306 A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
