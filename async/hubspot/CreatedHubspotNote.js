'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const { CreatedMap } = require(`${__root}/async/map/index`)
const { promiseToCallback } = require(`${__root}/async/async/index`)

class CreatedHubspotNote extends AsyncObject {
  constructor (hubspotClient, hubspotOwnerId, hubspotAttachmentId) {
    super(hubspotClient, hubspotOwnerId, hubspotAttachmentId)
  }

  asyncCall () {
    return (hubspotClient, hubspotOwnerId, hubspotAttachmentId, callback) => {
      promiseToCallback(
        hubspotClient.apiRequest({
          method: 'POST',
          path: '/engagements/v1/engagements?portalId=22205415',
          body: {
            engagement: {
              active: true,
              ownerId: hubspotOwnerId,
              type: 'NOTE',
              timestamp: (new Date().getTime())
            },
            associations: {
              contactIds: [],
              companyIds: [ ],
              dealIds: [ ],
              ownerIds: [ hubspotOwnerId ],
              ticketIds:[ ]
            },
            attachments: [{
              id: 22205415,
            }],
            metadata: {
              body: 'note body'
            }
          }
        })
      )(callback)
    }
  }
}

module.exports = CreatedHubspotNote
