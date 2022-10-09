'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

class Logged extends AsyncObject {
  constructor (...objs) {
    super(...objs)
  }

  syncCall () {
    return (...objs) => {
      console.log(...objs)
    }
  }
}

module.exports = Logged
