let MAX_AGE = 100

// 인터페이스 생성
interface IPerson 
{
    name: string
    age: number
}

// 인터페이스 상속 후 구현
class Person implements IPerson 
{
    constructor(public name: string, public age: number) {}
}

// 최댓값 인자로 받고, 랜덤값 반환
function makeRandomNumber(max: number = MAX_AGE): number
{
    return Math.ceil((Math.random() * max))
}

// 이름을 인자로 받고, 이름과 나이 반환
const makePerson = 
(name: string, age: number = makeRandomNumber()) => ({name,age})

// 객체 2개 생성과 출력
const testMakePerson = (): void =>
{
    let jane: IPerson = makePerson('Jane')
    let jack: IPerson = makePerson('Jack')
    console.log(jane, jack)
}

testMakePerson()