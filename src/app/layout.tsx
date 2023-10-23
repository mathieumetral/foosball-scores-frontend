import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.scss';
import {RelayProvider} from '@lib/relay/provider';
import {ReactNode} from 'react';
import {clsx} from 'clsx';
import {Navbar} from '@features/navigation/components/navbar';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Foosball Scores',
  description: 'Track and compare foosball scores among players.',
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-slate-100')}>
        <Navbar />
        <RelayProvider>
          <div className="div container mx-auto mb-16 mt-6">{children}</div>
        </RelayProvider>
      </body>
    </html>
  );
}
