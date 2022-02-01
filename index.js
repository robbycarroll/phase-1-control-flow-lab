function scuberGreetingForFeet(distance) {
  let result
  if (distance <= 400) {
    result = 'This one is on me!';
    return result;
  }
  else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500)
    return 'No can do.';

}

function ternaryCheckCity(city) {
  return city === "NYC" ? (city = "Ok, sounds good.") : (city = "No go.");
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous': tip = 'Thank you so much.';
      break;
    case 'not as generous': tip = 'Thank you.';
      break;
    default: tip = 'Bye.';
      break;
  }
  return tip;
}