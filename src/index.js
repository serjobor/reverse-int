module.exports = function reverse (n) {
    return +([...('' + Math.abs(n))].reverse().join(''));
    // const arr = [...('' + Math.abs(n))];
    // const result = [];

    // for (const key in arr){
    //     result.unshift(arr[key]);
    // }

    // return +result.join('');
}
