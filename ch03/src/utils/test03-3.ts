// [1] 인터페이스 생성
interface IPerson03_3
{
    name: string
    age?: number
}

// [2] 인터페이스 구현
class Person03_3 implements IPerson03_3
{
    // [3] 클래스 생성자 구현
    constructor(public name: string, public age?:number) {}
}

let jack03_3: IPerson03_3 = new Person03_3('Jack', 21)
console.log(jack03_3)