import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import SpeedSelector from '../components/SpeedSelector'
import MethodSelector from '../components/MethodSelector'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';

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

    const dispatch = {
      list,
      speed,
      method,
    }

    useEffect(() => {
      console.log('update list')
    }, [list]);

    const handleSort = (dispatch) => {
      const actions = {
        "BUBBLE": bubbleSort(dispatch.list,dispatch.speed),
        "MERGE": mergeSort(dispatch.list,dispatch.speed),
        "QUICK": quickSort(dispatch.list,dispatch.speed)
      }

      return actions[dispatch.method]
    };


  return (
    <footer>
      <Button variant="outlined" onClick={()=> generateList()}>Generate List</Button>
      <SpeedSelector />
      <MethodSelector />
      <Button 
        variant="outlined" 
        onClick={() => handleSort(dispatch)}
        color="primary"
        >SORT
      </Button>
    </footer>
  )
}

export default Footer