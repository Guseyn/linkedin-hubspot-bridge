'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

class ValueIntoMemoryStorage extends AsyncObject {
	constructor (memoryStorage, key) {
		super(memoryStorage, key)
	}

	syncCall () {
		return (memoryStorage, key) => {
      return memoryStorage[key]
		}
	}
}

module.exports = ValueIntoMemoryStorage

