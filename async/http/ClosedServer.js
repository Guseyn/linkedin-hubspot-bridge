'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

// Represented result is server
class ClosedServer extends AsyncObject {
  constructor (server) {
    super(server)
  }

  asyncCall () {
    return (server, callback) => {
      this.server = server
      server.close(callback)
    }
  }

  onResult () {
    return this.server
  }
}

module.exports = ClosedServer
