
'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { Endpoint } = require(`${__root}/async/rest/index`)

class InternalServerErrorEndpoint extends Endpoint {
  constructor (regexpUrl) {
    super(regexpUrl, 'GET')
  }

  body (request, response) {
    throw new Error('internal server error')
  }
}

module.exports = InternalServerErrorEndpoint
