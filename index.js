#!/usr/bin/env node
import chalk from 'chalk';
import boxen from 'boxen';
import inquirer from 'inquirer';
import open from 'open';

// Customize your details
const name = chalk.white.bold('Aashish Singh');
const handle = chalk.cyan('@aashishs4912345@gmail.com');
// handle.onClick = () => open('https://gmail.com/aashishs4912345');
const description = chalk.white('I am a Software Engineer who loves to build web applications and automate things.');
const work = chalk.white('Actively looking for new opportunities! Feel free to reach out to me.');
const github = chalk.cyan('https://github.com/Aa-sheesh');
const linkedin = chalk.cyan('https://www.linkedin.com/in/aa-sheesh');
const linktree = chalk.cyan('https://linktr.ee/aa_sheesh');

// Create the card content
const cardContent = `
${name} / ${handle}

${chalk.white('Description:')} ${description}
${chalk.white('Work:')}        ${work}
${chalk.white('GitHub:')}      ${github}
${chalk.white('LinkedIn:')}    ${linkedin}
${chalk.white('Linktree:')}    ${linktree}
`;

// Boxen options for styling the card
const options = {
    margin: 1,
    float: "center",
    padding: 2,
    borderStyle: "doubleSingle",
    borderColor: "green",
    title: "@Aa-sheesh",
    titleAlignment: "center",
};

// Print the card to the terminal
console.log(boxen(cardContent, options));

// Prompt the user for further action
inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['Email me', 'Exit']
    }
  ])
  .then((answers) => {
    if (answers.action === 'Email me') {
      console.log(chalk.green('\nOpening your default email client...\n'));
      // Open the default email client with a new email draft addressed to you.
      open('mailto:aashishs4912345@gmail.com');
    } else {
      console.log(chalk.yellow('\nThank you for visiting 😉!\n'));
      process.exit(0);
    }
  })
  .catch((error) => {
    console.error('An error occurred:', error);
    process.exit(1);
  });
