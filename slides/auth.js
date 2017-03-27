const Promise = require('bluebird')

function* saveDocument (doc, userContext, deps) {
  deps = Object.assign({
    auth: authen,
    save: saveToDb
  }, deps)
  const authResult = yield deps.auth(userContext.userId, doc.id)
  if (!authResult) {
    throw new Error('No permission to document')
  }
  yield deps.save(doc)
}

function authen () {
  // Fully tested unit
}

function saveToDb () {
  // Fully tested unit
}

module.exports.saveDocument = Promise.coroutine(saveDocument)
