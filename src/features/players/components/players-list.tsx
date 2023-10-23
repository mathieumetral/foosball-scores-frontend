import {PlayersListClient} from '@features/players/components/client/players-list-client';
import {Suspense} from 'react';
import {PlayersListSkeleton} from '@features/players/components/players-list-skeleton';
import {PlayersListServer} from '@features/players/components/server/players-list-server';
import {ErrorBoundaryWithRetry} from '@lib/errors/boundary/error-boundary-with-retry';
import {PlayersListError} from '@features/players/components/players-list-error';
import {CodeBlock} from '@lib/ui/components/code-block';

export const PlayersListHeaderColumns = [
  'Player name',
  'Games played',
  'Wins',
  'Losses',
  'Ratio (Games Played/Wins)',
  'Goals For',
  'Goals Against',
  'Goals Difference',
];

export function PlayersList() {
  return (
    <div className="pt-2">
      <div className="mx-2 rounded-lg bg-slate-100 p-2 text-sm text-slate-600">
        <div className="text-sm text-gray-600">
          This list is loaded through a server-side request made by Next.js. Importantly, with the use of React&apos;s
          <CodeBlock>Suspense</CodeBlock>, Next.js doesn&apos;t need to wait for the request to complete before
          rendering the page on the client. This approach is the most optimized, as the request is made by Next.js and
          doesn&apos;t block the page display.
          <br />
          <br />
          Furthermore, the loading of the list is deliberately slowed down using a sleep in
          <CodeBlock>src/features/players/components/server/players-list-server.tsx</CodeBlock>
          .
          <br />
          <br />
          <span className="italic">
            Note: In scenarios where the backend server is unavailable, the list will display an error through the error
            boundaries. This provides an enhanced user experience, allowing for error handling on server fetch failures
            and offers a client-side retry option.
          </span>
        </div>
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr>
            {PlayersListHeaderColumns.map((data, index) => (
              <th key={index} className="border-b-2 p-4 text-left font-medium">
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <Suspense fallback={<PlayersListSkeleton />}>
          <ErrorBoundaryWithRetry
            serverComponent={<PlayersListServer />}
            clientComponent={<PlayersListClient />}
            fallback={PlayersListError}
          />
        </Suspense>
      </table>
    </div>
  );
}
