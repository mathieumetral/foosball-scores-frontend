import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {playersListItemFragment$key} from '@data/__generated__/playersListItemFragment.graphql';

const playersListItemFragment = graphql`
  fragment playersListItemFragment on Player {
    name
    stats {
      wins
      losses
      ratio
      goalsFor
      goalsAgainst
    }
  }
`;

interface Props {
  player: playersListItemFragment$key;
}

export function PlayersListItem({player}: Props) {
  const data = useFragment(playersListItemFragment, player);

  const gamesPlayed = data.stats.wins + data.stats.losses;
  const goalsDifference = data.stats.goalsFor - data.stats.goalsAgainst;

  const playerData = [
    data.name,
    gamesPlayed,
    data.stats.wins,
    data.stats.losses,
    data.stats.ratio,
    data.stats.goalsFor,
    data.stats.goalsAgainst,
    goalsDifference,
  ];

  return (
    <tr className="border-b border-gray-200 text-gray-700 hover:bg-gray-50">
      {playerData.map((item, index) => (
        <td key={index} className="px-4 py-2">
          {item}
        </td>
      ))}
    </tr>
  );
}
