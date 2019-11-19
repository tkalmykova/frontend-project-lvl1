import readlineSync from 'readline-sync';

export const sayWelcome = () => console.log('Welcome to the Brain Games!');

export const insertBlankLine = () => console.log();

export const describeRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const getUserName = () => readlineSync.question('May I have your name? ');

export const greetUser = (userName) => console.log(`Hello, ${userName}!`);
