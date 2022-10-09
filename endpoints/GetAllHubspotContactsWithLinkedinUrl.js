'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { ResponseSentWithOkResult } = require(`${__root}/async/rest/index`)
const { RetrievedAllHubspotContacts, CreatedHubspotNote, RetrievedAllHubspotOwners, HubspotResponseAsJSON } = require(`${__root}/async/hubspot/index`)
const { Endpoint, RequestBody } = require(`${__root}/async/rest/index`)
const { Logged } = require(`${__root}/async/log/index`)
const { Value } = require(`${__root}/async/json/index`)

class GetAllHubspotContactsWithLinkedinUrl extends Endpoint {
  constructor (regexp, hubspotClient) {
    super(regexp, 'GET')
    this.hubspotClient = hubspotClient
  }

  body (request, response) {
    return new Logged(
      new HubspotResponseAsJSON(
        new CreatedHubspotNote(
          this.hubspotClient,
          new Value(
            new HubspotResponseAsJSON(
              new RetrievedAllHubspotOwners(
                this.hubspotClient
              )
            ),
            'results[0].id'
          ),
          'some'
        )
      )
    ).after(
      new ResponseSentWithOkResult(
        response,
        new RetrievedAllHubspotContacts(
          this.hubspotClient
        )
      )
    )
  }
}

module.exports = GetAllHubspotContactsWithLinkedinUrl
