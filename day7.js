// Object Creation and objects
let book={
    title:"Song of Ice and Fire",
    author:"George R R Martin",
    year: 2000
}

console.log(book)
console.log(book.year)
console.log(book["title"])


//Object Methods
book.getInfo=function(){
    console.log(`${this.title} is written by ${this.author}`)
}
book.getInfo();

book.setYear=function(y){
    this.year=y;
    console.log(this)
}
book.setYear(1994)

//Nested Objects
let library={
    name: "ABC",
    books: [
        {
            title:"Song of Ice and Fire 1",
            author:"George R R Martin",
            year: 2003
        },
        {
            title:"Song of Ice and Firen 2",
            author:"George R R Martin",
            year: 2037
        },
        {
            title:"Song of Ice and Fire 3",
            author:"George R R Martin",
            year: 20033
        }
    ]
}

console.log(library.name)
library.books.forEach((obj)=>{
    console.log(obj.title)
})

//Object iteration
console.log(Object.keys(book))
console.log(Object.values(book))
for(key in book)
    console.log(book[key])