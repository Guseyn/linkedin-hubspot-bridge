'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

// Represented result is boolean
class IsFile extends AsyncObject {
  constructor (stats) {
    super(stats)
  }

  syncCall () {
    return (stats) => {
      return stats.isFile()
    }
  }
}

module.exports = IsFile
