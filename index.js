const obj = {
    name: "Andrey",
    age: 25,
    job: "Programmer",
}

function queryFunc (someObj) {
    return Object.keys(someObj).map((key) => key + "=" + obj[key]).join("&")
}

console.log(queryFunc(obj));