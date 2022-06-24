// import {IPerson, makePerson} from './person/Person'
import IPerson from "./person/IPerson"
import Person, {makePerson} from "./person/Person"
import Chance from 'chance' // 가짜 데이터 생성
import * as R from 'ramda'  // 함수형 유틸리티 패키지

const chance = new Chance()
let persons: IPerson[] = 
    R.range(0, 2)
    .map((n:number) => new Person(chance.name(), chance.age()))
console.log(persons)


/* 원래 사용하던 오리지널 코드 */
// const testMakePerson = (): void => {
//     let jane: IPerson = makePerson('Jane')
//     let jack: IPerson = makePerson('Jack')
//     console.log(jane, jack)
// }

// testMakePerson()