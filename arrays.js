var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  array = [...array, element]
  return array
  return element
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return chocolateBars.unshift(element)
}

function addElementToEndOfArray(array, element){
  
}

function destructivelyAddElementToEndOfArray(array, element){
  
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementToBeginningOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray (array){
  array.slice(0, array.length - 1)
  return array
}

//push unshift spread