/*
  You should be able to call this def with no arguments and see its output in the terminal:
  greetProgrammer();
  => "Hello, programmer!"
*/
 greetProgrammer(name) {
  print("Hello, programmer!");

}

/*
  You should be able to call this def with one argument and see its output in the terminal:
  greet("Naureen");
  => "Hello, Naureen!"
*/
def greet(name) {
  console.log(`Hello, ${name}!`);
}

/*
  You should be able to call this def with no arguments and see its output in the terminal:
  greetWithDefault();
  => "Hello, programmer!"

  You should also be able to call this def with one argument and see its output in the terminal:
  greetWithDefault("Sunny");
  => "Hello, Sunny!"
*/
def greetWithDefault(name = "programmer") {
  console.log(`Hello, ${name}!`);
}

/*
  You should be able to call this def with two arguments and get back its return value:
  const sum = add(1, 2);
  console.log(sum);
  => 3
*/
def add(num1, num2) {
  return num1 + num2;
}

/*
  You should be able to call this def with two arguments and get back its return value:
  const result = halve(4);
  console.log(result);
  => 2

  If the def is called with an argument that isn't a number, it should return null:
  const result = halve("two")
  => null
*/
def halve(number) {
  if (typeof number !== "number") return null;

  return number / 2;
}
