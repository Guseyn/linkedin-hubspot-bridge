'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const { promiseToCallback } = require(`${__root}/async/async/index`)

class GeneratedHubspotAccessAndRefreshToken extends AsyncObject {
  constructor (hubspotClient, clientId, clientSecret, authCode, redirectUri) {
    super(hubspotClient, clientId, clientSecret, authCode, redirectUri)
  }

  asyncCall () {
    return (hubspotClient, clientId, clientSecret, authCode, redirectUri, callback) => {
      promiseToCallback(
        hubspotClient.oauth.tokensApi.createToken(
          'authorization_code',
          authCode,
          redirectUri,
          clientId,
          clientSecret
        )
      )(callback)
    }
  }
}

module.exports = GeneratedHubspotAccessAndRefreshToken
