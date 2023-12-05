//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

// if (lightBulbStatus === "On") {
//   console.log(`Lightbulb is On.`);
// } else if (lightBulbStatus === "Broken") {
//   console.log(`Lightbulb is Broken.`);
// } else if (lightBulbStatus === "Off") {
//   console.log(`Lightbulb is Off.`);
// } else {
//   console.log(`Please choose the correct input (On/Off/Broken)`);
// }

//Start coding here
switch (lightBulbStatus) {
  case "On":
    console.log(`Lightbulb is On.`);
    break;
  case "Off":
    console.log(`Lightbulb is Off.`);
    break;
  case "Broken":
    console.log(`Lightbulb is Broken.`);
    break;
  default:
    console.log(`Please choose the correct input (On/Off/Broken)`);
}
