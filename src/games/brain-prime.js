import { cons } from '@hexlet/pairs';
import { getRandomNumber } from '../utils';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestion = (number) => `${number}`;

const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getQuestionAndAnswer = () => {
  const num = getRandomNumber(0, 999);

  const question = getQuestion(num);
  const answer = getCorrectAnswer(num);

  return cons(question, answer);
};
