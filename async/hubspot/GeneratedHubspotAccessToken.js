'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const { promiseToCallback } = require(`${__root}/async/async/index`)

class GeneratedHubspotAccessToken extends AsyncObject {
  constructor (hubspotClient, clientId, clientSecret, refreshToken) {
    super(hubspotClient, clientId, clientSecret, refreshToken)
  }

  asyncCall () {
    return (hubspotClient, clientId, clientSecret, refreshToken, callback) => {
      promiseToCallback(
        hubspotClient.oauth.tokensApi.createToken(
          'refresh_token',
          undefined,
          undefined,
          clientId,
          clientSecret, 
          refreshToken
        )
      )(callback)
    }
  }
}

module.exports = GeneratedHubspotAccessToken
