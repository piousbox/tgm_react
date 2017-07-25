import React from 'react'

import Center from '../Center'

class Leaderboard extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  // width?

  render () {
    return (
      <Center>
        <div className='ad' >
          <ins className='adsbygoogle'
               style={{ display: 'block' }}
               data-ad-client='ca-pub-5283251584689528'
               data-ad-slot='5371488374'
               data-ad-format='auto' />
        </div>
      </Center>
    )
  }
}

export default Leaderboard
