function spelling(str){
    let res = [""]
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j <= i; j++){
            res[i] +=str[j]
        }
        res.push("")
    }
    res.pop()
    return res
}

console.log(spelling("eagerly"))