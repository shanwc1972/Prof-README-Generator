// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// The following function generates the markdown for the README
function generateMarkdown(data) {
  const answers = [];
  
  console.log(data);

  //Put our answer data into an answers array
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
        answers.push(`${key}: ${data[key]}`);
    }
  };
  console.log(answers);
  
  const strMarkdown = `# ${answers[0]}
  
  ## ${answers.key[1]}
  ${answers[1]}
  
  ## ${answers.key[2]}
  ${answers[2]}
  
  ## ${answers.key[3]}
  ${answers[3]}
  
  ## ${answers.key[4]}
  ${answers[4]}
  
  ## ${answers.key[5]}
  ${answers[5]}
  
  ## License`;
  return strMarkdown;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
}
