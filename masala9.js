function isOnline(arr){
    if(!arr[0]){
        return "No one online"
    }
    let c = 1
    let tstr = []
    if(arr.length == 1){
        return `${arr[0]} online`
    }
    else if(arr.length == 2){
        return `${arr[0]} ${arr[1]} online`
    }
    for(let i = 0; i<arr.length; i++){
        if(i>2){
            c++
        }
        else if(i < 2){
            tstr.push(arr[i])
        }
    }
    return `${tstr.join(" ")} and n-${c} more online`
}

console.log(isOnline([]))
console.log(isOnline(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]))
console.log(isOnline(["s234f", "mailbox2"]))