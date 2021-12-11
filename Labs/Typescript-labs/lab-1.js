var hellowordl = "Hi";
var sample;
console.log(hellowordl);
var sampleTuple = [10, "Vikash"];
console.log(sampleTuple[1]);
//Union
var val;
val = 121212;
console.log(val);
val = "Angular";
console.log(val);
val = false;
console.log(val);
Example("Vikash");
function Example(name) {
    if (typeof name === "string") {
        console.log(name);
    }
    else {
        for (var index = 0; index < name.length; index++) {
            var element = name[index];
        }
    }
}
