import {PlayersList} from '@features/players/components/players-list';

export const dynamic = 'force-dynamic';

export default function PlayersPage() {
  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold">Players List</h1>

      <div className="rounded-xl bg-white shadow">
        <PlayersList />
      </div>
    </>
  );
}
