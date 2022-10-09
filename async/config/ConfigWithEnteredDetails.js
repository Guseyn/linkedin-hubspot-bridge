'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

class ConfigWithEnteredDetails extends AsyncObject {
  constructor (envConfig, enteredDetails) {
    super(envConfig, enteredDetails)
  }

  syncCall () {
    return (envConfig, enteredDetails) => {
      Object.keys(enteredDetails).forEach((enteredDetailName) => {
        // eslint-disable-next-line no-eval
        eval(`envConfig.${enteredDetails[enteredDetailName].path} = enteredDetails[enteredDetailName].value`)
      })
      return envConfig
    }
  }
}

module.exports = ConfigWithEnteredDetails
