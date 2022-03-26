function forEach(array, callback) {
  for(let i = 0; i<array.length; i++) {
    callback(array[i], i, array)
  }
}
const array = [1, 2, 3]
const fun = function(num) {
  console.log(num)
}

function map(array, callback) {
  const newArray = []
  for (let i = 0; i < array.length; i++){
      newArray.push(callback(array[i]))
  }
  return newArray
}

function filter(arr, callback) {
  const newArr = []
  for(let i = 0; i < arr.length; i++){
    if (callback(arr[i]) === true) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
  

function every(arr, callback) {
  for (item of arr) {
    if (callback(item) === false) {
      return false
    }
  }
  return true
  
}


function some(arr, callback) {
  for (item of arr) {
    if (callback(item) === true) {
      return true
    }
  }
  return false
}

function majority(arr, callback) {
  const maj = Math.floor((arr.length / 2) + 1) 
  const newArr = []
  for (item of arr) {
    if (callback(item) === true) {
      newArr.push(item)
    }
  }
  if(newArr.length >= maj) {
    return true
  } else {
    return false
  }

}

function once(callback) {
  let isCalled = false
  let value;
  return function(args) {
    if(isCalled) return value
    isCalled = true
    value = callback(args)
    return value
  }
}

function groupBy(arr, callback) {
  const obj = {}
  for (item of arr) {
    let key = callback(item)
    if (obj[key]) {
      obj[key].push(item)
    } else {
      obj[key] = [item]
    }
  } 
  return obj

}

function arrayToObject(arr, callback) {
  let obj = {}
  for (item of arr) {
    obj[item] = callback(item)
  } 
  return obj

}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
