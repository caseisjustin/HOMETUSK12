function phoneFormat(arr){
    if(arr.length != 10){
        console.log("Iltimos uzunligi 10ga teng bolgan array yuboring")
        return 0
    }
    let res = "("
    for(let i = 0; i < 3; i++){
        res+=arr[i]
    }
    res+=") "
    for(let i = 3; i<6; i++){
        res+=arr[i]
    }
    res+="-"
    for(let i = 6; i<9; i++){
        res+=arr[i]
    }
    return res
}

console.log(phoneFormat([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))