'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

class HubspotAuthUrl extends AsyncObject {
  constructor (clientId, scopes, redirectUri) {
    super(clientId, scopes, redirectUri)
  }

  syncCall () {
    return (clientId, scopes, redirectUri) => {
      return `https://app.hubspot.com/oauth/authorize?client_id=${encodeURIComponent(clientId)}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`
    }
  }
}

module.exports = HubspotAuthUrl
