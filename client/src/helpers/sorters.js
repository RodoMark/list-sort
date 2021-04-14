export async function bubbleSort(list, speed) {
  const parsedArray = [...list]
  
  for(let i = 0; i < parsedArray.length; i++) {
    for(let j=0; j < parsedArray.length - i; j++) {
      if(parsedArray[j] > parsedArray[j+1]) {
        let tmp = parsedArray[j+1]
        parsedArray[j+1] = parsedArray[j]
        parsedArray[j] = tmp
      }
      await new Promise(r => setTimeout(r, speed));
    }
  }
  return parsedArray
}

export function quickSort(list) {
  const parsedArray = [...list]
  
  return []
}

export function mergeSort(list) {
  const parsedArray = [...list]
  
  return []
}


