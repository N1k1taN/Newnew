import Navbar from '../components/navbar';
import { Roboto } from 'next/font/google';
import Footer from '@/components/Footer';
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});




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

