const arr = [1,2,3,4,5];
arr.pop();
arr.push(5,6,7);
arr.push(8,9,10);

//removes elements in a specific loc "in place" (param: start, (optional) number of elem to be deleted, (optional) new elements)
arr.splice(1, 2 , -5, -6);

//deletes element from front "in place"
arr.shift();

//adds elements to the front of array "in place"
arr.unshift(-100);

console.log(arr);

console.log(arr.includes(-100));

//simple way to track accumulation of elements in an array (param: callback, starting value for accumulator)
console.log(arr.reduce((sum, item) => sum += item, 0));

let arr2 = [
    {
        firstname: "Heather",
        lastname: "White"
    },
    {
        firstname: "John",
        lastname: "Smith"
    },
    {
        firstname: "Matt",
        lastname: "Smith"
    }


];

console.log(arr2.findIndex((item) => item.lastname === "Smith"));

console.log(arr2.filter((item) => item.lastname === "Smith"));

arr2 = arr2.map((item) => {
    item.lastname = "test";
    return item;
})

console.log(arr2);



