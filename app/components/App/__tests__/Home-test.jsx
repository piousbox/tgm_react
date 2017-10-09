import React          from 'react';
import ReactDOM       from 'react-dom'
import { expect }     from 'chai'
import ReactTestUtils from 'react-dom/test-utils'
import { Provider }   from 'react-redux'

import Home  from '../Home.jsx'
import store from '../../../stores'

describe('Home', () => {
  it('Should render Home', () => {
    let home = ReactTestUtils.renderIntoDocument(
      <Provider store={store}><Home store={store} /></Provider>
    )
    let elem = ReactDOM.findDOMNode(home)
    expect(elem.tagName.toLowerCase()).to.equal('div')
  })
})
