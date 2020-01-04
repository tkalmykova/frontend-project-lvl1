import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { print, printBlankLine } from '../utils';

const sayWelcome = () => print('Welcome to the Brain Games!');
const getUserName = () => readlineSync.question('May I have your name? ');
const greetUser = (userName) => print(`Hello, ${userName}!`);
const showDescription = (text) => print(text);
const showQuestion = (questionText) => print(`Question: ${questionText}`);
const getAnswer = () => readlineSync.question('Your answer: ');
const showSuccessMessage = () => print('Correct!');
const showFailureMessage = (answer, correctAnswer, userName) => print(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}`);
const showEndGameMessage = (userName) => print(`Congratulations, ${userName}!`);

const createGame = (description, getQuestionAndAnswer) => () => {
  sayWelcome();
  printBlankLine();

  const userName = getUserName();
  greetUser(userName);
  printBlankLine();

  showDescription(description);
  printBlankLine();

  for (let i = 0; i < 3; i += 1) {
    const questionAnswerPair = getQuestionAndAnswer();
    const question = car(questionAnswerPair);
    const correctAnswer = cdr(questionAnswerPair);

    showQuestion(question);
    const answer = getAnswer();

    if (answer === String(correctAnswer)) {
      showSuccessMessage();
    } else {
      showFailureMessage(answer, correctAnswer, userName);
      return;
    }
    printBlankLine();
  }

  showEndGameMessage(userName);
};

export default createGame;
