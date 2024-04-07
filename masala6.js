function smallVowels(arr){
    let res = []
    for(let i = 0; i < arr.length; i++){
        let s = ""
        for(let j = 0; j<arr[i].length; j++){
            if(arr[i][j] == 'a' || arr[i][j] == 'o' || arr[i][j] == 'u' || arr[i][j] == 'i' || arr[i][j] == 'e'){
                s += arr[i][j]
            }
        }
        res.push(s)
    }
    return res
}

console.log(smallVowels(["Assalomu alaykum", "salom", "Najot ta'lim"]))