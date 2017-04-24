import React          from 'react';
import ReactDOM       from 'react-dom'
import { expect }     from 'chai'
import ReactTestUtils from 'react-dom/test-utils'
import { mount, shallow } from 'enzyme'

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
    let wrapper = mount(<CitiesIndex />)
    let cities = [ { cityname: 'abba' }, { cityname: 'boring' } ]
    let event = { target: { value: 'a' } }

    wrapper.setState({ cities: cities, filteredCities: [1, 2, 3] })
    wrapper.instance().handleCitiesFilterChange(event)
    let result = wrapper.instance().state.filteredCities
    expect(result).to.eql([cities[0]]) // only abba b/c only it includes letter 'a'
  })

})
