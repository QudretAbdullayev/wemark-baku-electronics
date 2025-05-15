
import Header from "@/components/layout/Header";
import "./globals.scss";



export const metadata = {
  title: "Baku Electronics",
  description: "Baku Electronics",
  icons: {
    icon: '/baku-electronics.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
