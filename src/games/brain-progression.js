import { cons } from '@hexlet/pairs';
import getRandomNumber from '../utils';
import createGame from '../engine';

const PROGRESSION_LENGTH = 10;

const getQuestion = (start, difference, hiddenElementIndex) => {
  let progression = '';

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    const element = start + difference * i;
    if (i === hiddenElementIndex) {
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${element}`;
    }
  }
  return progression;
};

const getCorrectAnswer = (start, difference, hiddenElementIndex) => (
  start + difference * hiddenElementIndex
);

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const start = getRandomNumber(1, 10);
  const difference = getRandomNumber(1, 50);
  const hiddenElementIndex = getRandomNumber(0, PROGRESSION_LENGTH - 1);

  const question = getQuestion(start, difference, hiddenElementIndex);
  const answer = String(
    getCorrectAnswer(start, difference, hiddenElementIndex),
  );

  return cons(question, answer);
};

export default createGame(description, getQuestionAndAnswer);
