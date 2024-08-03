// The function below returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "BSD 3-Clause": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "BSD 2-Clause": "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "LGPL v3": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "AGPL v3": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    "MPL 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "EPL 1.0": "[![License: EPL 1.0](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
};
 
  return licenseBadges[license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// The following function generates the markdown for the README
function generateMarkdown(data) {
  const answers = [];
  let myAnswer = {};

  console.log(data);


  //Put our answer data into an answers array
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
        myAnswer.key = key;
        myAnswer.value = data[key]; 
        answers.push(myAnswer);
        myAnswer = {};
    }
  };
   
  const strMarkdown = `# ${answers[0].value}
  
  ## ${answers[1].key}
  ${answers[1].value}

  ## Table of contents
  - [${answers[2].key}](#installation)
  - [${answers[3].key}](#usage)
  - [${answers[4].key}](#contributing)
  - [${answers[5].key}](#tests)
  - [${answers[6].key}](#license)
  - [Questions](#questions)
  
  ## ${answers[2].key}
  ${answers[2].value}
  
  ## ${answers[3].key}
  ${answers[3].value}
  
  ## ${answers[4].key}
  ${answers[4].value}
  
  ## ${answers[5].key}
  ${answers[5].value}
  
  ## ${answers[6].key}
  ${answers[6].value}
  
  ## Questions
  Do you have any questions? If so please forward them to the GIT username: ${answers[7].value}, or e-mail them to: ${answers[8].value}
  `;
  return strMarkdown;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
}
