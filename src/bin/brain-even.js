import readlineSync from 'readline-sync';

const sayWelcome = () => console.log('Welcome to the Brain Games!');

const insertBlankLine = () => console.log();

const describeRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getUserName = () => readlineSync.question('May I have your name? ');

const greetUser = (userName) => console.log(`Hello, ${userName}!`);

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const askQuestion = (number) => console.log(`Question: ${number}`);

const getAnswer = () => readlineSync.question('Your answer: ');

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const startGame = () => {
  sayWelcome();
  describeRules();
  insertBlankLine();

  const userName = getUserName();
  greetUser(userName);
  insertBlankLine();

  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber(0, 999);
    askQuestion(num);

    const answer = getAnswer();
    const correctAnswer = getCorrectAnswer(num);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

startGame();
