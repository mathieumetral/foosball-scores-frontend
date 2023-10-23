import {GameUpdateForm} from '@features/games/components/game-update-form';

export default function GamesUpdatePage({params}: {params: {id: string}}) {
  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold">Create a new game</h1>

      <GameUpdateForm id={decodeURIComponent(params.id)} />
    </>
  );
}
