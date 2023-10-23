import {GameCreateForm} from '@features/games/components/game-create-form';

export default function GamesCreatePage() {
  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold">Create a new game</h1>

      <GameCreateForm />
    </>
  );
}
