// export var name = "foo module"

// export function hello() {
//   console.log('hello')
// }

// export class Person {}

var name = "foo module"

function hello() {
  console.log('hello')
}

class Person {}

export {
  name as fooName,
  hello,
  Person
}

export default name