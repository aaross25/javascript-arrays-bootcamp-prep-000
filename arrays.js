var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  array = [...array, element]
  return [ element, 1]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  chocolateBars.unshift(element)
  return [element, 1]
}

function addElementToEndOfArray(array, element){
  array.push(element)
  return array
  
}

function destructivelyAddElementToEndOfArray(array, element){
  
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray (array){
  return array.slice(0, array.length - 1)
}