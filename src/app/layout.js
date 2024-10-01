import '../styles/App.css';
import Navbar from '../components/navbar';

export const metadata = {
  title: 'My Website',
  description: 'My Next.js website with App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

