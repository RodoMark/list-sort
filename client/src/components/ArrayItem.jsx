import React from 'react'

const ArrayItem = ({ num, key, color }) => {

  return (
    <article
      className={`array-item ${color}`}
      key={key}
      style={{backgroundColor: "firebrick", height: 10*num}}
    >
      {num}
    </article>
  )
  
}

export default ArrayItem