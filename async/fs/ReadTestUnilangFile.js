'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)
const fs = require('fs')

class ReadTestUnilangFile extends AsyncObject {
  constructor (testName) {
    super(testName)
  }

  asyncCall () {
    return (testName, callback) => {
      fs.readFile(`${__root}/web-app/unilang/visual-tests/${testName}.txt`, { encoding: 'utf8' }, callback)
    }
  }
}

module.exports = ReadTestUnilangFile
