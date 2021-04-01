import React from 'react'

const ArrayItem = ({ num }) => {
  <article
    className="array-item"
    style={{color: "firebrick", height: 10*num}}
  >
    {num}
  </article>
}