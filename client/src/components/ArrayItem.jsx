import React from 'react'

const ArrayItem = ({ num, key }) => {

  return (
    <article
      key={key}
      className="array-item"
      style={{backgroundColor: "firebrick", height: 10*num}}
    >
      {num}
    </article>
  )
  
}

export default ArrayItem