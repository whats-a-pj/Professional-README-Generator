// TODO: Include packages needed for this application
//node modules
const inquirer = require('inquirer');
const fs = require('fs');

// const content = 'something is working here, dunno what tho :) yay';

// try {
//   fs.writeFileSync('/Users/pjrasmussen/bootcamp/Assignments/week-9/Professional-README-Generator/Develop/README.md', content);
//   // file written successfully
// } catch (err) {
//   console.error(err);
// }

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'fullName',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (for questions section)'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (for questions section)'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Write a description of your project. When you are ready to save; press esc, type :wq and press enter'
    },
    {
        type: 'editor',
        name: 'installation',
        message: 'Write a step-by-step of how a user might install this application. When you are ready to save; press esc, type :wq and press enter'
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Explain this applications main purpose and how it can be used. When you are ready to save; press esc, type :wq and press enter'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What type of license do you need for this project?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Would you like others to contribute to this project? (Y/N) If yes, make sure you add features to your github repo only allowing pull requests to be made instead of having changes go straight to main.'
    },
    {
        type: 'editor',
        name: 'troubleshooting',
        message: 'How might a user run a test or troubleshoot this application? When you are ready to save; press esc, type :wq and press enter'
    }
];

function writeToFile() {
    return inquirer.prompt(questions)
    .then((questions) => {
        console.log(questions)
        fs.writeFile("README.md", `
# ${questions.title}
${questions.description}

## Table of Contents
* (#${questions.installation})
* (#${questions.usage})
* (#${questions.license})
* (#${questions.contributions})
* (#${questions.troubleshooting})

## Installation
${questions.installation}

## Usage
${questions.usage}

## License
${questions.license}

## Contributing
${questions.contributions}

## Tests
${questions.troubleshooting}

## Questions
${questions.fullName}
${questions.email}
${questions.github}
        `, (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
};


//["What is your project title?", "What is the description of your project?", "What do you want inside the Table of Contents?", "Please type your installation instructions", "Please type what the usage of this project is", "What kind of license would you like?", "What are YOUR guidelines on contributions to this application", "What tests can a user run when troubleshooting this application?"];
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return inquirer.prompt(questions)
// }
//-----   ./README.md createElement?? or text content? w/ markdown syntax like ##Heading1 and #Heading2
// TODO: Create a function to initialize app
// function init() {
    
// }
//if userAnswers === questions[0] return writeToFile()

// Function call to initialize app
writeToFile();
// init();



/****************************************************************************************************************************/

// var readMeFile = "LINK README HERE AND PASS AS PARAMETER??"
// //["What is your project title?", "What is the description of your project?", "What do you want inside the Table of Contents?", "Please type your installation instructions", "Please type what the usage of this project is", "What kind of license would you like?", "What are YOUR guidelines on contributions to this application", "What tests can a user run when troubleshooting this application?"];
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    
// }
// //-----   ./README.md createElement?? or text content? w/ markdown syntax like ##Heading1 and #Heading2
// // TODO: Create a function to initialize app
// function init() {
//     //need to make a variable for user input(response)
//     return inquirer.prompt(questions).then(response)
//     //can i nest a function here that will run writeToFile()?
// //like maybe a for loop that loops through questions
// //if userAnswers === questions[0] return writeToFile()
// }
// // Function call to initialize app
// writeToFile();
// init();


// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   }); console.log("test test")
