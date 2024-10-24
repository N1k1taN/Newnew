import Navbar from '../components/navbar';
import { Roboto } from 'next/font/google';
import Footer from '@/components/Footer';
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const viewport = "width=device-width, initial-scale=1.0";
export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ua">
            <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}

