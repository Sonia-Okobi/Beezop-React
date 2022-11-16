import React, {useEffect} from 'react';
import { useLocation } from 'react-router';
import Footer from '../organisms/footer/Footer';
import NavBar from '../organisms/navbar/NavBar';
import TryFree from '../organisms/tryfree/TryFree';

export default function DefaultLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="default-layout">
      <NavBar />
      <div className="default-layout__content">{children}</div>
      <TryFree />
      <Footer />
    </div>
  );
}
