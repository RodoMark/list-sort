export function bubbleSort(list, speed) {
  const parsedArray = [...list]
  
  for(let i = 0; i < parsedArray.length; i++) {
    for(let j=0; j < parsedArray.length - i; j++) {
      if(parsedArray[j] > parsedArray[j+1]) {
        let tmp = parsedArray[j+1]
        parsedArray[j+1] = parsedArray[j]
        parsedArray[j] = tmp
      }
    }
  }
  return parsedArray
}

export function quickSort(list, speed) {
  if(list.length <= 1) return list

  const leftArray = [], rightArray = [];

  let pivot = list[list.length - 1]
  
  for(const num of list.slice(0, list.length-1)) {
    num < pivot ? leftArray.push(num) : rightArray.push(num)
  }

  if(leftArray.length > 0 && rightArray.length > 0) {
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
  } else if (leftArray.length > 0) {
    return [...quickSort(leftArray), pivot]
  } else {
    return [pivot, ...quickSort(rightArray)]
  }
  


}

export function mergeSort(list) {
  const parsedArray = [...list]
  
  return []
}


