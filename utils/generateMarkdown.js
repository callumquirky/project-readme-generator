const createLicenseBadge = (license) => {
  if (license !== "none"){
    return `![Github license](https://img.shields.io/badge/license-${license}-blueviolet.svg)`
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

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [User](#user)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License
  
  This project uses the ${data.license} license.

  ## Contributing

  ${data.contribution}

  ## Tests
  ${data.tests}

  ## User
  
  By ${data.username}, contact me at ${data.email}
  `;
}



module.exports = generateMarkdown;
