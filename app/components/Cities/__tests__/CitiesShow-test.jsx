import React          from 'react';
import ReactDOM       from 'react-dom'
import { expect }     from 'chai'
import ReactTestUtils from 'react-dom/test-utils'

import CitiesShow from '../CitiesShow.jsx'

describe('CitiesShow', () => {
  it('Should render the correct element', () => {
    let app1 = ReactTestUtils.renderIntoDocument(
      <CitiesShow params={{ cityname: 'xxTestCitynamexx' }} />
    );
    let elem = ReactDOM.findDOMNode(app1);
    expect(elem.tagName.toLowerCase()).to.equal('div');
  });
});
