'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const { promiseToCallback } = require(`${__root}/async/async/index`)
const hubspot = require('@hubspot/api-client')

class CreatedHubspotClient extends AsyncObject {
  constructor (developerApiKey) {
    super(developerApiKey)
  }

  syncCall () {
    return (developerApiKey, callback) => {
      return new hubspot.Client({ developerApiKey })
    }
  }
}

module.exports = CreatedHubspotClient
