let books;
let isbns;
let isbnsShown = [];
let bookmarksPrefix = "savelater:";
let savedBooks = [];

function loadBooks(cb) {
	url = './dump.jl'
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       // Action to be performed when the document is read;
	       // console.log(this.response);
	       books = JSON.parse(this.response);
	       isbns = Object.keys(books);
	       cb();

	    }
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

loadBooks(() => {
	var isbn = isbns.splice(Math.floor(Math.random()*isbns.length), 1);
	var book = books[isbn];
	document.getElementById('title').innerHTML = book.title;
	document.getElementById('isbn').innerHTML = '<b>ISBN: </b>' + book.isbn;
	document.getElementById('author').innerHTML = '<b>Author: </b>' + book.author.replace('by ','').replace('.','');
	document.getElementById('description').innerHTML = book.desc;
	document.getElementById('subject').innerHTML = '<b>Genre: </b>' + book.s;
	document.getElementById('gr').innerHTML = '<b> Good read ID: </b>' + book.gr;
});
