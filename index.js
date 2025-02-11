#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";
import open from "open";

// Customize your details
const name = chalk.white.bold.red("Aashish Singh");
const handle = chalk.cyan("@aashishs4912345@gmail.com");
// handle.onClick = () => open('https://gmail.com/aashishs4912345');
const description = chalk.white(
  "I am a Software Engineer who loves to build web applications and automate things."
);
const work = `${chalk.red("Full Stack Developer")} || ${chalk.blue("Open Source Contributor")}`;
const education = chalk.white(`B.Tech in ${chalk.yellow("CSE@Manipal")}`);
const github = chalk.cyan("https://github.com/Aa-sheesh");
const linkedin = chalk.cyan("https://www.linkedin.com/in/aa-sheesh");
const linktree = chalk.cyan("https://linktr.ee/aa_sheesh");
const npxCard = chalk.white("npx aa-sheesh");

// Create the card content
const cardContent = `
                                ${name} / ${handle}


${chalk.white("About Me:")}                 ${description}
${chalk.white("Education:")}                ${education}
${chalk.white("Work:")}                     ${work}

${chalk.bgGray("GitHub:")}                   ${github}
${chalk.bgBlueBright("LinkedIn:")}                 ${linkedin}
${chalk.bgCyan("Linktree:")}                 ${linktree}

${chalk.bgRed("Virtual Business Card:")}    ${chalk.italic.dim(npxCard)}
`;

// Boxen options for styling the card
const options = {
  margin: 0,
  float: "center",
  padding: 1,
  borderStyle: "doubleSingle",
  borderColor: "blue",
  title: "@Aa-sheesh",
  titleAlignment: "center",
};

// Print the card to the terminal
console.log(boxen(cardContent, options));
console.log(boxen(chalk.blackBright("Ctrl + Click to interact with links"),{float: "center",borderColor:"black"}));

// Prompt the user for further action
inquirer
  .prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: ["Email me", "Exit"],
    },
  ])
  .then((answers) => {
    if (answers.action === "Email me") {
      console.log(chalk.green("\nOpening your default email client...\n"));
      // Open the default email client with a new email draft addressed to you.
      open("mailto:aashishs4912345@gmail.com");
    } else {
      console.log(chalk.yellow("\nThank you for visiting 😉!\n"));
      process.exit(0);
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error);
    process.exit(1);
  });
