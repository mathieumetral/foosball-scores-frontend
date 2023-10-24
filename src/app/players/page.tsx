import {PlayersList} from '@features/players/components/players-list';

export const dynamic = 'force-dynamic';

export default function PlayersPage() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Players List</h1>
        <div className="rounded-full bg-amber-200 px-2 text-sm text-amber-800">Don&apos;t use cache potential</div>
      </div>

      <div className="rounded-xl bg-white shadow">
        <PlayersList />
      </div>
    </>
  );
}
