function main() {

  const names = [
    "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
  ];

  for (let name of names) {
    console.log(`Location ${name}`);
  }

  console.log("");

  const theNames = names.filter(n => n.startsWith("The"))

  console.log(theNames);

  for (let name of theNames) {
    console.log(`The Locations ${name}`);
  }

}

main();