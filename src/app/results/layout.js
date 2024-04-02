import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from '../../../components/BootstrapClient';
import Navbar from '../../../components/Navbar';
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Takalkar Academy - Results",
  description: "Pune's Best Neet Jee Mht-Cet 11th - 12th boards academy",
};

export default function RootLayout({ children }) {
  return (
    <>
        
            {children}
        
    </>
  );
}