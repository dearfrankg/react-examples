/* eslint-env mocha */
import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import Header from 'components/Header'

describe('Header Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('contains a title component with yelp', () => {
    expect(wrapper.find('h1').first().text())
        .toEqual('Yelp')
  })

  it('contains topbar styling', () => {
    expect(wrapper.find('.topbar').nodes.length).toEqual(1)
  })

  it('contains a section menu with the title', () => {
    expect(wrapper.find('section').first().text())
        .toEqual('Fullstack.io')
  })
})
