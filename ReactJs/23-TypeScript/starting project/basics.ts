// prirmitives: numbers, string, boolean, null, undefined
let age: number = 12;
let userName: string | string[] = "as";
let isAdmin: boolean;
isAdmin = true;

// object types: arrays, objects
let hobbies: string[] = ["dogs", "food", "music"];

//type alias
type PersonTypeAlias = {
  name: string;
  age: number;
};
let person: PersonTypeAlias;
person = {
  isAdmin: true,
};
person = {
  name: "Hm",
  age: 22,
};
let people: PersonTypeAlias[]; //we declare an arrays full of object of that type
people = [
  {
    name: "Hm",
    age: 22,
  },
  {
    name: "bla",
    age: 12,
  },
];

//type inference (TS automat understand which type is used on declared values) and union type
let course: string | number = "Food summoning";
course = 123;

//Functions & types (add type to the functon with :....)
function add(a: number, b: number): string {
  return a + b;
}
function printInfo(value: any) {
  console.log(value);
}

//generics function (only available in defined fn) tells that type must be the same.
function insertAtEnd<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtEnd(demoArray, -1);
updatedArray[0].split("");

const stringArray = insertAtEnd(["a", "b", "c"], 2);
const stringArray2 = insertAtEnd(["a", "b", "c"], "2");
stringArray[0].split("");
stringArray2[0].split("");
