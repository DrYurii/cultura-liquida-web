import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://www.cultura-liquida.com'),
  title: "Cultura Líquida",
  description: "Potencia tu salud con hongos medicinales",
  robots: {
    index: true,
    follow: true, 
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Cultura Líquida",
    description: "Potencia tu salud con hongos medicinales",
    url: '/',
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

