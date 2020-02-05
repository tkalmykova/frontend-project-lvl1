import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils';
import createGame from './engine';

const getQuestion = (firstNum, secondNum) => `${firstNum}, ${secondNum}`;

const getCorrectAnswer = (divisior, firstNum, secondNum) => {
  let biggestDenominator = 1;
  for (let i = divisior; i > 0; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      biggestDenominator = i;
      break;
    }
  }
  return biggestDenominator;
};

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const firstNum = Math.round(getRandomNumber(1, 20));
  const divisior = Math.round(firstNum / 2);
  const secondNum = firstNum * divisior;

  const question = getQuestion(firstNum, secondNum);
  const answer = getCorrectAnswer(divisior, firstNum, secondNum);

  return cons(question, answer);
};

export default createGame(description, getQuestionAndAnswer);
