sumOfCubes = (arr) => {
    let sum = 0
    arr.forEach(a => {
        sum += Math.pow(a, 3)
    });
    return sum
}

console.log(globalThis.sumOfCubes([1, 5, 9]))