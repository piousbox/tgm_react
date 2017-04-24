import React          from 'react';
import ReactDOM       from 'react-dom'
import { expect }     from 'chai'
import ReactTestUtils from 'react-dom/test-utils'
// import { shallow } from 'enzyme'

import CitiesIndex from '../CitiesIndex.jsx'

function shallowRender(Component) {
  const renderer = ReactTestUtils.createRenderer()
  renderer.render(<Component/>)
  return renderer.getRenderOutput()
}

describe('CitiesIndex', () => {
  it('Should render the correct element', () => {
    let app1 = ReactTestUtils.renderIntoDocument(<CitiesIndex />)
    let elem = ReactDOM.findDOMNode(app1)
    expect(elem.tagName).to.equal('DIV')
  })

  it('filters cities', () => {
    let instance = shallowRender(CitiesIndex)
    let cities = [ { cityname: 'abba' }, { cityname: 'boring' } ]
    let event = { target: { value: 'a' } }

    console.log("+++ +++ instance:", instance.props)
    console.log("+++ +++ state:", instance.getState )

    instance.setState({ cities: cities, filteredCities: [1, 2, 3] })
    instance.handleCitiesFilterChange(event)
    let result = instance.state.filteredCities
    console.log('+++ +++ result:', result);
    expect(1).to.equal(2)
  })

})
