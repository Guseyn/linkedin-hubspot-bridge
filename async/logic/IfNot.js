'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

class IfNot extends AsyncObject {
  constructor (statement, actionTree) {
    super(statement)
    this.actionTree = actionTree
  }

  syncCall () {
    return (statement) => {
      if (!statement) {
        this.propagateCache(this.actionTree)
        this.actionTree.call()
      }
      return statement
    }
  }
}

module.exports = IfNot
