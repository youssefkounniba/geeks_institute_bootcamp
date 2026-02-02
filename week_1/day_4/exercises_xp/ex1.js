// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(`inside the funcOne function ${a}`);
}
funcOne();

//#2
let a = 0;
function funcTwo() {
    a = 5;
}
function funcThree() {
    console.log(`inside the funcThree function ${a}`);
}
funcThree();
funcTwo();
funcThree();

//#3
function funcFour() {
    // In Node.js, we use 'global' instead of 'window'
    global.a = "hello"; 
}
function funcFive() {
    console.log(`inside the funcFive function ${global.a}`);
}
funcFour();
funcFive();

//#4
let b = 1; // Changed name to 'b' to avoid redeclaration error in the same file
function funcSix() {
    let b = "test";
    console.log(`inside the funcSix function ${b}`);
}
funcSix();

//#5
let c = 2; // Changed name to 'c'
if (true) {
    let c = 5;
    console.log(`in the if block ${c}`);
}
console.log(`outside of the if block ${c}`);