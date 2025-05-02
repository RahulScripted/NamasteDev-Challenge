// Write a function groupBy that takes an array of objects and a property name (as a string), and returns an object where the keys are the unique values of the specified property, and the values are arrays of objects that have that property value.





function groupBy(arr, key) {
    return arr.reduce((result, obj) => {
        const keys = obj[key];
        if (!result[keys]) {
            result[keys] = [];
        }
        result[keys].push(obj);
        return result;
    }, {});
}