import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'

const Footer = () => {
  const { 
    stateList, 
    stateSpeed, 
    stateMethod,
    bubbleSort,
    mergeSort,
    quickSort, } = useContext(GlobalContext)


  return (
    <footer>
      <Button variant="outlined">New List</Button>
      <Button variant="outlined">SORT</Button>
      
    </footer>
  )
}

export default Footer