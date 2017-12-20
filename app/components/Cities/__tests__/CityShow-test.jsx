import React          from 'react';
import ReactDOM       from 'react-dom'
import { expect }     from 'chai'
import ReactTestUtils from 'react-dom/test-utils'
import { 
  mount, shallow,
} from 'enzyme'
import { 
  Provider, connect,
} from 'react-redux'

import store      from '../../../stores'
import CityShow from '../CityShow.jsx'

describe('CityShow', () => {
  it('Should render the correct element', () => {
    let app1 = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <CityShow params={{ cityname: 'xxTestCitynamexx' }} />
      </Provider>)
    let elem = ReactDOM.findDOMNode(app1)
    expect(elem.tagName.toLowerCase()).to.equal('div')
  })
})
