'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const { promiseToCallback } = require(`${__root}/async/async/index`)

class HubspotResponseAsJSON extends AsyncObject {
  constructor (hubspotResponse) {
    super(hubspotResponse)
  }

  asyncCall () {
    return (hubspotResponse, callback) => {
      promiseToCallback(
        hubspotResponse.json()
      )(callback)
    }
  }
}

module.exports = HubspotResponseAsJSON
