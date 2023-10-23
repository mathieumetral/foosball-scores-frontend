import {maxLength, minLength, number, object, string} from 'valibot';

const playerNameFormSchema = string('Enter name', [
  minLength(3, 'Are you sure you entered the player name correctly?'),
  maxLength(20, 'Are you sure you entered the player name correctly?'),
]);
const scoreFormSchema = number('Enter score');

export const gameFormSchema = object({
  leftPlayerName: playerNameFormSchema,
  rightPlayerName: playerNameFormSchema,
  leftScore: scoreFormSchema,
  rightScore: scoreFormSchema,
});
