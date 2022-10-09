'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const { promiseToCallback } = require(`${__root}/async/async/index`)

class RetrievedAllHubspotOwners extends AsyncObject {
  constructor (hubspotClient) {
    super(hubspotClient)
  }

  asyncCall () {
    return (hubspotClient, callback) => {
      promiseToCallback(
        hubspotClient.apiRequest({
          method: 'GET',
          path: '/crm/v3/owners/'
        })
      )(callback)
    }
  }
}

module.exports = RetrievedAllHubspotOwners
