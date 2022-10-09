'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

class SavedValueIntoMemoryStorage extends AsyncObject {
	constructor (memoryStorage, key, value) {
		super(memoryStorage, key, value)
	}

	syncCall () {
		return (memoryStorage, key, value) => {
			memoryStorage[key] = value
			return value
		}
	}
}

module.exports = SavedValueIntoMemoryStorage
