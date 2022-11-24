type Ids = number[];
type Names = string[];
type Unpacked<T> = T extends Names ? string : T extends Ids ? number : T;
type idType = Unpacked<Ids>; // idType 类型为 number
type nameType = Unpacked<Names>; // nameType 类型为string
// 上面可以简写为下面的
type Unpacked1<T> = T extends (infer R)[] ? R : T;
type idType1 = Unpacked1<Ids>; // idType 类型为 number
type nameType1 = Unpacked1<Names>; // nameType 类型为string
