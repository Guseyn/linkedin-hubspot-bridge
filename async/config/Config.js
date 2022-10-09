'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { ParsedJSON } = require(`${__root}/async/json/index`)
const { ReadDataByPath } = require(`${__root}/async/fs/index`)

class Config {
  constructor () {
    return new ParsedJSON(
      new ReadDataByPath(
        './config.json'
      )
    )
  }
}

module.exports = Config
