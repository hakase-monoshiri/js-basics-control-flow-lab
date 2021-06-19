function scuberGreetingForFeet(feetTraveled){
  // Write your code here!
  if (feetTraveled < 400) {
    return 'This one is on me!';
  }
  else if (feetTraveled > 2000 && feetTraveled < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (feetTraveled > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city == "NYC") {
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tipCategory){
  // Write your code here!
  if (tipCategory == 'generous') {
    return 'Thank you so much.'
  }
  else if (tipCategory == 'not as generous') {
    return 'Thank you.';
  }
  else {
    return 'Bye.'
  }
};