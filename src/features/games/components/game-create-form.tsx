'use client';

import {graphql} from 'relay-runtime';
import {useState} from 'react';
import {useMutation} from 'react-relay';
import {gameCreateFormMutation} from '@data/__generated__/gameCreateFormMutation.graphql';
import {useRouter} from 'next/navigation';
import {maxLength, minLength, number, object, string} from 'valibot';
import {useFormValidation} from '@lib/hooks/use-form-validation';
import {TextField} from '@lib/ui/components/text-field';
import {Button} from '@lib/ui/components/button';

const gameCreateFormMutation = graphql`
  mutation gameCreateFormMutation($input: CreateGameInput!) {
    createGame(input: $input) {
      ...gamesListItemFragment
    }
  }
`;

const playerNameFormSchema = string('Enter name', [
  minLength(3, 'Are you sure you entered the player name correctly?'),
  maxLength(20, 'Are you sure you entered the player name correctly?'),
]);
const scoreFormSchema = number('Enter score');

const formSchema = object({
  leftPlayerName: playerNameFormSchema,
  rightPlayerName: playerNameFormSchema,
  leftScore: scoreFormSchema,
  rightScore: scoreFormSchema,
});

export function GameCreateForm() {
  const router = useRouter();
  const [commitMutation, isMutationInFlight] = useMutation<gameCreateFormMutation>(gameCreateFormMutation);
  const [leftPlayerName, setLeftPlayerName] = useState('');
  const [rightPlayerName, setRightPlayerName] = useState('');
  const [leftScore, setLeftScore] = useState<number>(0);
  const [rightScore, setRightScore] = useState<number>(0);
  const {registerField, handleSubmit: handleValidation} = useFormValidation({
    schema: formSchema,
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
      updater: store => {
        // Another approach here would be to update the store by appending the edge we just created
        // and updating the player's statistics (https://relay.dev/docs/guided-tour/list-data/updating-connections/=.
        // However, I've chosen not to do this and instead invalidate
        // the store because appending the edge is problematic. The query that fetches all the games has pagination,
        // and we don't know the order in which the server returns the games.
        // Therefore, we'd either have to adopt a strategy where newly created items appear at the top,
        // regardless of the server-defined order, or align with the server's order.
        // For simplicity, I prefer to refetch in this scenario.
        store.invalidateStore();
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
          Create game
        </Button>
      </div>
    </form>
  );
}
