import React from 'react'
import {Link} from 'react-router'

export class Header extends React.Component {
  render () {
    return (
      <div className={'topbar'}>
        <Link className={'logo'} to='/'><h1>Yelp Clone</h1></Link>
        <section>
          Yelp clone refactored by the Frank Academy
        </section>
      </div>
    )
  }
}

export default Header
