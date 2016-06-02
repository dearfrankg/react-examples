/* eslint-env mocha */
import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import App from 'containers/App'

describe('<App />', () => {
  let wrapper
  let history = {}
  beforeEach(() => {
    wrapper =
      shallow(<App history={history}/>)
  })

  it('has a Router component', () => {
    expect(wrapper.find('Router').nodes.length).toEqual(1)
  })

  it('passes a history prop', () => {
    const props = wrapper.find('Router').props()

    expect(props.history).toBeDefined
  })
})
