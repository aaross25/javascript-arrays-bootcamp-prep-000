var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return array = [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
return array = [element, ...array]
}

function destructivelyAddElementToEndOfArray(array, element){
  
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromEndOfArray (array){
  return array.slice(0, array.length - 1)
}