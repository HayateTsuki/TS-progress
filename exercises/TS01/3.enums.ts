// your task:
// 1. Declare an Enum:
// - with name HeroActions
// - with following values: Attack, Defend, Move, Rest
// 2. Declare a function:
// - with name invokeAction
// - with one parameter action of type HeroActions
// - with return type string
// 3. Function depends on enum should return following strings:
// - for Attack - "Hero Attacks!"
// - for Defend - "Hero Defends!"
// - for Move - "Hero got the Moves!"
// - for Rest - "Hero Rests!"
// - for unknown action - "Unknown action"
// - You can use "switch" for that
// 4. Test your solution with all values from enum HeroActionss

// ❓ Questions:
// ❓ Is it possible to get "Unknown action" as an output?

// to test your solution in terminal you can run following command:
// npm run ex1-3

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------
enum HeroActions {
    Attack,
    Defend,
    Move,
    Rest
}

function invokeAction(action: HeroActions): void {
    switch (action) {
        case HeroActions.Attack:
            console.log("Hero Attacks!")
            break
        case HeroActions.Defend:
            console.log("Hero Defends!")
            break
        case HeroActions.Move:
            console.log("Hero got the Moves!")
            break
        case HeroActions.Rest:
            console.log("Hero Rests!")
            break
        default:
            console.log("Unknown action")
    }
}

invokeAction(HeroActions.Attack)
invokeAction(HeroActions.Defend)
invokeAction(HeroActions.Move)
invokeAction(HeroActions.Rest)
//// -----------------------DONT MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see:
// Hero Attacks!
// Hero Defends!
// Hero got the Moves!
// Hero Rests!
