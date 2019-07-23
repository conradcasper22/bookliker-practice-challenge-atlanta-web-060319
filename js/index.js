const BOOKS_URL = "http://localhost:3000/books"

document.addEventListener("DOMContentLoaded", setUpPage)

function setUpPage(){
    
    getAllBooks()
    
}

function getAllBooks(){
    fetch(BOOKS_URL)
    .catch(error => console.log("Errors:", error))
    .then(res => res.json())
    .then(data => displayBooks(data))
}

function displayBooks(data){
    data.forEach(createBook)
}



function createBook(book){
    let showDiv = document.querySelector("#show-panel")
    let bookUl = document.querySelector("#list")

    let bookDiv = document.createElement("div")
    bookDiv.className = "book"
    bookDiv.setAttribute("data-id", `${book.id}`)
    bookDiv.style.visibility = "hidden";


    let title = document.createElement("h3")
    title.innerText = book.title
    let img = document.createElement("img")
    img.src = book.img_url
    let desc = document.createElement("p")
    desc.innerText = book.description
    let ul = document.createElement("ul")
    let likeBtn = document.createElement("button")
    likeBtn.innerText = "Like Book"
    likeBtn.addEventListener("click", handleLike)


    book.users.forEach(user => {
        let userLi = document.createElement('li')
        userLi.innerText = user.username
        userLi.setAttribute("data-id", `${user.id}`)

        ul.appendChild(userLi)
    })



    
    let li = document.createElement('li')
    li.innerText = book.title
    li.setAttribute("data-id", `${book.id}`)
    li.addEventListener("click", handleBookClick)

    
    bookDiv.appendChild(title)
    bookDiv.appendChild(img)
    bookDiv.appendChild(desc)
    bookDiv.appendChild(ul)

    bookDiv.appendChild(likeBtn)



    showDiv.appendChild(bookDiv)
    bookUl.appendChild(li)
}


function handleBookClick(e){
    let books = document.querySelectorAll(".book")
    
    let bookId = e.target.dataset.id

    books.forEach(book => {
        book.style.visibility = "hidden";
       if (book.dataset.id === bookId){
        book.style.visibility = "visible";
       }
    })
    


}

function handleLike(e){
    let id = parseInt(e.target.parentElement.dataset.id)
    console.log(e.target.previousSibling.querySelectorAll('li'))



    // data= {
    //     "users": [

    //     ]
    // }

    // let reqObj = {
    //     method: "PATCH",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body:JSON.stringify(data)
    // }



    // fetch(`http://localhost:3000/books/${id}`)
}




