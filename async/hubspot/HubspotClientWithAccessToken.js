'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const { promiseToCallback } = require(`${__root}/async/async/index`)

class HubspotClientWithAccessToken extends AsyncObject {
  constructor (hubspotClient, accessToken) {
    super(hubspotClient, accessToken)
  }

  syncCall () {
    return (hubspotClient, accessToken) => {
      hubspotClient.setAccessToken(accessToken)
      return hubspotClient
    }
  }
}

module.exports = HubspotClientWithAccessToken
