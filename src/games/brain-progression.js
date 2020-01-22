import { cons } from '@hexlet/pairs';
import { getRandomNumber } from '../utils';

const PROGRESSION_LENGTH = 9;

const displayProgression = (firstElement, difference, elementToGuessIndex) => {
  let previousElement = firstElement;
  let str = `${firstElement}`;
  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
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

const getQuestion = (firstElement, difference, elementToGuessIndex) => `${displayProgression(firstElement, difference, elementToGuessIndex)}`;

const getCorrectAnswer = (firstElement, difference, n) => {
  const elementToGuess = firstElement + (n - 1) * difference;
  return elementToGuess;
};

export const description = 'What number is missing in the progression?';

export const getQuestionAndAnswer = () => {
  const firstElement = getRandomNumber(1, 10);
  const difference = getRandomNumber(1, 50);
  const elementToGuessIndex = getRandomNumber(0, 9);
  const elementToGuessPosition = elementToGuessIndex + 2;

  const question = getQuestion(firstElement, difference, elementToGuessIndex);
  const answer = getCorrectAnswer(firstElement, difference, elementToGuessPosition);

  return cons(question, answer);
};
