
import "../globals.scss";

export const metadata = {
  title: "Digər",
  description: "Digər",
};

export default function RootLayout({ children }) {
  return (
      <main>
        {children}
      </main>
  );
}