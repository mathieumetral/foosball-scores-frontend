import {PlayersList} from '@features/players/components/players-list';

export const dynamic = 'force-dynamic';

export default function PlayersPage() {
  return (
    <div className="mb-16 mt-6">
      <h1 className="mb-4 text-2xl font-semibold">Players List</h1>

      <hr className="mb-4 border-t-2 border-gray-200" />

      <div className="rounded-xl bg-white shadow">
        <PlayersList />
      </div>
    </div>
  );
}
