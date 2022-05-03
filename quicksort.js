function quickSort(arr, left, right){
    let index;
    if(arr.length > 1){
        index = partition(arr, left, right);
        if (left < index - 1){
            quickSort(arr, left, index - 1);
        }
        if (index < right){
            quickSort(arr, index, right);
        }
    }
    return arr;
}

function swap(arr, leftIndex, rightIndex){
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}

function partition(arr, left, right){
    let pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while(i <= j){
        while(arr[i] < pivot){
            i++;
        }
        while(arr[j] > pivot){
            j--;
        }
        if(i <= j){
            swap(arr, i , j);
            i++;
            j--;
        }
    }
    return i;
}

let arr = [9,3,1,6,2,7,4];
console.log(quickSort(arr, 0, arr.length-1))