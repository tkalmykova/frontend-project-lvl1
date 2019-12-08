#!/usr/bin/env node
import { sayWelcome, insertBlankLine, getAnswer, getUserName, greetUser } from '..';
import startBrainEvenGame from '../games/brain-even';
import startBrainCalcGame from '../games/brain-calc';
import startBrainGcdGame from '../games/brain-gcd';
import startBrainProgressionGame from '../games/brain-progression';
import startBrainPrimeGame from '../games/brain-prime';

const describeRules = () => console.log('Choose the game you want to play!');
const askQuestion = () => console.log(' 1. Even-game \n 2. Calc-game \n 3. Gcd-game \n 4. Progression-game \n 5. Prime-game \n');

sayWelcome();
insertBlankLine();
const userName = getUserName();
greetUser(userName);

describeRules();
insertBlankLine();
askQuestion();
const answer = getAnswer();
insertBlankLine();

switch (answer) {
  case '1':
    startBrainEvenGame(userName);
    break;
  case '2':
    startBrainCalcGame(userName);
    break;
  case '3':
    startBrainGcdGame(userName);
    break;
  case '4':
    startBrainProgressionGame(userName);
    break;
  case '5':
    startBrainPrimeGame(userName);
    break;
  default:
    break;
}
