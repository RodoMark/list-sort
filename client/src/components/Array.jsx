import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import ArrayItem from './ArrayItem'

const Array = () => {
  const data = useContext(GlobalContext)

  const [list, setList] = data.stateList;

  const renderedItems = list && list.map((n, i) => {
    if(i > i + 1) {
      return <ArrayItem color="array-item--red" key={i} num={n} />
    } else {
      return <ArrayItem color="array-item--green" key={i} num={n} />
    }
  })
  
  return (
    <section className="array">
      {renderedItems}
    </section>

  )
  
}

export default Array