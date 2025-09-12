function renderBooks() {
    const bookTitle = document.getElementById("bookTitle");
    let bookTitleRef = ""; //  variable wird geleert. wird genutzt, um die Daten für alle Bücher zu sammeln.

    for (let i = 0; i < books.length; i++) {  /* Eine Schleife, die durch alle Bücher im books-Array geht.   books.length ist die Anzahl der Bücher.*/
        bookTitleRef += renderBook(books[i], i);
    }

    bookTitle.innerHTML = bookTitleRef;
}

function toggleHeart(i) {
    // Liked-Status umkehren (true → false oder false → true)
    if (books[i].liked === true) {
        books[i].liked = false;
        books[i].likes -= 1;
    } else {
        books[i].liked = true;
        books[i].likes += 1;
    }

    // Seite neu rendern, um das neue Herz-Icon & Like-Zahl anzuzeigen
    renderBooks()}




function renderComments(book) {
    let commentTemplate = ""; // variable wird geleert. wird genutzt, um die Daten für alle kommentare zu sammeln.

    for (let j = 0; j < book.comments.length; j++) {
        let latestComment = book.comments[j];
        commentTemplate += `
      <article class="commentary">
       <strong> ${latestComment.name}:</strong><br> <br>
        ${latestComment.comment} 
      </article>
    `;
    }

    return commentTemplate;
}


function inputField(i) {
    return `
    <input type="text" id="commentInput-${i}" placeholder="Dein Kommentar">
    <button onclick="addComment(${i})">Kommentar abschicken</button>
  `;
}

function addComment(i) {
    let name = "Daniel";
    let comment = document.getElementById(`commentInput-${i}`).value.trim();

    if (comment) {
        books[i].comments.push({ name, comment });
        renderBooks(); // Seite neu aufbauen
    } else {
        alert("Bitte Kommentar eingeben.");
    }
}
