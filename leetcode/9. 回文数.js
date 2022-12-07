let isPalindrome = function(x) {
    //将传入的数值变为数组
    const arr=x.toString().split('')
    const arr_0=[]
    for(let i=0;i<arr.length;i++){
        //将原数组的每个元素倒着push到新数组中
        arr_0.push(arr[arr.length-1-i])
        }
        for(let i=0;i<arr.length;i++){
            if(arr[i]==arr_0[i]){continue}
            //一旦有不相等的元素，直接返回false
            else{return false}
        }
        //如果循环完还未跳出函数，说明全部相等，则返回true
        return true
    }
