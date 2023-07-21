import React from 'react'

function List({data}) {
  return (
    <ul
      className="list-disc"
    >
      {
        data.map((item) => {
          return <li>
            {item}
          </li>
        })
      }
    </ul>
  )
}

export default List