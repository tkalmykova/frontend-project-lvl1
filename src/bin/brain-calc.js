#!/usr/bin/env node
import {
  sayWelcome, insertBlankLine, getUserName, greetUser, getRandomNumber, getAnswer,
} from '..';

const describeRulesCalc = () => console.log('What is the result of the expression?');

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
const askQuestion = (operator, firstArg, secondArg) => console.log(`Question: ${firstArg} ${operator} ${secondArg}`);
const getCorrectAnswer = (operator, firstArg, secondArg) => {
  switch (operator) {
    case '+':
      return Math.round(firstArg + secondArg);
    case '-':
      return Math.round(firstArg - secondArg);
    case '/':
      return Math.round(firstArg / secondArg);
    default:
      return Math.round(firstArg * secondArg);
  }
};
const startGame = () => {
  sayWelcome();
  describeRulesCalc();
  insertBlankLine();

  const userName = getUserName();
  greetUser(userName);
  insertBlankLine();

  for (let i = 0; i < 3; i += 1) {
    const operator = getRandomOperator();
    const firstNum = getRandomNumber(1, 10);
    const secondNum = getRandomNumber(1, 10);


    askQuestion(operator, firstNum, secondNum);
    const answer = getAnswer();
    const correctAnswer = String(getCorrectAnswer(operator, firstNum, secondNum));

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
startGame();
