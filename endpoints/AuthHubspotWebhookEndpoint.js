'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { as } = require(`${__root}/async/core/index`)
const {
  ResponseWithHeader,
  ResponseWithStatusCode,
  ResponseWithStatusMessage,
  WrittenResponse,
  EndedResponse
} = require(`${__root}/async/http/index`)
const { InParallel } = require(`${__root}/async/async/index`)
const { RequestBodyAsJson } = require(`${__root}/async/rest/index`)
const { Endpoint } = require(`${__root}/async/rest/index`)
const { Logged } = require(`${__root}/async/log/index`)
const { Value } = require(`${__root}/async/json/index`)
const { QueryObjectFromUrl } = require(`${__root}/async/url/index`)
const { GeneratedHubspotAccessAndRefreshToken, HubspotClientWithAccessToken } = require(`${__root}/async/hubspot/index`)
const { SavedValueIntoMemoryStorage } = require(`${__root}/async/memory-storage/index`)
const { ConcatenatedStrings } = require(`${__root}/async/string/index`)

class AuthHubspotWebhookEndpoint extends Endpoint {
  constructor (regexp, hubspotClient, hubspotClientId, hubspotClientSecret, hubspotRedirectUri, memoryStorage) {
    super(regexp, 'GET')
    this.hubspotClient = hubspotClient
    this.hubspotClientId = hubspotClientId
    this.hubspotClientSecret = hubspotClientSecret
    this.hubspotRedirectUri = hubspotRedirectUri
    this.memoryStorage = memoryStorage
  }

  body (request, response) {
    return new QueryObjectFromUrl(
      request.url
    ).as('REQUEST_QUERY_OBJECT').after(
      new Value(
        as('REQUEST_QUERY_OBJECT'),
        'code'
      ).as('AUTH_CODE').after(
        new GeneratedHubspotAccessAndRefreshToken(
          this.hubspotClient,
          this.hubspotClientId,
          this.hubspotClientSecret,
          as('AUTH_CODE'),
          this.hubspotRedirectUri
        ).as('HUBSPOT_ACCESS_AND_REFRESH_TOKEN').after(
          new InParallel(
            new HubspotClientWithAccessToken(
              this.hubspotClient,
              new Value(
                as('HUBSPOT_ACCESS_AND_REFRESH_TOKEN'),
                'accessToken'
              )
            ),
            new SavedValueIntoMemoryStorage(
              this.memoryStorage,
              'hubspotRefreshToken',
              new Value(
                as('HUBSPOT_ACCESS_AND_REFRESH_TOKEN'),
                'refreshToken'
              )
            )
          ).after(
            new EndedResponse(
              new WrittenResponse(
                new ResponseWithHeader(
                  new ResponseWithStatusMessage(
                    new ResponseWithStatusCode(response, 200), 'ok.'
                  ),
                  'Content-Type', 'text/plain'
                ),
                'We just got access token and save refresh token. That is all we need for auth. Now go back to index page and follow further steps. https://127.0.0.1:3000'
              )
            )
          )
        )
      )
    )
  }
}

module.exports = AuthHubspotWebhookEndpoint
