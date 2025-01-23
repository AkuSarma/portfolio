import "./globals.css";

export const metadata = {
  title: "Aku Sarma",
  description: "Aku Sarma's personal website",
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
