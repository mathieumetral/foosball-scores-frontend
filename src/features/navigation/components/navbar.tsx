'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {clsx} from 'clsx';

export function Navbar() {
  const currentRoute = usePathname();

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-center space-x-6">
        <li>
          {/* Using a standard anchor tag to force a server-side refresh. We're doing this because the Relay cache isn't
          always up-to-date after changes to matches for statistics. This isn't the most optimized approach, but it
          simplifies things and allows us to benefit from caching on the CRUD games side only. */}
          <a
            href="/players"
            className={clsx(
              'block border-b-4 p-4 hover:font-medium',
              currentRoute === '/players' ? 'border-blue-700' : 'border-transparent'
            )}
          >
            Players
          </a>
        </li>
        <li>
          <Link
            href="/games"
            className={clsx(
              'block border-b-4 p-4 hover:font-medium',
              currentRoute.startsWith('/games') ? 'border-blue-700' : 'border-transparent'
            )}
          >
            Games
          </Link>
        </li>
      </ul>
    </nav>
  );
}
