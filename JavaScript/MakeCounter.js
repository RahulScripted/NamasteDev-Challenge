// Create a function makeCounter that returns a counter object with methods to increment,
// decrement, and reset the counter. The counter
// should maintain its current value and provide these operations:

// 1. increment() – Increases the counter by 1 and returns the new value.

// 2. decrement() – Decreases the counter by 1
// and returns the new value.

// 3. reset() - Resets the counter to its initial

// value (default: 0) and returns the reset value. The counter should also allow an optional initial value.



function makeCounter(initialValue = 0){
    let val = initialValue

    return {
        increment: function(){
            val += 1;
            return val;
        },
        decrement: function(){
            val -= 1;
            return val;
        },
        reset: function(){
            val = initialValue;
            return val;
        }
    }
}


const counter = makeCounter()
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());