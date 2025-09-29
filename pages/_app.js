
// pages/_app.js - yangilangan versiya
import '../styles/globals.css'
import { I18nextProvider } from 'react-i18next'
import i18n from '../lib/i18n'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
      });
    }
  }, []);

  // SSR paytida i18n tayyor bo'lishini kutish
  if (!isClient) {
    return (
      <I18nextProvider i18n={i18n}>
        {/*  <Component {...pageProps} /> */}
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          color: 'white',
          fontSize: '1.25rem',
          textAlign: 'center',
          padding: '1rem'
        }}>
          Menu vaqtincha ishlamayapti
        </div>
      </I18nextProvider>
    )
  }

  return (
    <I18nextProvider i18n={i18n}>
      {/*  <Component {...pageProps} /> */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f172a',
        color: 'white',
        fontSize: '1.25rem',
        textAlign: 'center',
        padding: '1rem'
      }}>
        Menu vaqtincha ishlamayapti
      </div>
    </I18nextProvider>
  );
}