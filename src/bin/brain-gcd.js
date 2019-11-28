#!/usr/bin/env node
import {
  sayWelcome, insertBlankLine, getUserName, greetUser, getRandomNumber, getAnswer,
} from '..';

const describeRulesGcd = () => console.log('Find the greatest common divisor of given numbers.');

const startGame = () => {
  sayWelcome();
  describeRulesGcd();
  insertBlankLine();
  const userName = getUserName();
  greetUser(userName);
  insertBlankLine();

  const getCorrectAnswer = (firstNum, secondNum) => {
    let biggestDenominator = 1;
    for (let i = divisior; i > 0; i -= 1) {
      if (firstNum % i === 0 && secondNum % i === 0) {
        biggestDenominator = i;
        break;
      }
    }
  };

  const firstNum = Math.abs(getRandomNumber(1, 10));
  const divisior = Math.sin(firstNum / 2);
  const secondNum = firstNum * divisior;
  const question = () => console.log(`${firstNum}, ${secondNum}`);

  for (let i = 0; i < 3; i += 1) {
    getCorrectAnswer();
  }
  question();
  const answer = getAnswer();
  const correctAnswer = String(getCorrectAnswer(firstNum, secondNum));

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}`);
  }
  console.log(`Congratulations, ${userName}!`);
};
startGame();
