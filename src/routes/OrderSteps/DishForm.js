import React from 'react'
import { Form, Button, Icon, Row, Col } from 'antd'

import DishLine from './components/DishLine'

import { validateDish } from './utils/helper'

const { Item: FormItem } = Form

class DishForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosen: props.chosen,
    }
  }

  next = () => {
    const { chosen } = this.state
    this.props.next({
      chosen,
    })
  }

  add = () => {
    const { dishes } = this.props
    const { chosen } = this.state
    chosen.push({ ...dishes[0], num: 1 })

    this.setState({
      chosen,
    })
  }
  update = ({ index, name, num, validateStatus }) => {
    const { chosen } = this.state

    chosen[index].validateStatus = validateStatus
    chosen[index].name = name
    chosen[index].num = num
    // console.log(chosen)
    this.setState({
      chosen,
    })
  }
  render() {
    const { dishes, peopleNum } = this.props
    const { chosen } = this.state

    const chosenItems = chosen.map((item, index) => (
      <DishLine
        index={index}
        dishes={dishes}
        chosen={chosen}
        name={item.name}
        num={item.num}
        update={this.update}
      />
    ))

    return (
      <div>
        <Row gutter={16}>
          <Col span={6} />
          <Col span={6}>Please Select a Dish</Col>
          <Col span={6}>Please enter no. of servings</Col>
          <Col span={6} />
        </Row>
        {chosenItems}
        {dishes.length !== chosen.length && (
          <FormItem>
            <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
              <Icon type="plus" /> Add field
            </Button>
          </FormItem>
        )}
        {!validateDish(peopleNum, chosen.map((item) => item.num)) && (
          <p>
            The total number of dishes should be greater or equal to the number
            of person and a maximum of 10 is allowed.
          </p>
        )}
        <Button style={{ marginLeft: 8 }} onClick={this.props.prev}>
          Previous
        </Button>

        <Button
          type="primary"
          onClick={this.next}
          disabled={!validateDish(peopleNum, chosen.map((item) => item.num))}
        >
          Next
        </Button>
      </div>
    )
  }
}

export default DishForm
