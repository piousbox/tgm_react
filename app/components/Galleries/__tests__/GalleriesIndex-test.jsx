import React          from 'react';
import ReactDOM       from 'react-dom'
import { expect }     from 'chai'
import ReactTestUtils from 'react-dom/test-utils'
import { shallow }    from 'enzyme'
import { Provider }   from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk          from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

import GalleriesIndex from '../GalleriesIndex'
import store from '../../../stores'

describe('GalleriesIndex', () => {

  it('Should render GI Home', () => {
    let store1 = mockStore({
      city: {
        galleries: [
          {name: 'Name', photos: []}
        ]
      }
    })
    let home = ReactTestUtils.renderIntoDocument(
      <Provider store={store1} ><GalleriesIndex store={store1} params={{cityname: 'cityname'}} galleries={{ gallery: [1, 2, 3] }} g3={"g5"}
                      props={{ g1: 'g1', galleries: 'az' }} /></Provider>
    )
    let elem = ReactDOM.findDOMNode(home)
    // console.log('+++ elem:', elem)
    expect(elem.tagName.toLowerCase()).to.equal('div')
    expect(elem.querySelector('h2 a').innerHTML).to.eql('Name')
  })

})

