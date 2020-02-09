import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils';
import createGame from '../engine';

const getRandomOperator = () => {
  const operators = ['+', '-', '/', '*'];
  const operatorIndex = getRandomNumber(0, operators.length - 1);
  return operators[operatorIndex];
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

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const operator = getRandomOperator();
  const firstNum = getRandomNumber(1, 10);
  const secondNum = getRandomNumber(1, 10);

  const question = getQuestion(operator, firstNum, secondNum);
  const answer = String(getCorrectAnswer(operator, firstNum, secondNum));

  return cons(question, answer);
};

export default createGame(description, getQuestionAndAnswer);
