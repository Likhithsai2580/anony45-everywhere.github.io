import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: "Portfolio by Likhith Sai",
  description: "Most awaited portfolio by Likhith Sai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <style dangerouslySetInnerHTML={{__html: `
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/Poppins-Regular.woff2') format('woff2'),
                 url('/fonts/Poppins-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/Poppins-SemiBold.woff2') format('woff2'),
                 url('/fonts/Poppins-SemiBold.woff') format('woff');
            font-weight: 600;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/Poppins-Bold.woff2') format('woff2'),
                 url('/fonts/Poppins-Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
        `}} />
      </head>
      <body className="font-poppins">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}