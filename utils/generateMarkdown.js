// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge 
  switch (license) {
    case "Apache License 2.0":
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      
      break;

      case "MIT License":
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

        break;

      case "Mozilla Public License 2.0":
        badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

        break;

      case "GNU General Public License v3.0":
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

        break;
  
    default:
      break;

  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  >## Description
  ${data.description}

  >## Table of Contents
  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)
  
  [Questions](#questions)

  >## Installation
  ${data.installation}

  >## Usage
  ${data.usage}

  >## License
  ${renderLicenseBadge(data.license)}

  >## Contributing
  ${data.contributing}

  >## Tests
  ${data.tests}

  >## Questions
  ${data.questions}

  
`;
}



module.exports = generateMarkdown;
