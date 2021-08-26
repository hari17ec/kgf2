// let array = ['mithun',"hari","kgf1","kgf2"]
// console.log(array)
// //prints array [ 'mithun', 'hari', 'kgf1', 'kgf2' ]

// let array = ['mithun',"hari","kgf1","kgf2"]
// console.log(array)
// let x = array.sort();
// console.log(x)//sorts ascending by default,[ 'hari', 'kgf1', 'kgf2', 'mithun' ]

// let array1 = ['a',"b","c","d"]
// let array2 = ['e',"f","g","h"]
// let arr = array1.concat(array2)
// console.log(arr)
// //[
//     'a', 'b', 'c',
//     'd', 'e', 'f',
//     'g', 'h'
//   ]

// let array1 = ['a',"b","c","d"]
// let array2 = ['e',"f","g","h"]
// let array3 = ['e',"f","g","h"]
// let arr = array1.concat(array2,array3)
// console.log(arr)
// //[
//     'a', 'b', 'c', 'd',
//     'e', 'f', 'g', 'h',
//     'e', 'f', 'g', 'h'
//   ]

//let array = ['mithun',"hari","kgf1","kgf2","a","b"];
//console.log(array.copyWithin(0,2,5));//[ 'kgf1', 'kgf2', 'a', 'kgf2', 'a', 'b' ]
//console.log(array.copyWithin(0,3));//[ 'kgf2', 'a', 'b', 'kgf2', 'a', 'b' ]
//console.log(array.copyWithin(1,3));//[ 'kgf2', 'kgf2', 'a', 'b', 'a', 'b' ] individual-[ 'mithun', 'kgf2', 'a', 'b', 'a', 'b' ]
//console.log(array)//[ 'kgf2', 'kgf2', 'a', 'b', 'a', 'b' ]

// let array = ['mithun',"hari","kgf1","kgf2","a","b"];
// console.log(array.reverse())
// //[ 'b', 'a', 'kgf2', 'kgf1', 'hari', 'mithun' ]

//  let array = ['mithun',"hari","kgf1","kgf2","a","b"];
//  console.log(array.shift()) //mithun
// console.log(array) //[ 'hari', 'kgf1', 'kgf2', 'a', 'b' ] 

// let array = ['mithun',"hari","kgf1","kgf2","a","b"];
// console.log(array.slice())
// //[ 'mithun', 'hari', 'kgf1', 'kgf2', 'a', 'b' ]-copy

// let array = ['mithun',"hari","kgf1","kgf2","a","b"]
// console.log(array.pop()) //b
// console.log(array) //[ 'mithun', 'hari', 'kgf1', 'kgf2', 'a' ]

// let array = ['mithun',"hari","kgf1","kgf2","a","b"]
// console.log(array.fill(3,0,5)) //[ 3, 3, 3, 3, 3, 'b' ]
// console.log(array)//[ 3, 3, 3, 3, 3, 'b' ]

// let array = ['mithun',"hari","kgf1","kgf2","a","b","a"]
//  console.log(array.includes("a",0))//true
//  console.log(array.indexOf("a"))//4
//  console.log(array.lastIndexOf("a"))//6
//  console.log(array.join("array"))//mithunarrayhariarraykgf1arraykgf2arrayaarraybarraya

// let array = ['mithun',"hari","kgf1","kgf2","a","b",]
// console.log(array.push("gowda"))//7
//  console.log(array)//[
//     'mithun', 'hari',
//     'kgf1',   'kgf2',
//     'a',      'b',
//     'gowda'
//   ]

// let array = ['mithun',"hari","kgf1","kgf2","a","b",]
// console.log(array.values())
// console.log(array.unshift("gowda"))//7
// console.log(array)//[
//     'gowda', 'mithun',
//     'hari',  'kgf1',
//     'kgf2',  'a',
//     'b'
//   ]

//let array = ['mithun',"hari","kgf1","kgf2","a","b",3,4]
// console.log(array.toString())//mithun,hari,kgf1,kgf2,a,b,3,4
// console.log(array)//[ 'mithun', 'hari', 'kgf1', 'kgf2', 'a', 'b', 3, 4 ]
//console.log(array.toLocaleString())//mithun,hari,kgf1,kgf2,a,b,3,4
//console.log(array.splice(0,2))//[ 'mithun', 'hari' ]
