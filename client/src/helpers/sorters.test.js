import { bubbleSort, quickSort, mergeSort } from '../helpers/sorters'

import { renderHook, act } from "@testing-library/react-hooks";


let list = [70, 54, 21, 60, 7, 12, 82, 37, 45, 63, 80, 14]

let speed = 700

beforeEach(() => {
  list = [70, 54, 21, 60, 7, 12, 82, 37, 45, 63, 80, 14]
  speed = 700
});


// bubbleSort
test("bubbleSort returns an array", () => {
  const result = bubbleSort(list);
  expect(Array.isArray(result)).toBe(true);
});

test("bubbleSort returns a sorted array in ascending order", () => {
  const result = bubbleSort(list);
  expect(result).toEqual(list.sort((a,b) => a - b));
});

// quickSort
test("quickSort returns an array", () => {
  const result = quickSort(list, speed);
  expect(Array.isArray(result)).toBe(true);
});

test("quickSort returns a sorted array in ascending order", () => {
  const result = quickSort(list);
  expect(result).toEqual(list.sort((a,b) => a - b));
});

// mergeSort
test("mergeSort returns an array", () => {
  const result = mergeSort(list);
  expect(Array.isArray(result)).toBe(true);
});

test("mergeSort returns a sorted array in ascending order", async () => {
  const result = await mergeSort(list);
  expect(result).toEqual(list.sort((a,b) => a - b));
});

