'use client';

import {graphql} from 'relay-runtime';
import {gamesListItemFragment$data, gamesListItemFragment$key} from '@data/__generated__/gamesListItemFragment.graphql';
import {useFragment, useMutation} from 'react-relay';
import {Button} from '@lib/ui/components/button';
import {gamesListItemDeleteMutation} from '@data/__generated__/gamesListItemDeleteMutation.graphql';
import {clsx} from 'clsx';
import Link from 'next/link';
import {formatDateTime} from '@lib/utils/format-date-time';

const gamesListItemDeleteMutation = graphql`
  mutation gamesListItemDeleteMutation($input: DeleteGameInput!) {
    deleteGame(input: $input) {
      id @deleteRecord
    }
  }
`;

const gamesListItemFragment = graphql`
  fragment gamesListItemFragment on Game {
    id
    datePlayed
    leftSide {
      team {
        players {
          id
          name
        }
      }
      score
    }
    rightSide {
      team {
        players {
          id
          name
        }
      }
      score
    }
  }
`;

function GamesListItemTeam({
  players,
}: {
  players:
    | gamesListItemFragment$data['leftSide']['team']['players']
    | gamesListItemFragment$data['rightSide']['team']['players'];
}) {
  return (
    <div className="rounded-lg bg-slate-100 px-2 py-1">
      <ul>
        {players.map(player => (
          <li key={player.id} className="mb-1 truncate">
            {player.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface Props {
  game: gamesListItemFragment$key;
}

export function GamesListItem({game}: Props) {
  const data = useFragment(gamesListItemFragment, game);
  const [commitMutation, isMutationInFlight] = useMutation<gamesListItemDeleteMutation>(gamesListItemDeleteMutation);

  const handleDelete = () =>
    commitMutation({
      variables: {
        input: {
          id: data.id,
        },
      },
    });

  return (
    <div className={clsx('rounded-2xl bg-white p-4 shadow', isMutationInFlight && 'pointer-events-none opacity-40')}>
      <div className="mb-6 mr-0 text-right font-normal text-slate-500">{formatDateTime(data.datePlayed as string)}</div>
      <div className="text-center text-3xl font-bold">
        {data.leftSide.score} - {data.rightSide.score}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 border-b border-slate-200 py-4">
        <GamesListItemTeam players={data.leftSide.team.players} />
        <GamesListItemTeam players={data.rightSide.team.players} />
      </div>
      <div className="mt-4">
        <Link
          className="block w-full rounded-full bg-blue-100 px-4 py-1.5 text-center text-sm text-blue-600"
          href={`/games/${data.id}`}
        >
          Update this game
        </Link>
        <Button className="mt-2 w-full bg-red-100 text-sm text-red-600" onClick={handleDelete}>
          Delete this game
        </Button>
      </div>
    </div>
  );
}
