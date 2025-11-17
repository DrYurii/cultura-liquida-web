import React from 'react';
import Script from 'next/script';
import { GlobalStyle } from '@/app/ui/globalStyles';
import { headInlineCSS } from '@/app/ui/headInlineCSS';
import StyledRegistry from '@/lib/registry';
import { ReduxProvider } from "@/lib/redux/providers/ReduxProvider";
import HeaderComponent from '@/app/components/HeaderComponent/HeaderComponent'
import FooterComponent from '@/app/components/FooterComponent/FooterComponent'
import ComponentPreloader from '@/app/components/ComponentPreloader/ComponentPreloader'
import PerformanceMonitor from '@/app/components/PerformanceMonitor/PerformanceMonitor'
import DataProvider from '@/app/components/DataProvider/DataProvider'
import ErrorBoundary from '@/app/components/ErrorBoundary/ErrorBoundary'
import ConsoleErrorHandler from '@/app/components/ConsoleErrorHandler/ConsoleErrorHandler'
import { isProd } from '@/helpers/constants'
import { mohave } from '@/app/ui/fonts';

export const metadata = {
  title: "Cultura Líquida",
  description: "Potencia tu salud con hongos medicinales",
  author: "Cultura Líquida Team",
  copyright: "© 2025 Cultura Líquida. All rights reserved.",
  robots: {
    index: true,
    follow: true, 
  },
  link:{
    rel:"icon",
    href:"./favicon.ico",
    sizes:"any"
  },
  alternates: {
    canonical: 'https://www.cultura-liquida.com/product/melena-de-leon-capsules',
  },
  openGraph: {
    title: "Cultura Líquida",
    description: "Potencia tu salud con hongos medicinales",
    url: 'https://www.cultura-liquida.com',
    siteName: 'Cultura Líquida',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cultura Líquida",
    description: "Potencia tu salud con hongos medicinales",
  },
};
  
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={mohave.variable}>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{ __html: headInlineCSS }} />
        
        {/* Defer non-critical scripts */}
        {isProd && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=AW-17259177669"
              strategy="lazyOnload"
            />
            <Script id="google-ads" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-17259177669', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={mohave.variable} style={{ margin: 0 }}>
         <StyledRegistry>
           <GlobalStyle />
             <ReduxProvider>
                <DataProvider>
                  <ErrorBoundary>
                    <ConsoleErrorHandler />
                    <ComponentPreloader>
                      <HeaderComponent />
                        <main style={{ maxWidth: '1920px', margin: '0 auto', padding: '0 20px' }}>
                          {children}
                        </main>
                      <FooterComponent />
                    </ComponentPreloader>
                    <PerformanceMonitor enabled={!isProd} />
                  </ErrorBoundary>
                </DataProvider>
             </ReduxProvider>
         </StyledRegistry>
      </body>
    </html>
  );
}
