import PublicNavbar from "@/components/navbar/PublicNavbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PublicNavbar />
        {children}
      </body>
    </html>
  );
}
