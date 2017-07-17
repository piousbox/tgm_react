import React from 'react'

class Meta extends React.Component {
  render () {

    console.log("+++ +++ meta item:", this.props.item)

    let items = []

    if (this.props.item && this.props.item.tag) {
      items.push(<span>Tag: {this.props.item.tag} &nbsp; </span>)
    }
    if (this.props.item && this.props.item.tag_name) {
      items.push(<span>Tag: {this.props.item.tag_name} &nbsp; </span>)
    }

    if (this.props.item.city_name) {
      items.push(<span>City: {this.props.item.city_name} &nbsp; </span>)
    }

    return (
      <div>
        { items }
      </div>
    )
  }
}

export default Meta
