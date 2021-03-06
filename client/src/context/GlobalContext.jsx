import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
  
  const [list, setList] = useState([70, 54, 21, 60, 7, 12, 82, 37, 45, 63, 80, 14])
  
  const [speed, setSpeed] = useState(300)
  const [method, setMethod] = useState('BUBBLE')

  const generateList = () => {
    const randomNum = () => Math.round(Math.random() * 36) + 3
    setList(list.map(n => randomNum()))
  }

  const sleep = (speed) => {
    return new Promise(resolve => setTimeout(resolve, speed))
  }

  async function bubbleSort(list, speed) {
    const parsedArray = [...list]
    
    for(let i = 0; i < parsedArray.length; i++) {
      for(let j=0; j < parsedArray.length - i; j++) {
        if(parsedArray[j] > parsedArray[j+1]) {
          let tmp = parsedArray[j+1]
          parsedArray[j+1] = parsedArray[j]
          parsedArray[j] = tmp
        }
        await sleep(speed)
        setList([...parsedArray])
        
      }
    }
    return parsedArray
  }
  
  async function quickSort(list, speed) {
    if(list.length <= 1) return list
  
    const leftArray = [], rightArray = [];
  
    let pivot = list[list.length - 1]
    
    for(const num of list.slice(0, list.length-1)) {
      num < pivot ? leftArray.push(num) : rightArray.push(num)
    }
  
    await sleep(speed)

    if(leftArray.length > 0 && rightArray.length > 0) {
      let parsedArray = [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
      return parsedArray;
    } else if (leftArray.length > 0) {
      let parsedArray = [...leftArray, pivot];
      return parsedArray;
    } else {
      let parsedArray = [pivot, ...quickSort(rightArray)];
      return parsedArray;
    }
    
  }
  
  async function mergeSort(list, speed) {
    const parsedArray = [...list]
    
    return []
  }
    
  const data = {
    //state
    stateList: [list, setList],
    stateSpeed: [speed, setSpeed],
    stateMethod: [method, setMethod],

    //methods
    generateList,
    bubbleSort,
    mergeSort,
    quickSort,
  }

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;