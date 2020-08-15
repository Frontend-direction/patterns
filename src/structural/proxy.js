// External API
function LibraryApi() {
  this.getBooksByAuthor = function(author) {
    switch(author) {
      case 'J.K.Rolling': 
        return 'Harry Potter';
      case 'J.R.R.Tolkien':
        return 'Lord of the rings';
    }
  }
}

const cashe = new Map();
function ProxyLibrary () {
  this.api = new LibraryApi();
  this.getBooks = function (author) {
    if(cashe.get(author)){
      return cashe.get(author);
    }

    const books = this.api.getBooksByAuthor(author)
    cashe.set(author, books);
    return cashe.get(author);
  }
}

const proxy = new ProxyLibrary();
const rollingBooks = proxy.getBooks('J.K.Rolling')
console.log(rollingBooks)
