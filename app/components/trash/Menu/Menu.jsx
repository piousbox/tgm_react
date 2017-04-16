
import styles from './_Menu.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import MenuItem from './MenuItem'
import PropTypes from 'prop-types'

export default class Menu extends React.Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <ul className={styles.menu}>
        {this.props.items.map((item) => {
          return (<MenuItem item={item} />);
        }, this)}
      </ul>
    );
  }
}
