// message that file is linked to html
console.log("connected and ready")

// apiKey
const apiKey = "AIzaSyBWqQ-M9D80N6FOQFj6XC8FwQ2_LrBHU1A"

// window on load
$(() => {

  // starting variables
  const searchBooks = (event) => {
  event.preventDefault()
  const search = $(event.currentTarget).val()
  // console.log($(event.currentTarget).val())
  // empty contents
  $('main').empty()
  // reset button function

  $.ajax({
    // retrieves data from API, filter for three categories
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&key="+apiKey,

  }).then(
      (data) => {
        // console.log(data.items[0])
        // loop through the list of books
        for (let i = 0; i < 10; i++) {
        // create container for search results
        const results = $('<div>').addClass('search')
        $('main').append(results)
        // gets img for blockchain search result
        console.log(data.items[i]);

        if (data.items[i].volumeInfo.imageLinks === undefined) {
          console.log("image does not exist");
          // need to create "does not exist" default image
        } else {
          const $image = $('<div>').addClass('img')

          const $imageDiv = $('<img>').attr('src', data.items[i].volumeInfo.imageLinks.thumbnail)

            $(results).append($image)
            $($image).append($imageDiv)
        }
        // gets title of book
        const $title =
          $('<p>').text(data.items[i].volumeInfo.title).addClass('title') // subtitle?
          $(results).append($title)
        // gets subtitle
        const $subtitle =
          $('<p>').text(data.items[i].volumeInfo.subtitle).addClass('subtitle') // subtitle?
          $(results).append($subtitle)
        // gets author info
        const $author = $('<p>')
          for (let j = 0; j < data.items[i].volumeInfo.authors.length; j++) {
            $span = $('<span>').addClass('author')
            if (data.items[i].volumeInfo.authors.length-1 == j) {
              $span.html(data.items[i].volumeInfo.authors[j])
            } else {
              $span.html(data.items[i].volumeInfo.authors[j] + ', ')
            }
            $author.append($span)
          }
        $(results).append($author)
        // gets textSnippet
        const $textSnippet =
          $('<p>').html(data.items[i].searchInfo.textSnippet || 'text not available').addClass('textSnippet')
          console.log($textSnippet);
          $(results).append($textSnippet)

        }
      }
    )
  }
    // event handler for button click
    $('.button').on('click', searchBooks)
    // reset button
    // code goes here
})
