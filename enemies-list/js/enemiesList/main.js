function main() {

  console.log("My Enemies List!");
  console.log("----------------");

  const enemies = [
    {
      firstName: "Ramona",
      lastName: "Flowers",
      offences: ["Being a jerk to me in elementary school",
        "Not being nice to me in elementary school"],
      isReallyHated: true
    },

    {
      firstName: "Darth",
      lastName: "Vader",
      offences: ["Cut off luke's hand",
        "Murdered all those kids",
        "Unkind management practices"],
      isReallyHated: false
    },

    {
      firstName: "Betty",
      lastName: "White",
      offences: ["Phone calls in the theater",
        "Phone calls on the bus",
        "Phone calls in line at the grocery store",
        "Poor conversationalist"],
      isReallyHated: true
    },

    {
      firstName: "Leon",
      lastName: "Peck",
      offences: ["Keeps giving me a hotplate"],
      isReallyHated: false
    }

  ]

  for (let enemy of enemies) {
    if (enemy.isReallyHated === true) {
      console.log(`${enemy.firstName} ${enemy.lastName} really really dislike! EW.`);
    } else {
      console.log(`${enemy.firstName} ${enemy.lastName} still greatly dislike, but don't loathe entirely.`);
    }
  }

}

main();