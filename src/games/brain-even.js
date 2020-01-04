import { cons } from '@hexlet/pairs';
import { getRandomNumber } from '../utils';

const isEven = (num) => num % 2 === 0;

const getQuestion = (number) => `${number}`;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestionAndAnswer = () => {
  const num = getRandomNumber(0, 999);

  const question = getQuestion(num);
  const answer = getCorrectAnswer(num);

  return cons(question, answer);
};
