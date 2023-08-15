//invokes inquirer
const inquirer = require('inquirer');
//fs is for 'file system'
const fs = require('fs');


//this is an array of questions set up based on inquirer docs
const questions = [
    {
        type: 'input',
        name: 'fullName',
        message: 'What is your full name? (for questions section of README)'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (for questions section of README)'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (for questions section of README)'
    },
    {
        type: 'input',
        name: 'contactRules',
        message: 'When a user reaches out, let them know how you prefer to be contacted; Ex. "I would like users to reach out via my ("email address" or "github")'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Write a description of your project. **When you are ready to save; press esc, type :wq and press enter'
    },
    {
        type: 'editor',
        name: 'installation',
        message: 'Write the installation process of this application. **When you are ready to save; press esc, type :wq and press enter'
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Explain how this application can be used. **When you are ready to save; press esc, type :wq and press enter'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What type of license do you need for this project?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Would you like others to contribute to this project? If NO, write a short description why not; If YES, write a short description how others can contribute and then add features to your github repo allowing pull requests to be created but only approved by code owner.'
    },
    {
        type: 'editor',
        name: 'troubleshooting',
        message: 'How might a user troubleshoot this application? **When you are ready to save; press esc, type :wq and press enter'
    }
];

//writeToFile() doing exactly what it needs to!
function writeToFile() {
    //this makes it so that when you type node index.js into the terminal (after cd'ing into Develop folder)- the questions prompt the user
    return inquirer.prompt(questions)
    .then((questions) => {
        console.log(questions)
        //this is creating a README.md file and is grabbing the user's input to fill in the empty space
        fs.writeFile("README.md", `
# ${questions.title}
${questions.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

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
Repository Owner: ${questions.fullName} \n
Email Address: ${questions.email} \n
[Github profile](https://github.com/${questions.github}) \n
${questions.contactRules}
        `, 
        //this is creating a catch incase things go wrong while using this application- shouldn't happen though lol
        (err) =>
          err ? console.log(err) : console.log('Your README.md file was created!')
        );
      });
};

//this calls the above function
writeToFile();

// TODO: Create a function to initialize app


// init();

/****************************************************************************************************************************/
