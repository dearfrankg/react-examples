/* eslint-env mocha */
import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import Listing from 'components/Listing'

describe('Listing Component', () => {
  let wrapper
  const places = [{
    name: 'Chicago'
  }, {
    name: 'San Francisco'
  }]
  beforeEach(() => {
    wrapper = shallow(<Listing title={'Cafes'} places={places} />)
  })

  it('wraps the component in a listing css class', () => {
    expect(wrapper.find('.container').node).toBeDefined
  })

  it('has an item for each place in the places prop', () => {
    expect(wrapper.find('Item').nodes.length).toEqual(places.length)
  })
})
