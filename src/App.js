// App 外壳
import React, { Component } from 'react'
import styles from './App.less'

import OrderSteps from './routes/OrderSteps'

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <OrderSteps />
      </div>
    )
  }
}
