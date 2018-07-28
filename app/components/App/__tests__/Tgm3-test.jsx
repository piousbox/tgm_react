import React          from 'react';
import ReactDOM       from 'react-dom'
import { expect }     from 'chai'
import ReactTestUtils from 'react-dom/test-utils'
import { Provider }   from 'react-redux'

import Tgm3  from '../Tgm3.jsx'
import store from '../../../stores'

describe('Tgm3', () => {
  it('Should render Tgm3', () => {
    let rendered = ReactTestUtils.renderIntoDocument(
      <Provider store={store}><Tgm3 store={store} params={{}} routeParams={{}} /></Provider>
    )
    let elem = ReactDOM.findDOMNode(rendered)
    expect(elem.tagName.toLowerCase()).to.equal('div')
  })
})
