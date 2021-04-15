import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'

const Footer = () => {
  const { 
    stateList, 
    stateSpeed, 
    stateMethod,

    generateList,

    bubbleSort,
    mergeSort,
    quickSort, } = useContext(GlobalContext);

    const [list, setList] = stateList;
    const [speed, setSpeed] = stateSpeed;
    const [method, setMethod] = stateMethod;

  return (
    <footer>
      <Button variant="outlined" onClick={()=> generateList()}>New List</Button>
      <Button variant="outlined" onClick={() => bubbleSort(list)}>SORT</Button>
      
    </footer>
  )
}

export default Footer