import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils';
import createGame from '../engine';

const DISPLAYABLE_ELEMENTS_COUNT = 10;

const getProgression = (start, difference, elementToGuessIndex) => {
  let progression = '';

  for (let i = 0; i < DISPLAYABLE_ELEMENTS_COUNT; i += 1) {
    const element = start + difference * i;
    if (i === elementToGuessIndex) {
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${element}`;
    }
  }
  return progression;
};

const getQuestion = (progressionStart, progressionDifference, elementToGuessIndex) => `${getProgression(progressionStart, progressionDifference, elementToGuessIndex)}`;

const getCorrectAnswer = (progressionStart, progressionDifference, i) => {
  const elementToGuess = progressionStart + progressionDifference * i;
  return elementToGuess;
};

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const progressionStart = getRandomNumber(1, 10);
  const progressionDifference = getRandomNumber(1, 50);
  const elementToGuessIndex = getRandomNumber(0, DISPLAYABLE_ELEMENTS_COUNT);

  const question = getQuestion(progressionStart, progressionDifference, elementToGuessIndex);
  const answer = String(
    getCorrectAnswer(progressionStart, progressionDifference, elementToGuessIndex),
  );

  return cons(question, answer);
};

export default createGame(description, getQuestionAndAnswer);
