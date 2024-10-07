import Navbar from '../components/navbar';
import { Roboto } from 'next/font/google';
import Footer from '@/components/Footer';
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});



export const metadata = {
  title: 'My Website',
  description: 'My Next.js website with App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}

