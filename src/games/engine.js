import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const createGame = (description, getQuestionAndAnswer) => () => {
  console.log('Welcome to the Brain Games!');
  console.log();

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();

  console.log(description);
  console.log();

  for (let i = 0; i < 3; i += 1) {
    const questionAnswerPair = getQuestionAndAnswer();
    const question = car(questionAnswerPair);
    const correctAnswer = cdr(questionAnswerPair);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}`);
      return;
    }
    console.log();
  }

  console.log(`Congratulations, ${userName}!`);
};

export default createGame;
