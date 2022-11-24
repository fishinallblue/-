// 数字枚举
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
let days = [Days.Sun]

// 字面量枚举成员
enum Color {
  Red,  // 0
  Green, // 1
  Blue // 2
}
let color: Color.Blue = Color.Red

// 常量枚举
const enum Enum1 {
  A = 1,
  B = A * 2
}
let directions = [Enum1.A]
