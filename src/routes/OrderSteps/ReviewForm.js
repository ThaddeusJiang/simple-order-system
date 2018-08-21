import React from 'react'

import { Button } from 'antd'

export default function ReviewForm({
  meal,
  peopleNum,
  restaurant,
  dishes,
  prev,
}) {
  return (
    <div>
      <p> Meal {meal}</p>
      <p>No. of. People {peopleNum}</p>
      <p>Restaurant {restaurant}</p>
      <div>
        Dish:
        {dishes.map((item) => (
          <p key={item.name}>
            {item.name}: {item.num}
          </p>
        ))}
      </div>
      <Button style={{ marginLeft: 8 }} onClick={prev}>
        Previous
      </Button>
      <Button
        type="primary"
        onClick={() => {
          console.warn(dishes)
        }}
      >
        Done
      </Button>
    </div>
  )
}