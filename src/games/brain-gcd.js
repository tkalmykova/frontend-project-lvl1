
import {
  insertBlankLine, getRandomNumber, getAnswer,
} from '..';

const describeRules = () => console.log('Find the greatest common divisor of given numbers.');

const getCorrectAnswer = (divisior, firstNum, secondNum) => {
  let biggestDenominator = 1;
  for (let i = divisior; i > 0; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      biggestDenominator = i;
      break;
    }
  }
  return biggestDenominator;
};
const startGame = (userName) => {
  describeRules();
  insertBlankLine();
  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.round(getRandomNumber(1, 20));
    const divisior = Math.round(firstNum / 2);
    const secondNum = firstNum * divisior;
    const question = () => console.log(`${firstNum}, ${secondNum}`);
    question();
    const answer = getAnswer();
    const correctAnswer = String(getCorrectAnswer(divisior, firstNum, secondNum));

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
