import CommonFooter from "@/components/footer/CommonFooter";
import { LanguageProvider } from "@/context/LanguageContext";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "../styles/styles.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Toaster position="top-right" reverseOrder={false} />
          {children}
          <CommonFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
