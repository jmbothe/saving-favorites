import React, { Component } from 'react';

import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

class PageWrapper extends Component {
  state = {}
  render() { 
    return (
      <div>
        <MainHeader />
        <section>
          {this.props.children}
        </section>
        <MainFooter />
      </div>
    )
  }
}
 
export default PageWrapper;