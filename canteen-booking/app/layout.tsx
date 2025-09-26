import "./globals.css";

export const metadata = {
  title: "College Canteen",
  description: "Canteen food tokening system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
