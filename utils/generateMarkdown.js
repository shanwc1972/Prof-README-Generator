// The function below returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const licenseBadges = {
    "Boost Software License 1.0": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "Creative Commons Zero v1.0 Universal": "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "GNU General Public License v2.0": "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    "Apache Licence 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "BSD 3-Clause License": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "BSD 2-Clause License": "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "GNU Lesser General Public License v3.0": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "GNU Affero General Public License v3.0": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "Eclipse Public License 2.0": "[![License: EPL 1.0](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  };
 
  return licenseBadges[license] || "";
}

// The foloowing function returns the license link for a given license
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    "Boost Software License 1.0": "https://www.boost.org/LICENSE_1_0.txt",
    "Creative Commons Zero v1.0 Universal": "http://creativecommons.org/publicdomain/zero/1.0/",
    "MIT License": "https://opensource.org/licenses/MIT",
    "GNU General Public License v3.0": "https://www.gnu.org/licenses/gpl-3.0",
    "GNU General Public License v2.0": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    "Apache Licence 2.0": "https://opensource.org/licenses/Apache-2.0",
    "BSD 3-Clause License": "https://opensource.org/licenses/BSD-3-Clause",
    "BSD 2-Clause License": "https://opensource.org/licenses/BSD-2-Clause",
    "GNU Lesser General Public License v3.0": "https://www.gnu.org/licenses/lgpl-3.0",
    "GNU Affero General Public License v3.0": "https://www.gnu.org/licenses/agpl-3.0",
    "Mozilla Public License 2.0": "https://opensource.org/licenses/MPL-2.0",
    "Eclipse Public License 2.0": "https://opensource.org/licenses/EPL-1.0",
    "The Unlicense": "http://unlicense.org/"
  };
 
  return licenseLink[license] || "";
}

// The function below returns the license section of README
// If there is no license, an empty string is returned
function renderLicenseSection(markdownInput) {
  const strLicenseSection = '## License'
  const strNextSection = '## Questions'
  const nSectionStart = markdownInput.indexOf(strLicenseSection);
  const nSectionEnd = markdownInput.indexOf(strNextSection);

  return (markdownInput.substring(nSectionStart+11, nSectionEnd)).trim();
}

//The function below inserts the license badge into the readme file
function insertLicenseBadge(license, markdownInput) {
  const strDescSection = '## Description'
  const nSectionStart = markdownInput.indexOf(strDescSection);
  license = license + '\n';
  const output = [markdownInput.slice(0, nSectionStart), license, markdownInput.slice(nSectionStart)].join('');
  
  return output;
}

//The function below inserts the license details into the readme file
function insertLicenseSection(license, markdownInput) {
  const strDescSection = '## License'
  const nSectionStart = markdownInput.indexOf(strDescSection) + 11;
  license = 'This software can be redistributed and/or modified under the terms of the ';
  const output = [markdownInput.slice(0, nSectionStart), license, markdownInput.slice(nSectionStart)].join('');
  
  return output;
}

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
  insertLicenseBadge,
  insertLicenseSection,
  generateMarkdown
}
