// docker command 

/* 
-- start docker 
docker built -t my-node-app:v0.0.1
docker run -p 5001:8080 my-node-app:v0.0.1

 docker container stop 790eacb09d30
*/

// tìm kiếm tuyến tính 
// tìm kiếm nhị phân  Log2(N)

// function linearSearch(number,x)
// {
//     let left = 0 ; 
//     let right  = number.length - 1
//     let mid 
//     do{
//         mid = (left + right)/2;
//         if(number[mid]==x) return mid
//         else{ if( number[mid] < x ) left = mid + 1;
//              else right = mid -1 }

//     }while(left <= right)
//     return 0 ;
// }
// var number = [1,3,6,8,10,12,14,16,19]
// const a = linearSearch(number,14)
// console.log(a)

// thuật toán đổi chỗ trực tiếp InterchangeSort
// var numbersort = [13,14,26,1,5,3,4]
// function InterchangeSort(number)
// {
//     for(let i = 0; i< number.length -1 ; i++)
//     {
//         for(let j = i +1 ; j < number.length ; j++){
//             if(number[j]<number[i])
//             {
//                 let temp = number[i]
//                 number[i] = number[j]
//                 number[j] = temp 
//             }
//         }
//     }
//     console.log(number)
// }
// InterchangeSort(numbersort)


// chọn trực tiếp SelectionSort
// var numbersort = [13,14,26,1,5,3,4]
// function SelectionSort(number){
//     var min ; 
//     for (let i = 0; i < number.length -1  ; i++ )
//     {
//         min = i ;
//         for(let j = i +1 ; j < number.length ; j++ ){
//             if ( number[j]< number[min]){ 
//                 min = j;
//             }
//         }
//         let temp = number[i]
//             number[i] = number[min]
//             number[min] = temp 
//             console.log(number)
//     }
//     console.log(number)
// }
// SelectionSort(numbersort)



// thuật toán nổi bọt - Bubble Sort 
// function BubbleSort (number){
//     for( let i =0; i < number.length ; i++)
//     {
//         for (let j = number.length -1 ; j > i ; j-- )
//         {
//             if(number[j]<number[j-1])
//                 {
//                     let temp = number[j]
//                     number[j] = number[j-1]
//                     number[j-1] = temp 
//                 }
//         }
//     }
//     console.log(number)
// }
// var numbersort = [13,14,26,1,5,3,4]
// BubbleSort(numbersort)

// chèn trực tiếp InsertionSort 
// function InsertionSort(number){
//     let x , pos; 
//     for(let i = 1; i < number.length ; i++){
//         x = number[i];
//         pos = i-1; 
//         while((pos >= 0)&& number[pos]>x)
//         {
//             number[pos+1]=number[pos];
//             pos--;
//         }
//         number[pos+1]= x
//     }
//     console.log(number)
// }
// var numbersort = [13,14,26,1,5,3,4]
// InsertionSort(numbersort)

/////////// class oop ///////
// class Dog{
//     constructor(name){
//         this.name = name;
//     }
//     bark(){
//         console.log(this.name + " is barking")
//     }
// }

// let newDog = new Dog("laddie")
// newDog.bark()

// tính trừa tượng các đối tượng thuộc lớp khác nhau có thể có các hàm cùng tên 
// class animals{
//     constructor(name,age){
//         this.name = name ;
//         this.age = age;
//     }
//     sing()
//     {
//         return `${this.name} can sing`;
//     }
//     dance(){
//         return `${this.name} can dance`;
//     }
// } 
// class Cats extends animals{
//     constructor(name,age,whiskerColor){
//         super(name,age);
//         this.whiskerColor = whiskerColor;
//     }
//     sing()
//     {
//         return `cats ${this.name} can sing`;
//     }
//     whisker(){
//         return `I have ${this.whiskerColor} whiskers`;
//     }
// }
// let clara = new Cats("clara",33,"indigo");
// console.log(clara.sing())
// console.log(clara.whisker())

// tính đa hình 
class animals{
    constructor(name,age){
        this.name = name ;
        this.age = age;
    }
    sing()
    {
        return `${this.name} can sing`;
    }
    dance(){
        return `${this.name} can dance`;
    }
} 
class Cats extends animals{
    constructor(name,age,whiskerColor){
        super(name,age);
        this.whiskerColor = whiskerColor;
    }
    sing()
    {
        return `cats ${this.name} can sing`;
    }
    whisker(){
        return `I have ${this.whiskerColor} whiskers`;
    }
}
class Dogs extends animals{
    sing()
    {
        return `dogs ${this.name} can sing`;
    }
}
let clara = new Cats("clara",33,"indigo");
let huts = new Dogs("clara",33,"indigo");
console.log(clara.sing())
console.log(huts.sing())

mot hai ba bon nam


