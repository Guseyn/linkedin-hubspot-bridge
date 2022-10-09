'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

// Represented result is readable
class PipedReadable extends AsyncObject {
  constructor (stream, destination, options) {
    super(stream, destination, options || {
      end: true
    })
  }

  syncCall () {
    return (stream, destination, options) => {
      return stream.pipe(destination, options)
    }
  }
}

module.exports = PipedReadable
