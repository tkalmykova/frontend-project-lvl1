import readlineSync from 'readline-sync';

export const sayWelcome = () => console.log('Welcome to the Brain Games!');

export const insertBlankLine = () => console.log();

export const getUserName = () => readlineSync.question('May I have your name? ');

export const greetUser = (userName) => console.log(`Hello, ${userName}!`);

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getAnswer = () => readlineSync.question('Your answer: ');
