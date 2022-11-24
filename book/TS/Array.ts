interface ArrFunc<T> {
  (num: T): T[]
}
let getArr: ArrFunc<number> = (num: number) => {
  return [num]
}

let new1 = getArr(4)

type reverseType = string | number
function reverse<T extends reverseType>(x: T) : T { return x }
let name1 = reverse<string>('jjj')

interface Foo {
  bar: number;
  bas: string;
}
const foo1 = {} as Foo
const foo2 = <Foo>{}
const foo: Foo = {};