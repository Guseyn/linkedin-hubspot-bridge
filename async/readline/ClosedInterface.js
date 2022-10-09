'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

// Represented result is interface
class ClosedInterface extends AsyncObject {
  constructor (Interface) {
    super(Interface)
  }

  syncCall () {
    return (Interface) => {
      Interface.close()
      return Interface
    }
  }
}

module.exports = ClosedInterface
