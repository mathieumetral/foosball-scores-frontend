import {custom, maxLength, minLength, number, object, string} from 'valibot';

const playerNameFormSchema = string('Enter name', [
  minLength(3, 'Are you sure you entered the player name correctly?'),
  maxLength(20, 'Are you sure you entered the player name correctly?'),
]);
const scoreFormSchema = number('Enter score');

export const gameFormSchema = object({
  datePlayed: string([
    custom(
      input => (input ? !isNaN(new Date(input).getTime()) : true),
      'Please enter a date and time in a valid format'
    ),
  ]),
  leftPlayerName: playerNameFormSchema,
  rightPlayerName: playerNameFormSchema,
  leftScore: scoreFormSchema,
  rightScore: scoreFormSchema,
});
