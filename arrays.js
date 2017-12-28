var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
return [element, ...array]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push()
  return array
}

function accessElementInArray(array,index){
  return array[index]
}

function removeElementFromBeginningOfArray(array){
  return array.slice(-2)
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromEndOfArray (array){
  return array.slice(0, array.length - 1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array 
}