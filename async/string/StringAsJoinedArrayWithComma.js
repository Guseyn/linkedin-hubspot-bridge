'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

class StringAsJoinedArrayWithComma extends AsyncObject {
  constructor (array) {
    super(array)
  }

  syncCall () {
    return (array) => {
      return array.join(', ')
    }
  }
}

module.exports = StringAsJoinedArrayWithComma
