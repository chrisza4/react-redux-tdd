const test = require('tape')
const Promise = require('bluebird')
const Sinon = require('sinon')
const { saveDocument } = require('./auth')

test('save document when auth passed', Promise.coroutine(function* (t) {
  const auth = (userId, docId) =>
    userId === 'user1' && docId === 'doc1'
    ? Promise.resolve(true)
    : Promise.resolve(null)
  const save = Sinon.stub().returns(Promise.resolve({}))
  const toSaveDocument = {
    id: 'doc1',
    document: 'content'
  }
  yield saveDocument(
    toSaveDocument,
    { userId: 'user1' },
    { auth, save }
  )
  t.equal(save.calledWith(toSaveDocument), true, 'should save to database')
  t.end()
}))

test('save document when auth failed', Promise.coroutine(function* (t) {
  const auth = (userId, docId) =>
    userId === 'user1' && docId === 'doc1'
    ? Promise.resolve(false)
    : Promise.resolve(null)
  const save = Sinon.stub().returns(Promise.resolve({}))
  const toSaveDocument = {
    id: 'doc1',
    document: 'content'
  }
  try {
    yield saveDocument(
      toSaveDocument,
      { userId: 'user1' },
      { auth, save }
    )
    t.end(new Error('Should throw no permission error'))
  } catch (err) {
    t.equal(err.message, 'No permission to document', 'should throw')
    t.end()
  }
}))
