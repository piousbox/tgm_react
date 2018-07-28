import React from 'react'

const wrapper = (Tgm4, delta) => (props) => (
  <Tgm4 {...props} {...delta} />
)

export {
  wrapper,
}
