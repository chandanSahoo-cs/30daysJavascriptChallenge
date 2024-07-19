const book1={
    title : "Blue Lock",
    author : "Someone from Japan",
    year : "2023",
    titleAuthor : ()=>{
        console.log(`Name of the book ${book1.title} written by ${book1.author}`)
    },
    updateYear : ()=>{
        book1.year = "2024"
        console.log(`Updated year : ${book1.year}`)
    },
    titleAuthorThis : function(){
        console.log(`Name of the book ${this.title} written by ${this.author}`)
    }
}
console.log(`Name of the book ${book1.title}`)
console.log(`Author of the book ${book1.author}`)

book1.titleAuthor();
book1.updateYear();

const book2={
    title : "Naruto",
    author : "Someone from Japan",
    year : "2023",
}


const library={
    name : "Anime Library",
    books : [
        book1,
        book2
    ]
}
console.log(library)

console.log(`Name of the library ${library.name}`)
library.books.map((ele)=>{console.log(`Name of the book ${ele.title}`)})

book1.titleAuthorThis();

for(const key in book1){
    if(book1.hasOwnProperty(key)) console.log(`${key} : ${book1[key]}`)
}

console.log(Object.keys(book1))
console.log(Object.values(book2))