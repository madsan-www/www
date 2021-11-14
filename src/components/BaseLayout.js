import React, { useEffect } from 'react';
import Footer from './Footer'
import Header from './Header';
import { useLocale } from '../hooks/locale';

const BaseLayout = ({ children, pageContext: { locale } }) => {
  // Using the useLocale() hook to define the correct locale 
  // that will be available in all components of the tree thought its context
  const { changeLocale } = useLocale();
  changeLocale(locale);

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
};

export { BaseLayout };
