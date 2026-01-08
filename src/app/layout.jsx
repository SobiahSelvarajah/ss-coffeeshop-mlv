import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "My Little Valentine",
    description: "A cozy coffeeshop project built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout__container">
          {/* Navbar */}
          <main className="layout__mainContent">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
