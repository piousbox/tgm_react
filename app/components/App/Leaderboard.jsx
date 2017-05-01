import React from 'react'

import Center from '../Center'

class Leaderboard extends React.Component {
  render() {
    let adstring = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-5283251584689528" data-ad-slot="5371488374"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>'

    return (
      <Center>
        <div dangerouslySetInnerHTML={{ __html: adstring }} />
      </Center>
    )
  }
}

export default Leaderboard
