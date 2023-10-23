'use client';

import {graphql} from 'relay-runtime';
import {gamesListItemFragment$data, gamesListItemFragment$key} from '@data/__generated__/gamesListItemFragment.graphql';
import {useFragment} from 'react-relay';

const gamesListItemFragment = graphql`
  fragment gamesListItemFragment on Game {
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

  return (
    <div className="rounded-2xl bg-white p-4 shadow">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xl font-semibold">Single</div>
        <div className="font-normal text-slate-500">Date</div>
      </div>
      <div className="text-center text-3xl font-bold">
        {data.leftSide.score} - {data.rightSide.score}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 pt-4">
        <GamesListItemTeam players={data.leftSide.team.players} />
        <GamesListItemTeam players={data.rightSide.team.players} />
      </div>
    </div>
  );
}
