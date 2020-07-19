const array = [1,2,3, 4]
const deepCopiedArray = [...array]
deepCopiedArray[0] = 0
console.log(array, deepCopiedArray)