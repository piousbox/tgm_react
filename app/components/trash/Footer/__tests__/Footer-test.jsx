
import React from 'react';
import ReactDOM from 'react-dom'

// import Footer from '../Footer.jsx';
import { Footer0 } from '../Footer.jsx'
import { expect } from 'chai';

// let { TestUtils } = React.addons;
import ReactTestUtils from 'react-dom/test-utils'

describe('Footer', () => {
  it('Should have the correct footer element', () => {
    let footer = ReactTestUtils.renderIntoDocument(
      <Footer0 />
    );
    let footerElem = ReactDOM.findDOMNode(footer);
    expect(footerElem.tagName.toLowerCase()).to.equal('footer');
  });
});
