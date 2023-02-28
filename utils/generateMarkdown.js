const createLicenseBadge = (license) => {
  if (license !== "none"){
    return `![Github license](https://img.shields.io/badge/license-${license}-blueviolet.svg)`
  }
  return;
}

const createLicenseLink = (license) =>{
  if(license !== "none"){
    return `\n* [License](#license\n)`
  }
  return;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${createLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#ssage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License
  ${createLicenseLink(data.license)}

  ## Contributing

  ${data.contribution}

  ## Tests
  ${data.tests}
  
  By ${data.username}, contact me at ${data.email}
  `;
}



module.exports = generateMarkdown;
