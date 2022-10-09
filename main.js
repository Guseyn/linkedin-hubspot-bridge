'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { as } = require(`${__root}/async/core/index`)
const { InParallel } = require(`${__root}/async/async/index`)
const { Created } = require(`${__root}/async/created/index`)
const { Config, ConfigWithEnteredDetails } = require(`${__root}/async/config/index`)
const { SafeReadDataByPath } = require(`${__root}/async/fs/index`)
const { CreatedInterface, AnswersOfQuestionedInterface, ClosedInterface, EnteredDetails } = require(`${__root}/async/readline/index`)
const { Logged } = require(`${__root}/async/log/index`)
const { CreatedHubspotClient } = require(`${__root}/async/hubspot/index`)
const { Value } = require(`${__root}/async/json/index`)
const { CreatedServer, ListeningServer, MessageForConnectedServer } = require(`${__root}/async/http/index`)
const { RestApi, InternalServerErrorEvent, ServingFilesEndpoint } = require(`${__root}/async/rest/index`)
const { CreatedMap } = require(`${__root}/async/map/index`)
const { ResponseFromHttpsRequest } = require(`${__root}/async/https/index`) 
const { CreatedMemoryStorage } = require(`${__root}/async/memory-storage/index`)

const CustomIndexEndpoint = require('./endpoints/CustomIndexEndpoint')
const CustomNotFoundEndpoint = require('./endpoints/CustomIndexEndpoint')

const AuthHubspotWebhookEndpoint = require('./endpoints/AuthHubspotWebhookEndpoint')
const MethodNotAllowedEndpoint = require('./endpoints/MethodNotAllowedEndpoint')
const HubspotAuthEnpoint = require('./endpoints/HubspotAuthEnpoint')
const GetAllHubspotContactsWithLinkedinUrl = require('./endpoints/GetAllHubspotContactsWithLinkedinUrl')

const domain = require('domain')

const ENTERED_DETAILS_KEYS = [
  { name: 'hubspotClientSecret', path: 'hubspotClientSecret' },
  { name: 'hubspotApiKey', path: 'hubspotApiKey' }
]
const INDEX_PAGE_PATH = './html/index.html'
const NOT_FOUND_PAGE_PATH = './html/404.html'

const NOT_FOUND_ENDPOINT = new CustomNotFoundEndpoint(new RegExp(/\/not-found/), NOT_FOUND_PAGE_PATH)

const urlToFsMapper = (url) => {
  const parts = url.split('?')[0].split('/').filter(part => part !== '')
  return path.join('web-app', ...parts)
}

new CreatedInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
}).as('IO_INTERFACE').after(
  new EnteredDetails(
    ENTERED_DETAILS_KEYS,
    new AnswersOfQuestionedInterface(
      as('IO_INTERFACE'), 'Hubspot api key: ',
      new AnswersOfQuestionedInterface(
        as('IO_INTERFACE'), 'Hubspot client secret: '
      )
    )
  ).as('ENTERED_DETAILS').after(
    new ClosedInterface(
      as('IO_INTERFACE')
    ).after(
      new ConfigWithEnteredDetails(
        new Config(),
        as('ENTERED_DETAILS')
      ).as('CONFIG_WITH_ENTERED_DETAILS').after(
        new InParallel(
          new Value(
            as('CONFIG_WITH_ENTERED_DETAILS'),
            'protocol'
          ).as('PROTOCOL'),
          new Value(
            as('CONFIG_WITH_ENTERED_DETAILS'),
            'host'
          ).as('HOST'),
          new Value(
            as('CONFIG_WITH_ENTERED_DETAILS'),
            'port'
          ).as('PORT'),
          new Value(
            as('CONFIG_WITH_ENTERED_DETAILS'),
            'hubspotClientId'
          ).as('HUBSPOT_CLIENT_ID'),
          new Value(
            as('CONFIG_WITH_ENTERED_DETAILS'),
            'hubspotApiKey'
          ).as('HUBSPOT_API_KEY'),
          new Value(
            as('CONFIG_WITH_ENTERED_DETAILS'),
            'hubspotClientSecret'
          ).as('HUBSPOT_CLIENT_SECRET'),
          new Value(
            as('CONFIG_WITH_ENTERED_DETAILS'),
            'hubspotScopes'
          ).as('HUBSPOT_SCOPES'),
          new Value(
            as('CONFIG_WITH_ENTERED_DETAILS'),
            'hubspotAuthWebhookUrl'
          ).as('HUBSPOT_AUTH_WEBHOOK_URL')
        ).after(
          new InParallel(
            new CreatedHubspotClient(
              new Value(
                as('CONFIG_WITH_ENTERED_DETAILS'),
                'hubspotApiKey'
              )
            ).as('HUBSPOT_CLIENT'),
            new CreatedMemoryStorage().as('MEMORY_STORAGE')
          ).after(
            new ListeningServer(
              new CreatedServer(
                as('PROTOCOL'),
                domain,
                new InternalServerErrorEvent(),
                new RestApi(
                  new CustomIndexEndpoint(INDEX_PAGE_PATH, NOT_FOUND_ENDPOINT),
                  new ServingFilesEndpoint(new RegExp(/^\/html/), urlToFsMapper, {}, NOT_FOUND_ENDPOINT),
                  new Created(HubspotAuthEnpoint, new RegExp(/^\/hubspot-auth/), as('HUBSPOT_CLIENT_ID'), as('HUBSPOT_SCOPES'), as('HUBSPOT_AUTH_WEBHOOK_URL')),
                  new Created(AuthHubspotWebhookEndpoint, new RegExp(/^\/hubspot-webhook-auth/), as('HUBSPOT_CLIENT'), as('HUBSPOT_CLIENT_ID'), as('HUBSPOT_CLIENT_SECRET'), as('HUBSPOT_AUTH_WEBHOOK_URL'), as('MEMORY_STORAGE')),
                  new Created(GetAllHubspotContactsWithLinkedinUrl, new RegExp(/^\/all-hubspot-contacts-with-linkedin-url/), as('HUBSPOT_CLIENT')),
                  new MethodNotAllowedEndpoint(new RegExp(/\/method-not-allowed/))
                ),
                new CreatedMap(
                  'cert', new SafeReadDataByPath(
                    new Value(
                      as('CONFIG_WITH_ENTERED_DETAILS'),
                      'cert'
                    ),
                    { encoding: 'utf-8' }
                  ),
                  'key', new SafeReadDataByPath(
                    new Value(
                      as('CONFIG_WITH_ENTERED_DETAILS'),
                      'key'
                    ),
                    { encoding: 'utf-8' }
                  )
                )
              ).as('PROXY_SERVER'),
              new CreatedMap(
                'port', as('PORT'),
                'host', as('HOST')
              )
            ).after(
              new Logged(
                new MessageForConnectedServer(
                  as('PROTOCOL'),
                  as('HOST'),
                  as('PORT'),
                  process.pid
                )
              )
            )
          )
        )
      )
    )
  )
).call()
