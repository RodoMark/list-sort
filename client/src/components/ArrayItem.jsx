import React from 'react'

const ArrayItem = ({ num }) => {

  return (
    <article
    className="array-item"
    style={{backgroundColor: "firebrick", height: 10*num}}
  >
    {num}
  </article>
  )
  
}

export default ArrayItem