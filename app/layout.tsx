import AuthProvider from '@/context/auth-provider';
import { DropdownProvider } from '@/context/dropdown-context';
import { LikedProductsProvider } from '@/context/liked-product-context';
import { GeistSans } from 'geist/font';
import SmoothScrolling from 'lib/smoothScrollling';
import { ensureStartsWith } from 'lib/utils';
import { Cormorant, Montserrat } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;
const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});
export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <body className="bg-white text-black selection:bg-teal-300">
        <AuthProvider>
          <SmoothScrolling>
            <LikedProductsProvider>
            <DropdownProvider>
              <Suspense>
                <main>{children}</main>
              </Suspense>
            </DropdownProvider>
            </LikedProductsProvider>
          </SmoothScrolling>
        </AuthProvider>
      </body>
    </html>
  );
}
