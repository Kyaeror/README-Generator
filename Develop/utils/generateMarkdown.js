function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ### ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  
  ### ${data.installation}

  ## Usage

  ### ${data.usage}

  ## License

 ${licenseMessage}

  ## Contributing

  ### ${data.contribution}

  ## Tests

  ### ${data.test}

  ## Questions

  ### If you are interested in my other work or need to reach out to me please follow my github page or email me
  ### Github: https://github.com/${data.username}
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
