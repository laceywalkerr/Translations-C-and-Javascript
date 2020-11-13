function main() {

  console.log("Let's roll some dice, baby!");
  console.log("---------------------------")

  for (let i = 0; i < 10; i++) {
    console.log(`The number is ${i}`);
  }

  const die1 = die.roll()
  const die2 = die.roll()
  let message = `${die.dieFace(die1)} + ${die.dieFace(die2)} == ${die1 + die2}`
}

main();