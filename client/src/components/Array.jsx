import React, { useContext } from 'react'
import ArrayItem from './ArrayItem'

const Array = () => {
  const stateList = useContext(GlobalContext)

  const [list, setList] = stateList

  const renderedItems = list.map(n => {
    return(
      <ArrayItem num={n} />
    )
  })

  return (
    <section className="array">
      {list && renderedItems}
    </section>

  )
  

  
}