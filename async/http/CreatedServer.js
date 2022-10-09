'use strict'

const http = require('http')
const https = require('https')

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

const supportedProtocols = {
  http,
  https
}

class CreatedServer extends AsyncObject {
  constructor (protocol, domain, errorEvent, requestListener, options = {}) {
    super(protocol, domain, errorEvent, requestListener, options)
  }

  syncCall () {
    return (protocol, domain, errorEvent, requestListener, options) => {
      if (Object.keys(supportedProtocols).indexOf(protocol) !== -1) {
        const server = supportedProtocols[protocol].createServer(options, (request, response) => {
          const d = domain.create()
          d.on('error', (err) => {
            try {
              errorEvent(err, request, response)
              server.close()
            } catch (err2) {
              throw err2
            }
          })
          d.add(request)
          d.add(response)
          d.run(() => {
            requestListener(request, response)
          })
        })
        return server
      } else {
        throw new Error(`Protocol ${protocol} is not supported.`)
      }
    }
  }
}

module.exports = CreatedServer
