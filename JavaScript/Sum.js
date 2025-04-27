// Design a function sum that can take any number of arguments and return their total. The function should work for both fixed and variable number of
// arguments using JavaScript features. Only numerical arguments will be provided.

// Example Inputs & Outputs
//     1.  sum(1, 2, 3) → 6
//     2.  sum(10) → 10
//     3.  sum() → →
//     4.  sum(5, -5, 10, 20) → 30
//     5.  sum(100, 200, 300, 400) → 1000



function sum(...args){
    return args.reduce((total, num) => total + num, 0)
}


console.log(sum(1, 2, 3));
console.log(sum(10));
console.log(sum());
console.log(sum(100, 200, 300, 400));