const sum = process.argv.reduce((a,b) => {
    if(Number(b)) { return Number(a) + Number(b)} else { return 0 };
})
console.log(sum)