import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import ArrayItem from './ArrayItem'

const Array = () => {
  const data = useContext(GlobalContext)

  const [list, setList] = data.stateList;

  const renderedItems = list && list.map((n, i) => {
    return(
      <ArrayItem key={i} num={n} />
    )
  })

  return (
    <section className="array">
      {renderedItems}
    </section>

  )
  
}

export default Array