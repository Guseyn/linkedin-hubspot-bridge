'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

class EnteredDetails extends AsyncObject {
  constructor (keys, answers) {
    super(keys, answers)
  }

  syncCall () {
    return (keys, answers) => {
      const details = {}
      if (keys.length !== answers.length) {
        throw new Error('keys and answers have different lengths')
      }
      keys.forEach((key, index) => {
        details[key.name] = {
          value: (answers[index] || (key.defaultValue || ''))
        }
        Object.keys(key).forEach(propertyName => {
          details[key.name][propertyName] = key[propertyName]
        })
      })
      return details
    }
  }
}

module.exports = EnteredDetails
