#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  sayWelcome, insertBlankLine, getUserName, greetUser,
} from '..';

const describeRulesProgression = () => console.log('What number is missing in the progression?');

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const displayProgression = (firstElement, difference, elementToGuessIndex) => {
  let previousElement = firstElement;
  let str = `${firstElement}`;
  for (let i = 0; i < 9; i += 1) {
    const newElement = previousElement + difference;
    if (i === elementToGuessIndex) {
      str += ' ..';
    } else {
      str += ` ${newElement}`;
    }
    previousElement = newElement;
  }

  return str;
};

const askQuestion = (firstElement, difference, elementToGuessIndex) => console.log(`Question: ${displayProgression(firstElement, difference, elementToGuessIndex)}`);

const getAnswer = () => readlineSync.question('Your answer: ');

const getCorrectAnswer = (firstElement, difference, n) => {
  const elementToGuess = firstElement + (n - 1) * difference;
  return elementToGuess;
};

const startGame = () => {
  sayWelcome();
  describeRulesProgression();
  insertBlankLine();

  const userName = getUserName();
  greetUser(userName);
  insertBlankLine();

  for (let i = 0; i < 3; i += 1) {
    const firstElement = getRandomNumber(1, 10);
    const difference = getRandomNumber(1, 50);
    const elementToGuessIndex = getRandomNumber(0, 9);
    const elementToGuessPosition = elementToGuessIndex + 2;
    askQuestion(firstElement, difference, elementToGuessIndex);
    const answer = getAnswer();
    const correctAnswer = String(
      getCorrectAnswer(firstElement, difference, elementToGuessPosition),
    );

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
