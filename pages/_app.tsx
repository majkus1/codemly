import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';
import type { AppProps } from 'next/app';
import '@/styles/Nav.scss'
import '@/styles/Home.scss'
import '@/styles/App.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// @ts-ignore
export default appWithTranslation(MyApp, nextI18NextConfig);