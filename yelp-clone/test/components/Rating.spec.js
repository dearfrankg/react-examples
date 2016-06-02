/* eslint-env mocha */
import React from 'react'
import expect from 'expect'
import {shallow} from 'enzyme'
import Rating from 'components/Rating'

describe('<Rating />', function () {
  it('fills the percentage as style', () => {
    let wrapper = shallow(<Rating percentage={0.10} />)
    expect(wrapper.find('.top').node.props.style.width).toEqual('10%')
    wrapper = shallow(<Rating percentage={0.99} />)
    expect(wrapper.find('.top').node.props.style.width).toEqual('99%')
  })

  it('renders bottom and top star meters', () => {
    let wrapper = shallow(<Rating percentage={0.99} />)
    expect(wrapper.find('.top').node).toBeTrue
    expect(wrapper.find('.bottom').node).toBeTrue
  })
})
