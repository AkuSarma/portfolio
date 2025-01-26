import DarkModeToogle from "./components/DarkModeToogle";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Aku Sarma",
  description: "Aku Sarma's personal website",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="dark bg-white dark:bg-slate-1000 text-slate-900 dark:text-slate-100 relative">
        <Navbar />
        <DarkModeToogle />
        {children}
      </body>
    </html>
  );
}
