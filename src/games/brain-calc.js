
import {
  insertBlankLine,
  getRandomNumber,
  getAnswer,
  showSuccessMessage,
  showFailureMessage,
  showEndGameMessage,
} from '..';

const describeRules = () => console.log('What is the result of the expression?');

const getRandomOperator = () => {
  const operatorIndex = getRandomNumber(0, 3);

  switch (operatorIndex) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '/';
    default:
      return '*';
  }
};
const askQuestion = (operator, firstArg, secondArg) => console.log(`Question: ${firstArg} ${operator} ${secondArg}`);
const getCorrectAnswer = (operator, firstArg, secondArg) => {
  switch (operator) {
    case '+':
      return firstArg + secondArg;
    case '-':
      return firstArg - secondArg;
    case '/':
      return Math.round(firstArg / secondArg);
    default:
      return firstArg * secondArg;
  }
};
const startGame = (userName) => {
  describeRules();
  insertBlankLine();

  for (let i = 0; i < 3; i += 1) {
    const operator = getRandomOperator();
    const firstNum = getRandomNumber(1, 10);
    const secondNum = getRandomNumber(1, 10);

    askQuestion(operator, firstNum, secondNum);
    const answer = getAnswer();
    const correctAnswer = String(getCorrectAnswer(operator, firstNum, secondNum));

    if (answer === correctAnswer) {
      showSuccessMessage();
    } else {
      showFailureMessage(answer, correctAnswer, userName);
      return;
    }
  }

  showEndGameMessage(userName);
};
export default startGame;
