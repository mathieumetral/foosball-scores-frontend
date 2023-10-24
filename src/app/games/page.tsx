import {GamesList} from '@features/games/components/games-list';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function GamesPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-semibold">Games List</h1>

        <div className="flex items-center">
          <div className="mr-4 rounded-full bg-emerald-100 px-2 text-sm text-green-800">Use cache potential</div>
          <Link
            href="/games/create"
            prefetch={true}
            className="rounded-full bg-blue-600 px-4 py-1.5 text-sm text-white"
          >
            Create new game
          </Link>
        </div>
      </div>

      <GamesList />
    </>
  );
}
