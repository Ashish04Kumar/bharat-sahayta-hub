
import { LanguageProvider } from "@/context/LanguageContext";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "./styles.scss";

import CommonNavbar from "@/components/navbar/CommonNavbar";
import CommonFooter from "@/components/footer/CommonFooter";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <CommonNavbar />
          {children}
          <CommonFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
