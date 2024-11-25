"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import Header from "@/ui/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html className="h-full" lang="en">
      <QueryClientProvider client={queryClient}>
        <body className="antialiased h-full flex flex-col">
          <Header />

          <main className="flex-1 bg-slate-200">{children}</main>
        </body>
      </QueryClientProvider>
    </html>
  );
}
