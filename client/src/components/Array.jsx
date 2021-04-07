import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import ArrayItem from './ArrayItem'

const Array = () => {
  const data = useContext(GlobalContext)

  const [list, setList] = data.stateList;

  console.log(list)

  const renderedItems = list && list.map(n => {
    return(
      <ArrayItem num={n} />
    )
  })

  return (
    <section className="array">
      {renderedItems}
    </section>

  )
  

  
}

export default Array