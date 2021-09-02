// search area
const searchBook=()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value= '';
    if(searchText==''){
        document.getElementById('notfound').innerText='serch field cannot be empty';
}
      const url = (`https://openlibrary.org/search.json?q=${searchText}`)
        fetch(url)
        .then(response=>response.json())
        .then(data=>displayResul(data.docs))
    }
   
      // books show
const displayResul = books=>{
  document.getElementById('result').innerText=`Total books:${books.length}`
  
if(books.length==0){
  document.getElementById('error-message').innerText='Not Result Found'
}
else{
  document.getElementById('error-message').innerText="";
}
    console.log(books);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent='';
    
    document.getElementById('notfound').textContent='';
    books.forEach(book=>{
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`
            <div class="card h-100">
            <img style="height: 243px;" src="http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h3 class="card-text">Book Name:${book.title}</h3>
            <h5 class="card-title">Author Name:${book.author_name}</h5>
            <h6>Publisher:${book.publisher}</h6>
            <p class="card-text">Published:${book.publish_year}</p>
            </div>
          </div>
            `;
            searchResult.appendChild(div)
        })
        
     
}




