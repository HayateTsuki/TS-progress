// your task:
// 1. Declare an interface with name UserData and fields:
// - id with type number
// - fullName with type string
// - pass with type string
// - optional field data with type string
// 2. Create two objects of type UserData:
// - fill them with You own data
// 3. Display on console both objects
// 4. Change value of id in both objects:
// - change id from first object with value from second object
// - change id from second object with value from first object
// 4. Display on console both objects

// to test your solution in terminal you can run following command:
// npm run ex2-1

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------
interface UserData {
    id: number
    fullName: string
    pass: string
    optional?: string
}

const object1: UserData = {
    id: 1,
    fullName: "Matthew Mole",
    pass: "Yes"
}

const object2: UserData = {
    id: 2,
    fullName: "Eric Edinberg",
    pass: "No",
    optional: "of Course"
}

console.log("________________\nBefore change ids:")
console.log("Object 1: ", object1)
console.log("Object 2: ", object2)

object1.id = 2
object2.id = 1
console.log("_________________\nAfter change ids:")
console.log("Object 1: ", object1)
console.log("Object 2: ", object2)

//// -----------------------DONT MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see (sample output):
// { id: 1, fullName: 'John', pass: '1234', data: 'Some data' }
// { id: 2, fullName: 'Bob', pass: '4321' }

// after change of IDs:

// { id: 2, fullName: 'John', pass: '1234', data: 'Some data' }
// { id: 1, fullName: 'Bob', pass: '4321'
