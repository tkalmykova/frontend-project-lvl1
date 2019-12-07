#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  sayWelcome, insertBlankLine, getUserName, greetUser,
} from '..';

const describeRulesPrime = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const askQuestion = (number) => console.log(`Question: ${number}`);

const getAnswer = () => readlineSync.question('Your answer: ');

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');


const startGame = () => {
  sayWelcome();
  describeRulesPrime();
  insertBlankLine();

  const userName = getUserName();
  greetUser(userName);
  insertBlankLine();

  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber(0, 999);
    askQuestion(num);

    const answer = getAnswer();
    const correctAnswer = getCorrectAnswer(num);

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
