'use client';

import {graphql} from 'relay-runtime';
import {useState} from 'react';
import {useLazyLoadQuery, useMutation} from 'react-relay';
import {useRouter} from 'next/navigation';
import {useFormValidation} from '@lib/hooks/use-form-validation';
import {TextField} from '@lib/ui/components/text-field';
import {Button} from '@lib/ui/components/button';
import {gameFormSchema} from '@features/games/form-validation/game-form';
import {gameUpdateFormMutation as gameUpdateFormMutationType} from '@data/__generated__/gameUpdateFormMutation.graphql';
import {gameUpdateFormQuery as gameUpdateFormQueryType} from '@data/__generated__/gameUpdateFormQuery.graphql';

const gameUpdateFormQuery = graphql`
  query gameUpdateFormQuery($id: ID!) {
    game(id: $id) {
      leftSide {
        score
        team {
          players {
            name
          }
        }
      }
      rightSide {
        score
        team {
          players {
            name
          }
        }
      }
    }
  }
`;

const gameUpdateFormMutation = graphql`
  mutation gameUpdateFormMutation($input: UpdateGameInput!) {
    updateGame(input: $input) {
      ...gamesListItemFragment
    }
  }
`;

export function GameUpdateForm({id}: {id: string}) {
  const router = useRouter();

  const {game} = useLazyLoadQuery<gameUpdateFormQueryType>(gameUpdateFormQuery, {
    id,
  });
  const [commitMutation, isMutationInFlight] = useMutation<gameUpdateFormMutationType>(gameUpdateFormMutation);

  const [leftPlayerName, setLeftPlayerName] = useState(game?.leftSide.team.players[0].name ?? '');
  const [rightPlayerName, setRightPlayerName] = useState(game?.rightSide.team.players[0].name ?? '');
  const [leftScore, setLeftScore] = useState<number>(game?.leftSide.score ?? 0);
  const [rightScore, setRightScore] = useState<number>(game?.rightSide.score ?? 0);
  const {registerField, handleSubmit: handleValidation} = useFormValidation({
    schema: gameFormSchema,
    values: {
      leftPlayerName,
      rightPlayerName,
      leftScore,
      rightScore,
    },
  });

  const handleSubmit = handleValidation(() => {
    commitMutation({
      variables: {
        input: {
          id,
          leftSide: {
            playerName: leftPlayerName,
            score: leftScore,
          },
          rightSide: {
            playerName: rightPlayerName,
            score: rightScore,
          },
        },
      },
      onCompleted: () => {
        router.push('/games');
      },
    });
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <div className="w-1/2 pr-2">
          <TextField
            label="Left Player Name:"
            value={leftPlayerName}
            onChange={e => setLeftPlayerName(e.currentTarget.value)}
            type="text"
            {...registerField('leftPlayerName')}
          />
          <TextField
            label="Score:"
            value={String(leftScore)}
            onChange={e => setLeftScore(parseInt(e.currentTarget.value))}
            type="number"
            {...registerField('leftScore')}
          />
        </div>

        <div className="w-1/2 pl-2">
          <TextField
            label="Right Player Name:"
            value={rightPlayerName}
            onChange={e => setRightPlayerName(e.currentTarget.value)}
            type="text"
            {...registerField('rightPlayerName')}
          />
          <TextField
            label="Score:"
            value={String(rightScore)}
            onChange={e => setRightScore(parseInt(e.currentTarget.value))}
            type="number"
            {...registerField('rightScore')}
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Button type="submit" disabled={isMutationInFlight}>
          Update game
        </Button>
      </div>
    </form>
  );
}
