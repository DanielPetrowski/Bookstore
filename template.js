function renderBook(book, i, heartIcon) {
    let bookTemplate = `
    <div class="book">
      <h2>${book.name}</h2>
      <div><img class="bookimg" src="./img/book-image.png" alt=""></div>
      <div class="details">
        Price: ${book.price}€  
        <span class="details">
          Likes: <span id="like-count-${i}">${book.likes}</span>
          <img class="heart"
            id="heart-${i}" 
            src="${heartIcon}" 
            onclick="toggleHeart(${i})">
        </span>
      </div> 
      <div class="details">Author: ${book.author}</div>

      <div class="comment-section">
        <div class="commentary">Kommentare:</div>
        <div class="comment-wrapper">
          ${renderComments(book)}
        </div>
        ${inputField(i)}
      </div>
    </div>`;
    return bookTemplate;
}

function inputField(i) {
    return `
    <input type="text" id="commentInput-${i}" placeholder="Dein Kommentar">
    <button onclick="addComment(${i})">Kommentar abschicken</button>
  `;
}