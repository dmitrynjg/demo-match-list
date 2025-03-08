'use client';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const tactic = localFont({
  src: '../../public/fonts/tacticsans.ttf',
  variable: '--font-tactic',
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`${inter.variable} ${tactic.variable} antialiased`}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
