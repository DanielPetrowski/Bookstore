function renderBook(book, i) {
    let heartIcon;

    if (book.liked === true) { // wenn geliked ist das ausgefülltes Herz
        heartIcon = "./img/heart-icon.png";
    } else {
        heartIcon = "./img/heart-thin-icon.png"; // sonst leeres herz 
    }

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
      <div class="commentary">Kommentare:</div>
      ${renderComments(book)}
      ${inputField(i)}
    </div>`;

    return bookTemplate;
}