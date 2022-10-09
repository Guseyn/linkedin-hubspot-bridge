'use strcit'

const __root = `${__dirname.substring(0, __dirname.lastIndexOf('linkedin-hubspot-bridge'))}linkedin-hubspot-bridge`
const { AsyncObject } = require(`${__root}/async/core/index`)

class FSPathByUrl extends AsyncObject {
  constructor (url, mapper) {
    super(url, mapper)
  }

  syncCall () {
    return (url, mapper) => {
      return mapper(url)
    }
  }
}

module.exports = FSPathByUrl
