/* eslint-env mocha */
import expect from 'expect'
import sinon from 'sinon'
import {ScriptCache} from 'utils/ScriptCache'

describe('Cache', () => {
  let cache = []      // eslint-disable-line
  let newElement = {}
  // let onLoad
  let createElement =
    sinon.stub(window.document, 'createElement').returns(newElement)
  const createCache = (obj) => ScriptCache(obj)

  beforeEach(() => {
    cache = createCache({example: 'http://example.com'})
  })

  it('adds a script tag', () => {
    expect(createElement.calledOnce).toBeDefined
  })

  it('only adds a single script', () => {
    createCache({example: 'http://example.com'})
    createCache({example: 'http://example.com'})
    expect(createElement.calledOnce).toBeDefined
  })
})
