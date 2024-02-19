




// let like :{ song : string, singer : string } = {song:'뉴진스' , singer:'hypeboy'}

// let project : {
//     member : string[],
//     days : number,
//     started : boolean,
// } = {
//     member : ['kim','park'],
//     days:30,
//     started:true,
// }

// var 어레이 : (number | string)[] =[1,'2',3]
// var 오브젝트 : {data : ( number | string) } = { data : '123'}

// let 학교 : {
//     score : (number|boolean)[],
//     teacher : string,
//     friend : string | string[]
// } = {

// }

// //파라미터가 옵션일 경우
// //파라미터?:타입
// //변수?:number는 변수:number|undefined와 같음
// {age?:number}
// function 함수(x?:number) : void {
//     console.log(x) 
//     //undefined출력됨
// }
// 함수()
// //sol.1
// function sayhi(x? :string){
//     if(x){
//         console.log('안녕하세요'+ x)
//     } else {
//         console.log('이름이 없음')
//     }
// }

// //sol.2
// function 자릿수세기(x :number|string) :number{
//     return x.toString().length
// }

// //sol.3
// function 결혼가능확률(
//     money :number,
//     house : boolean,
//     charm : string
// ) :string|void{
// let score :number = 0;
// score += money;
// if(house === true){
//     score += 500
// }
// if(charm === '상'){
//     score += 100;
// }
// if(score >= 600){
//     return '결혼가능'
// }
// }
// console.log(결혼가능확률(100,true,'상'))

// //Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing써야함.
// //대표적인 Narrowing 방법은 typeof 연산자
// //Narrowing으로 판정해주는 문법들
// // 1.typeof 변수 2.속성명 in 오브젝트자료 3.instanceof 부모

// //assertion 문법(narrowing할 때 사용,무슨 타입이 들어올지 확실할때 쓰기): 타입 덮어쓰기
// function 함수(x :number|string){
//     let array :number[] = [];
//     array[0] = x as number;
// }
// 함수(123);

// //Sol.1
// function 클리닝함수(a: number|string)[]{
//     let 클리닝완료 :number[] = [];

//     a.forEach((b)=>{
//         if(typeof b === 'string'){
//             클리닝완료.push(parseFloat(b))
//         }else{
//             클리닝완료.push(b)
//         }
//     })

//     return 클리닝완료
// }
// console.log(클리닝함수([133,'4','8']))

// //sol.2
// function 과목함수( x: {subject : string|string[]} ){
//     if (typeof x.subject === 'string'){
//         return x.subject
//     }else if (Array.isArray(x.subject)){
//         return x.subject[x.subject.length - 1]
//     }else{
//         return '없음'
//     }
// }
// console.log(과목함수( {subject : ['수학','국어']} ))


// //타입변수쓰기 type alias
// type Animal = string | number | undefined;
// let 동물 :Animal = 123;

// //type변수 합치기도 가능
// type Name = string;
// type Age = number;

// type Person = Name | Age;
// //&연산자로 object타입 합치기(extend하기)
// type PositionX = { x : number };
// type PositionY = { y : number };

// type NewType = PositionX & PositionY;

// let positon :NewType = { x : 10, y : 20}

// //readonly 쓰면 object자료 수정 막을 수 있음
// type Girlfriend = {
//     readonly name : string
// }
// const 여친 :Girlfriend = {
//     name : '엠버'
// }
// 여친.name = '유라'

