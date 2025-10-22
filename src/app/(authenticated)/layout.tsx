import AuthenticatedNavbar from "@/components/navbar/AuthenticatedNavbar";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <AuthenticatedNavbar />
        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
