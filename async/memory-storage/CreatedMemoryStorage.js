'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

class CreatedMemoryStorage extends AsyncObject {
	constructor () {
    super()
  }

  syncCall () {
    return () => {
      return {}
    }
  }
}

module.exports = CreatedMemoryStorage
