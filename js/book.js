const searchBook=()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    const url = (`http://openlibrary.org/search.json?q=${searchText}`)
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayResul(data.docs))
    searchField.value= '';
}

const displayResul = books=>{
    console.log(books);
    const searchResult = document.getElementById('search-result');
    books.forEach(book=>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card">
        <img width="200px" src=https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${book.title}</p>
        <h5 class="card-title">Author Name:${book.author_name}</h5>
        <p class="card-text">${book.publish_year}</p>
        </div>
      </div>
        `;
        searchResult.appendChild(div)
    })
}

