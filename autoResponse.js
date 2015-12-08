//Write your Constructor Function that will generate a different response for each day of the week
module.exports = {
  AutoResponse:function(string) {
    switch (string) {
      case "Monday":
        console.log("I hate Mondays");
        break;
      case "Tuesday":
        console.log("Tuesdays aren't great");
        break;
      case "Wednesday":
        console.log("Wednesdays are OK");
        break;
      case "Thursday":
        console.log("The weekend is almost here!");
        break;
      case "Friday":
        console.log("Fridays are great!");
        break;
      case "Saturday":
        console.log("Saturdays are the best!");
        break;
      case "Sunday":
        console.log("Sundays are pretty nice!");
        break;
      default:
        console.log("That's not a day");
    }
  }
};
