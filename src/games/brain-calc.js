import { cons } from '@hexlet/pairs';
import { getRandomNumber } from '../utils';

const getRandomOperator = () => {
  const operatorIndex = getRandomNumber(0, 3);

  switch (operatorIndex) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '/';
    default:
      return '*';
  }
};

const getQuestion = (operator, firstArg, secondArg) => `${firstArg} ${operator} ${secondArg}`;

const getCorrectAnswer = (operator, firstArg, secondArg) => {
  switch (operator) {
    case '+':
      return firstArg + secondArg;
    case '-':
      return firstArg - secondArg;
    case '/':
      return Math.round(firstArg / secondArg);
    default:
      return firstArg * secondArg;
  }
};

export const description = 'What is the result of the expression?';

export const getQuestionAndAnswer = () => {
  const operator = getRandomOperator();
  const firstNum = getRandomNumber(1, 10);
  const secondNum = getRandomNumber(1, 10);

  const question = getQuestion(operator, firstNum, secondNum);
  const answer = getCorrectAnswer(operator, firstNum, secondNum);

  return cons(question, answer);
};
