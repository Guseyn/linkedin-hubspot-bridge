'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const { promiseToCallback } = require(`${__root}/async/async/index`)

class RetrievedAllHubspotContacts extends AsyncObject {
  constructor (hubspotClient) {
    super(hubspotClient)
  }

  asyncCall () {
    return (hubspotClient, callback) => {
      promiseToCallback(
        hubspotClient.crm.contacts.getAll()
      )(callback)
    }
  }
}

module.exports = RetrievedAllHubspotContacts
