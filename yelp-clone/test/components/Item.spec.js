/* eslint-env mocha */
import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import Item from 'components/Item'

describe('Item Component', () => {
  let wrapper
  const place = {
    name: 'bob'
  }
  beforeEach(() => {
    wrapper = shallow(<Item place={place} />)
  })

  it('contains a title component with yelp', () => {
    expect(wrapper.find('h1').first().text())
      .toEqual(place.name)
  })

  it('wraps the component with an .item css class', () => {
    expect(wrapper.find('.item').nodes.length).toEqual(1)
  })

  it('contains a rating', () => {
    expect(wrapper.find('Rating').node).toBeDefined
  })
})
