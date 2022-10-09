'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

class TwoStringsAreEqual extends AsyncObject {
  constructor (firstString, secondString) {
    super(firstString, secondString)
  }

  syncCall () {
    return (firstString, secondString) => {
      return firstString === secondString
    }
  }
}

module.exports = TwoStringsAreEqual
