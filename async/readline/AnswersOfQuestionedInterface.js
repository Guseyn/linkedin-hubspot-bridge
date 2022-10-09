'use strict'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

// Represented result is string
class AnswersOfQuestionedInterface extends AsyncObject {
  constructor (Interface, query, previousAnswers) {
    super(Interface, query, previousAnswers || [])
  }

  asyncCall () {
    return (Interface, query, previousAnswers, callback) => {
      this.answers = previousAnswers
      Interface.question(query, callback)
    }
  }

  callbackWithError () {
    return false
  }

  onResult (answer) {
    this.answers.push(answer)
    return this.answers
  }
}

module.exports = AnswersOfQuestionedInterface
