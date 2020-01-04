import createGame from './games/engine';
import { description as brainCalcDescription, getQuestionAndAnswer as getBrainCalcQuestionAndAnswer } from './games/brain-calc';
import { description as brainEvenDescription, getQuestionAndAnswer as getBrainEvenQuestionAndAnswer } from './games/brain-even';
import { description as brainGcdDescription, getQuestionAndAnswer as getBrainGcdQuestionAndAnswer } from './games/brain-gcd';
import { description as brainPrimeDescription, getQuestionAndAnswer as getBrainPrimeQuestionAndAnswer } from './games/brain-prime';
import { description as brainProgressionDescription, getQuestionAndAnswer as getBrainProgressionQuestionAndAnswer } from './games/brain-progression';

export const brainCalcGame = createGame(brainCalcDescription, getBrainCalcQuestionAndAnswer);
export const brainEvenGame = createGame(brainEvenDescription, getBrainEvenQuestionAndAnswer);
export const brainGcdGame = createGame(brainGcdDescription, getBrainGcdQuestionAndAnswer);
export const brainPrimeGame = createGame(brainPrimeDescription, getBrainPrimeQuestionAndAnswer);
export const brainProgressionGame = createGame(
  brainProgressionDescription,
  getBrainProgressionQuestionAndAnswer,
);
