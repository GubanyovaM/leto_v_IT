var books = new Array();
var objbook = new Object();
books[0] = objbook; 
var book = books[0];


function Pridat() {

	var text = "";
	var i;

	book.kniha = document.getElementById('kni').value;
	book.autor = document.getElementById('aut').value;
	book.kus = document.getElementById('ks').value;
	books.push(book);



		for (i = 0; i < books.length - 1; i++) {
			text += (i + 1) + ". " + book.kniha + " (autor: " + book.autor + ", ks: " + book.kus + ")<br />";
				
		}

		document.getElementById("tab").innerHTML = text;	
	
/* PRECO MI TO VKUSE PO KAZDOM KLIKU PREPISUJE?????? POTREBUJEM DVE FUNKCIE?????*/
	
}


/* ALTERNATIVA */

/*
const books = [];
function addBook() {
	books.push({
		name: document.getElementById('book').value;,
		author: document.getElementById('author').value;
		stock: document.getElementById('stock').value;
	});

	createList();
}

function createList () {
	let formatedList = "";
	for (i = 0; i < books.length; i++) {
			const book = books[i];
			formatedList += book.name + '(Autor: ' + book.autor + ', ks: ' + book.stock + ')</br>';
				
	}
	
	document.getElementById('List').innerHTML = formattedList;
}

<br /> - HTML5

*/