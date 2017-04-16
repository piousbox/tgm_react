
import React    from 'react'
import ReactDOM from 'react-dom'
import styles   from './_App.scss'

class Service extends React.Component {
  render () {
    let counter = 0;
    return (
      <div className={ styles.wrap } >
        <img src={this.props.image} alt={this.props.title} style={{ maxWidth: '300px' }} />
        <h3>{this.props.title}</h3>
        {this.props.descr.map(function(d, idx) {
           return <p key={counter++} >{d}</p>
         })}
      </div>
    )
  }
}

export default Service
