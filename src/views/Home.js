import React from 'react';
import styles from '../assets/css/home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={ styles['all-wraper'] }>
        <p className={ styles['home'] }>这是首页</p>
      </div>
    )
  }
}

export default Home;