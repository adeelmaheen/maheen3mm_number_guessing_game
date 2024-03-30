#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
// 1) computer will generate a random number
// 2)  user input for guessing number
// 3)  comparing random number to random number 
const randomNumber = Math.floor(Math.random() * 6 + 1);
const ask = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: chalk.italic.bold.green("Please guess a number between 1 to 6")
    }
]);
console.log(ask);
if (ask.userguessedNumber === randomNumber) {
    console.log(chalk.bold.italic.green("Congratulations! you guessed a right number."));
}
else if (ask.userguessedNumber < 3) {
    console.log("your guess is to down");
}
else if (ask.userguessedNumber > 6) {
    console.log("your guess is very up");
}
else {
    console.log(chalk.bold.italic.green("Oops! Wrong number,Try Again."));
}
