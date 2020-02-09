import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils';
import createGame from '../engine';

const DISPLAYABLE_ELEMENTS_COUNT = 10;

const getProgressionElement = (progressionStart, progressionDifference, n) => (
  progressionStart + progressionDifference * n
);

const getQuestion = (progressionStart, progressionDifference, elementToGuessIndex) => {
  let progression = '';

  for (let i = 0; i < DISPLAYABLE_ELEMENTS_COUNT; i += 1) {
    const element = getProgressionElement(progressionStart, progressionDifference, i);
    if (i === elementToGuessIndex) {
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${element}`;
    }
  }
  return progression;
};

const getCorrectAnswer = (progressionStart, progressionDifference, elementToGuessIndex) => (
  getProgressionElement(progressionStart, progressionDifference, elementToGuessIndex)
);

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const progressionStart = getRandomNumber(1, 10);
  const progressionDifference = getRandomNumber(1, 50);
  const elementToGuessIndex = getRandomNumber(0, DISPLAYABLE_ELEMENTS_COUNT - 1);

  const question = getQuestion(progressionStart, progressionDifference, elementToGuessIndex);
  const answer = String(
    getCorrectAnswer(progressionStart, progressionDifference, elementToGuessIndex),
  );

  return cons(question, answer);
};

export default createGame(description, getQuestionAndAnswer);
