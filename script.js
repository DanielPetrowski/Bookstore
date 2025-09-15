function renderBooks() {
    const bookTitle = document.getElementById("bookTitle");
    let bookTitleRef = "";

    for (let i = 0; i < books.length; i++) {
        let heartIcon;

        // Wichtig: hier korrekt auf books[i] zugreifen
        if (books[i].liked === true) {
            heartIcon = "./img/heart-icon.png";
        } else {
            heartIcon = "./img/heart-thin-icon.png";
        }

        // Herzsymbol mit übergeben!
        bookTitleRef += renderBook(books[i], i, heartIcon);
    }

    bookTitle.innerHTML = bookTitleRef;
}


function toggleHeart(i) {
    if (books[i].liked === true) {
        books[i].liked = false;
        books[i].likes -= 1;
    } else {
        books[i].liked = true;
        books[i].likes += 1;
    }

    renderBooks(); // Neu rendern
}

    // Seite neu rendern, um das neue Herz-Icon & Like-Zahl anzuzeigen
    renderBooks()




function renderComments(book) {
    let commentTemplate = "";

    for (let j = 0; j < book.comments.length; j++) {
        let latestComment = book.comments[j];
        commentTemplate += `
      <article class="commentary">
       <strong>${latestComment.name}:</strong><br> 
        ${latestComment.comment} 
      </article>
    `;
    }

    return commentTemplate;
}


function addComment(i) {
    let name = "Daniel";
    let input = document.getElementById(`commentInput-${i}`);
    let comment = input.value.trim();
    let errorContainer = document.getElementById(`error-${i}`);

    if (comment) {
        books[i].comments.push({ name, comment });
        renderBooks(); // Seite neu aufbauen
    } else {
        if (errorContainer) {
            errorContainer.textContent = "Bitte Kommentar eingeben.";
        }
    }
}
