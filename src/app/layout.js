import '../styles/App.css';
import Navbar from '../components/navbar';
import { Varela } from 'next/font/google';
const varela = Varela({
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
      <body className={varela.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

