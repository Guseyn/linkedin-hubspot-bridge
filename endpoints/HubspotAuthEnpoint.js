'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const {
  ResponseWithWrittenHead,
  EndedResponse
} = require(`${__root}/async/http/index`)
const { HubspotAuthUrl } = require(`${__root}/async/hubspot/index`)
const { CreatedMap } = require(`${__root}/async/map/index`)
const { Endpoint } = require(`${__root}/async/rest/index`)

class HubspotAuthEnpoint extends Endpoint {
  constructor (regexp, hubspotClientId, hubspotScopes, hubspotRedirectUri) {
    super(regexp, 'GET')
    this.hubspotClientId = hubspotClientId
    this.hubspotScopes = hubspotScopes
    this.hubspotRedirectUri = hubspotRedirectUri
  }

  body (request, response) {
    return new EndedResponse(
      new ResponseWithWrittenHead(
        response,
        301,
        new CreatedMap(
          'Location', new HubspotAuthUrl(
            this.hubspotClientId,
            this.hubspotScopes,
            this.hubspotRedirectUri
          )
        )
      )
    )
  }
}

module.exports = HubspotAuthEnpoint
