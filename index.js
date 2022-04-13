// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generate = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input" ,
        name: "title" ,
        message: "What is the name of your project?"
    },
    {
        type: "input" ,
        name: "description" ,
        message: "Describe the project"
    },
   
    {
        type: "input" ,
        name: "installation" ,
        message: "Enter installation instructions"
    },
    {
        type: "input" ,
        name: "usage" ,
        message: "Enter usage instructions"
    },
    {
        type: "list" ,
        name: "license" ,
        message: "Choose a license",
        choices: [ "Apache License 2.0", "MIT License", "Mozilla Public License 2.0", "GNU General Public License v3.0"]
        //add license options above
    },
    {
        type: "input" ,
        name: "contributing" ,
        message: "Enter contribution guidelines"
    },
    {
        type: "input" ,
        name: "tests" ,
        message: "Enter how user should run tests on application"
    },
    {
        type: "input" ,
        name: "questions" ,
        message: "Enter Github username and intructions on how people can reach you if they have questions"
    }

    
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("test.md", generate(data), function() {console.log("test")});
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)

  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    writeToFile(answers)
  })
  
  ;


}

// Function call to initialize app
init();
