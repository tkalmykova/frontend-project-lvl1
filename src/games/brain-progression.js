import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils';
import createGame from '../engine';

const PROGRESSION_LENGTH = 10;

const getQuestion = (progressionStart, progressionDifference, elementToGuessIndex) => {
  let progression = '';

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    const element = progressionStart + progressionDifference * i;
    if (i === elementToGuessIndex) {
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${element}`;
    }
  }
  return progression;
};

const getCorrectAnswer = (progressionStart, progressionDifference, elementToGuessIndex) => (
  progressionStart + progressionDifference * elementToGuessIndex
);

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const progressionStart = getRandomNumber(1, 10);
  const progressionDifference = getRandomNumber(1, 50);
  const elementToGuessIndex = getRandomNumber(0, PROGRESSION_LENGTH - 1);

  const question = getQuestion(progressionStart, progressionDifference, elementToGuessIndex);
  const answer = String(
    getCorrectAnswer(progressionStart, progressionDifference, elementToGuessIndex),
  );

  return cons(question, answer);
};

export default createGame(description, getQuestionAndAnswer);
