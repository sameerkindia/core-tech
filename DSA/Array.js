// reverse an Array

function reverseArray(arr=[]){
    if(arr.length <= 0){
     return "Please provide an array"   
    }

    let reversedArr = []

    for(let i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i])
    }

    return reversedArr
}

console.log(reverseArray([1,2,3,4,5]))



function mergeSortedArrays(arr1, arr2){
    const mergedArr = []
    let arr1Item = arr1[0]
    let arr2Item = arr2[0]

    let i = 1
    let j = 1

    if(arr1.length === 0){
        return arr2
    }
    if(arr2.length === 0){
        return arr1
    }

    while(arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item){
            mergedArr.push(arr1Item)
            arr1Item = arr1Item[i]
            i++
        } else {
            mergedArr.push(arr2Item)
            arr2Item = arr2Item[j]
            j++
        }
    }
    return mergedArr
}


console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))


function mergeSortedArrays2(arr1, arr2){
    const mergedArr = [];
    let i = 0;
    let j = 0;

    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }

    // Use index-based checking instead of item-based falsy checks to safely handle '0'
    while(i < arr1.length || j < arr2.length) {
        let arr1Item = arr1[i];
        let arr2Item = arr2[j];

        // If arr1 is exhausted, or arr2 is not exhausted and arr2Item is smaller
        if (j >= arr2.length || (i < arr1.length && arr1Item < arr2Item)){
            mergedArr.push(arr1Item);
            i++;
        } else {
            mergedArr.push(arr2Item);
            j++;
        }
    }
    return mergedArr;
}

console.log(mergeSortedArrays2([0,3,4,31], [4,6,30]));
// Output: [0, 3, 4, 4, 6, 30, 31]